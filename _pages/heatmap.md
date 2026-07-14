---
layout: page
permalink: /heatmap/
title: Heatmap
description: Every outdoor kilometre since 2020 — rides, runs, hikes and walks, drawn from raw GPS traces.
nav: false
---

<link rel="stylesheet" href="{{ '/assets/leaflet/leaflet.css' | relative_url }}" />

<style>
  .hm-stats {
    font-size: 0.85rem;
    color: var(--global-text-color-light, #777);
    margin: 0.25rem 0 0.6rem 0;
    text-align: right;
  }
  #activity-heatmap {
    width: 100%;
    height: 72vh;
    min-height: 420px;
    border-radius: 8px;
    background: #0e0e12;
  }
  .hm-note {
    font-size: 0.8rem;
    color: var(--global-text-color-light, #777);
    margin-top: 0.35rem;
  }
</style>

<p class="hm-stats" id="heatmap-stats"></p>

<div id="activity-heatmap" data-src="{{ '/assets/json/heatmap-tracks.json' | relative_url }}"></div>

<p class="hm-note">
  Drawn from the raw GPS traces of my recorded activities. Privacy areas —
  including the entire city of Fribourg — are removed from the data before the
  map is built, so tracks fade out at their edges. The hidden portions are not
  in the published data at all.
</p>

<script src="{{ '/assets/leaflet/leaflet.js' | relative_url }}"></script>
<script src="{{ '/assets/js/heatmap.js' | relative_url }}"></script>
