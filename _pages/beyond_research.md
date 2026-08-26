---
layout: page
permalink: /beyond/
ref: beyond # pairs this page with its German and Spanish counterparts
title: Beyond Research
description: Cycling, the outdoors, and the occasional data question.
nav: true
nav_order: 5
images:
  slider: true
  spotlight: true
---

{% include beyond_styles.liquid %}

<p class="beyond-lead">Outside my academic work, my main hobby is cycling, and now and then it overlaps with the day job.</p>

I ride bikes, both outdoors and indoors on Zwift, and I try to put in 8 to 12 hours a week, though the honest average is closer to 8 or 9; a good week hits 12, but life tends to get in the way. Most of it is around Fribourg, where I live: into the hills and mountains when I want to climb, and out toward the Murtensee (Lake Murten) when I want flatter, faster roads. Off the bike, I also hike, nothing too extreme, and go for the occasional run. I log it all on [Strava](https://www.strava.com/athletes/51373334), if you want to follow along.

<div class="spotlight-group">
<swiper-container class="beyond-album" slides-per-view="auto" centered-slides="true" space-between="14" navigation="true" pagination="true" pagination-clickable="true" grab-cursor="true" rewind="true">
<swiper-slide><a class="spotlight" href="{{ '/assets/img/beyond/bike-prealps.jpg' | relative_url }}" data-title="On the road bike near Schwarzenburg, the Préalpes behind. Spring 2026.">{% include figure.liquid loading="eager" path="assets/img/beyond/bike-prealps.jpg" class="rounded z-depth-1" %}</a><p class="caption">On the road bike near Schwarzenburg, the Préalpes behind. Spring 2026.</p></swiper-slide>
<swiper-slide><a class="spotlight" href="{{ '/assets/img/beyond/bike-lacleman.jpg' | relative_url }}" data-title="Climbing above Lake Geneva, in the Lavaux vineyards (Puidoux). Spring 2026.">{% include figure.liquid loading="eager" path="assets/img/beyond/bike-lacleman.jpg" class="rounded z-depth-1" %}</a><p class="caption">Climbing above Lake Geneva, in the Lavaux vineyards (Puidoux). Spring 2026.</p></swiper-slide>
<swiper-slide><a class="spotlight" href="{{ '/assets/img/beyond/hike-ridge.jpg' | relative_url }}" data-title="Hiking in the Alps. Summer 2025.">{% include figure.liquid loading="eager" path="assets/img/beyond/hike-ridge.jpg" class="rounded z-depth-1" %}</a><p class="caption">Hiking in the Alps. Summer 2025.</p></swiper-slide>
<swiper-slide><a class="spotlight" href="{{ '/assets/img/beyond/trail-meadow.jpg' | relative_url }}" data-title="Above Schwarzsee, in the Fribourg Préalpes. Spring 2024.">{% include figure.liquid loading="eager" path="assets/img/beyond/trail-meadow.jpg" class="rounded z-depth-1" %}</a><p class="caption">Above Schwarzsee, in the Fribourg Préalpes. Spring 2024.</p></swiper-slide>
<swiper-slide><a class="spotlight" href="{{ '/assets/img/beyond/run-winter.jpg' | relative_url }}" data-title="A run through fresh snow. Winter 2024.">{% include figure.liquid loading="eager" path="assets/img/beyond/run-winter.jpg" class="rounded z-depth-1" %}</a><p class="caption">A run through fresh snow. Winter 2024.</p></swiper-slide>
</swiper-container>
</div>

<div class="hm-wrap">
  <div class="hm-head">
    <span class="hm-kicker">Where I ride</span>
    <span class="hm-stats" id="heatmap-stats"></span>
  </div>
  {%- assign t = site.data.i18n[page.lang] -%}
  <div
    id="activity-heatmap"
    data-src="{{ '/assets/json/heatmap-tracks.json' | relative_url }}"
    data-label-activities="{{ t.activities }}"
    data-label-error="{{ t.heatmap_error }}"
  ></div>
  <p class="hm-note">Every outdoor ride, run, hike and walk I have recorded across Switzerland, drawn from the raw GPS traces.</p>
</div>

#### When the hobby meets the day job

<div markdown="1">
Recording every ride for years leaves me with a lot of data, so I tested the obvious question: are the expensive carbon wheels I bought actually faster, or mostly marketing? On 21 April 2026 I swapped my road bike's aluminium wheels for deep-section carbon ones and changed nothing else. Adjusting for power and terrain, the carbon setup is the fastest of my three bikes, about **+1.3 km/h** over the same bike on alloy; and in a difference-in-differences against my never-upgraded gravel bike, the road bike gains **+2.2 km/h** while the gravel bike does not. Compare like season with like season, though, and most of that gap goes away, so I wouldn't read too much into a few months of data.
</div>

<div class="row align-items-start g-4 mt-1 wheels-figs">
<div class="col-md-6">
{% include figure.liquid loading="eager" path="assets/img/wheels/speed_by_setup.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Adjusted average speed by setup, holding power and terrain at their means. The carbon road bike is the fastest of the three, about +1.3 km/h ahead of the same bike on alloy wheels." %}
</div>
<div class="col-md-6">
{% include figure.liquid loading="eager" path="assets/img/wheels/main_results.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Road bike versus the gravel-bike placebo (difference-in-differences, at equal power and terrain). The road bike gains +2.2 km/h after the install while the never-upgraded gravel bike does not." %}
</div>
</div>

<div class="mt-2 mb-1">
<a class="btn z-depth-0" role="button" href="{{ '/assets/pdf/wheels_carbon.pdf' | relative_url }}">📄 Working paper (PDF)</a>
<span class="ms-2 text-muted"><em>Half-serious. The regressions are real.</em></span>
</div>

<script src="{{ '/assets/leaflet/leaflet.js' | relative_url }}"></script>
<script src="{{ '/assets/js/heatmap.js' | relative_url }}"></script>
