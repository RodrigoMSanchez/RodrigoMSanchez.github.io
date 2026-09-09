#!/usr/bin/env python3
"""Crop private locations out of the activity-heatmap track file.

Strava applies privacy zones to its own map view, not to the summary polyline
in an export, so an exported track still starts and ends on the doorstep. This
script removes those places from the encoded polylines themselves.

How it works:
  1. Take the first and last point of every recorded segment. Cluster them;
     any place the rider repeatedly starts or finishes from is treated as
     private.
  2. Delete every vertex within a cut radius of each such place, splitting the
     track into the fragments that survive.
  3. Jitter the cut radius per activity and per place, so the surviving
     endpoints scatter through an annulus instead of tracing a clean circle
     whose centre would give the location straight back.
Detection runs ONCE, on the uncropped input. It deliberately does not iterate
on its own output: cropping leaves fragment ends wherever tracks cross the zone
boundary, and on a shared road those ends fall close together and look like a
new cluster. Chasing them pushes the boundary outward on every pass and never
converges. What matters is that every place the rider actually stopped in the
original file ends up outside the cropped data, which is what verify() checks.

Usage:  python3 _tools/crop_heatmap_privacy.py IN.json OUT.json
"""
import hashlib
import json
import math
import sys

CLUSTER_RADIUS_M = 250   # endpoints closer than this are the same place
MIN_ENDPOINTS = 3        # a place used this often is treated as private
                         # (kept equal to the threshold verify() enforces)
CUT_RADIUS_M = 1000      # base radius removed around each private place
JITTER_M = 500           # extra, deterministic per (activity, place)
MIN_FRAGMENT_POINTS = 5
MIN_FRAGMENT_METRES = 300


def decode(p):
    coords, idx, lat, lng = [], 0, 0, 0
    while idx < len(p):
        for axis in range(2):
            shift = result = 0
            while True:
                b = ord(p[idx]) - 63
                idx += 1
                result |= (b & 0x1F) << shift
                shift += 5
                if b < 0x20:
                    break
            delta = ~(result >> 1) if result & 1 else result >> 1
            if axis == 0:
                lat += delta
            else:
                lng += delta
        coords.append((lat / 1e5, lng / 1e5))
    return coords


def _chunk(value):
    value = ~(value << 1) if value < 0 else (value << 1)
    out = ""
    while value >= 0x20:
        out += chr((0x20 | (value & 0x1F)) + 63)
        value >>= 5
    return out + chr(value + 63)


def encode(coords):
    out, plat, plng = "", 0, 0
    for lat, lng in coords:
        ilat, ilng = int(round(lat * 1e5)), int(round(lng * 1e5))
        out += _chunk(ilat - plat) + _chunk(ilng - plng)
        plat, plng = ilat, ilng
    return out


def metres(a, b):
    return math.hypot((a[0] - b[0]) * 111320,
                      (a[1] - b[1]) * 111320 * math.cos(math.radians((a[0] + b[0]) / 2)))


def jitter(activity_index, place_index):
    """Deterministic per-track offset, so reruns are reproducible."""
    seed = f"{activity_index}:{place_index}".encode()
    return JITTER_M * (int(hashlib.sha256(seed).hexdigest()[:8], 16) / 0xFFFFFFFF)


def endpoints_of(activities):
    """First and last point of every segment, not just of every activity:
    a track split across several polylines stopped at each join."""
    out = []
    for act in activities:
        for poly in act["p"]:
            pts = decode(poly)
            if len(pts) >= 2:
                out += [pts[0], pts[-1]]
    return out


def cluster(endpoints):
    clusters = []
    for pt in endpoints:
        for c in clusters:
            if metres(pt, c["centre"]) < CLUSTER_RADIUS_M:
                c["points"].append(pt)
                n = len(c["points"])
                c["centre"] = (sum(p[0] for p in c["points"]) / n,
                               sum(p[1] for p in c["points"]) / n)
                break
        else:
            clusters.append({"centre": pt, "points": [pt]})
    clusters.sort(key=lambda c: -len(c["points"]))
    return clusters


def private_places(activities):
    """Every place the rider repeatedly started, paused or finished."""
    return [c["centre"] for c in cluster(endpoints_of(activities))
            if len(c["points"]) >= MIN_ENDPOINTS]


def verify(original, cropped, places):
    """No place the rider actually stopped may survive in the output."""
    survivors = [pt for act in cropped for poly in act["p"] for pt in decode(poly)]
    worst = min((min(metres(pt, place) for pt in survivors), place) for place in places)
    stops = [c for c in cluster(endpoints_of(original))
             if len(c["points"]) >= MIN_ENDPOINTS]
    leaked = []
    for c in stops:
        nearest = min(metres(pt, c["centre"]) for pt in survivors)
        if nearest < CUT_RADIUS_M:
            leaked.append((c["centre"], len(c["points"]), nearest))
    return worst, stops, leaked


def crop_activity(act, index, places):
    radii = [CUT_RADIUS_M + jitter(index, j) for j in range(len(places))]
    fragments = []
    for poly in act["p"]:
        current = []
        for pt in decode(poly):
            if any(metres(pt, place) < radii[j] for j, place in enumerate(places)):
                if len(current) >= MIN_FRAGMENT_POINTS:
                    fragments.append(current)
                current = []
            else:
                current.append(pt)
        if len(current) >= MIN_FRAGMENT_POINTS:
            fragments.append(current)
    keep = []
    for frag in fragments:
        span = sum(metres(frag[i], frag[i + 1]) for i in range(len(frag) - 1))
        if span >= MIN_FRAGMENT_METRES:
            keep.append(encode(frag))
    return keep


def main():
    src, dst = sys.argv[1], sys.argv[2]
    data = json.load(open(src))
    activities = data["activities"]
    original = len(activities)

    places = private_places(activities)
    print(f"private places detected: {len(places)}")

    kept = []
    for i, act in enumerate(activities):
        polys = crop_activity(act, i, places)
        if polys:
            act = dict(act)
            act["p"] = polys
            kept.append(act)

    worst, stops, leaked = verify(activities, kept, places)
    print(f"closest surviving vertex to a private place: {worst[0]:.0f} m")
    print(f"repeated stop points in the input: {len(stops)}")
    if leaked:
        print(f"LEAK: {len(leaked)} stop point(s) still within {CUT_RADIUS_M} m of surviving data")
        for centre, n, nearest in leaked[:10]:
            print(f"    {centre[0]:.5f}, {centre[1]:.5f}  n={n}  nearest={nearest:.0f} m")
        raise SystemExit(1)
    print("verified: every repeated stop point is outside the cropped data")

    activities = kept
    data["activities"] = activities
    data["count"] = len(activities)
    json.dump(data, open(dst, "w"), separators=(",", ":"))
    print(f"activities: {original} in, {len(activities)} out")


if __name__ == "__main__":
    main()
