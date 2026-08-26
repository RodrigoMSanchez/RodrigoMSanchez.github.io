// Personal activity heatmap: draws GPS tracks (encoded polylines) on a dark
// basemap. Data: /assets/json/heatmap-tracks.json, generated offline from
// Strava GPS exports (privacy zones cropped at build time).
(function () {
  "use strict";

  // --- Google encoded-polyline decoder (precision 5) ------------------------
  function decodePolyline(str) {
    var points = [], index = 0, lat = 0, lng = 0;
    while (index < str.length) {
      var b, shift = 0, result = 0;
      do { b = str.charCodeAt(index++) - 63; result |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
      lat += (result & 1) ? ~(result >> 1) : (result >> 1);
      shift = 0; result = 0;
      do { b = str.charCodeAt(index++) - 63; result |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
      lng += (result & 1) ? ~(result >> 1) : (result >> 1);
      points.push([lat / 1e5, lng / 1e5]);
    }
    return points;
  }

  var el = document.getElementById("activity-heatmap");
  if (!el) return;

  // Switzerland only: lock the view to the country.
  var CH_BOUNDS = L.latLngBounds([45.75, 5.9], [47.85, 10.55]);
  var map = L.map(el, {
    preferCanvas: true,
    scrollWheelZoom: true,
    maxBounds: CH_BOUNDS.pad(0.05),
    maxBoundsViscosity: 1.0,
    minZoom: 7,
    maxZoom: 16,
  });
  map.fitBounds(CH_BOUNDS);

  // Esri's Dark Gray Canvas, which needs no API key. CARTO's dark_all basemap
  // was used until Aug 2026, when CARTO began stamping keyless tiles with an
  // "API KEY REQUIRED" watermark. Labels ship as a separate reference layer
  // and are added second so they sit above the shaded base.
  var ESRI_CREDIT =
    'Tiles &copy; <a href="https://www.esri.com/">Esri</a> &mdash; Esri, HERE, Garmin, ' +
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    { attribution: ESRI_CREDIT, maxZoom: 16 }
  ).addTo(map);

  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
    { attribution: "", maxZoom: 16 }
  ).addTo(map);

  var GLOW = { color: "#FC4C02", weight: 4, opacity: 0.07, interactive: false };
  var CORE = { color: "#FF6A2B", weight: 1.4, opacity: 0.5, interactive: false };

  var years = [Infinity, -Infinity];

  fetch(el.getAttribute("data-src"))
    .then(function (r) { return r.json(); })
    .then(function (data) {
      data.activities.forEach(function (a) {
        if (a.y < years[0]) years[0] = a.y;
        if (a.y > years[1]) years[1] = a.y;
        a.p.forEach(function (enc) {
          var pts = decodePolyline(enc);
          if (pts.length < 2) return;
          L.polyline(pts, GLOW).addTo(map);
          L.polyline(pts, CORE).addTo(map);
        });
      });

      // the container often sizes after init (async CSS / layout); make sure
      // the canvas is drawn at the right size and the view is framed on CH
      map.invalidateSize();
      map.fitBounds(CH_BOUNDS);

      // stat line; the wording comes from the page so it follows its language
      var stat = document.getElementById("heatmap-stats");
      if (stat) {
        stat.textContent =
          data.activities.length +
          " " +
          (el.dataset.labelActivities || "activities") +
          " · " +
          years[0] +
          "–" +
          years[1];
      }
    })
    .catch(function (err) {
      el.innerHTML =
        '<p style="padding:1rem">' +
        (el.dataset.labelError || "Could not load track data") +
        " (" +
        err +
        ").</p>";
    });
})();
