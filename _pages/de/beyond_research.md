---
layout: page
permalink: /de/neben-der-forschung/
ref: beyond
title: Neben der Forschung
description: Velofahren, draussen sein und ab und zu eine Frage an die Daten.
nav: true
nav_order: 5
images:
  slider: true
  spotlight: true
---

{% include beyond_styles.liquid %}

<p class="beyond-lead">Neben meiner akademischen Arbeit ist Velofahren mein wichtigstes Hobby, und hin und wieder überschneidet es sich mit dem Beruf.</p>

Ich fahre Velo, draussen und drinnen auf Zwift, und versuche auf 8 bis 12 Stunden pro Woche zu kommen, auch wenn der ehrliche Durchschnitt eher bei 8 oder 9 liegt; in einer guten Woche werden es 12, aber meistens kommt das Leben dazwischen. Das meiste davon rund um Fribourg, wo ich wohne: in die Hügel und Berge, wenn ich klettern möchte, und Richtung Murtensee, wenn ich flachere und schnellere Strassen suche. Abseits des Velos wandere ich auch, nichts allzu Extremes, und gehe gelegentlich laufen. Ich zeichne alles auf [Strava](https://www.strava.com/athletes/51373334) auf, falls Sie mitverfolgen möchten.

<div class="spotlight-group">
<swiper-container class="beyond-album" slides-per-view="auto" centered-slides="true" space-between="14" navigation="true" pagination="true" pagination-clickable="true" grab-cursor="true" rewind="true">
<swiper-slide><a class="spotlight" href="{{ '/assets/img/beyond/bike-prealps.jpg' | relative_url }}" data-title="Mit dem Rennvelo bei Schwarzenburg, dahinter die Voralpen. Frühling 2026.">{% include figure.liquid loading="eager" path="assets/img/beyond/bike-prealps.jpg" class="rounded z-depth-1" %}</a><p class="caption">Mit dem Rennvelo bei Schwarzenburg, dahinter die Voralpen. Frühling 2026.</p></swiper-slide>
<swiper-slide><a class="spotlight" href="{{ '/assets/img/beyond/bike-lacleman.jpg' | relative_url }}" data-title="Anstieg über dem Genfersee, in den Weinbergen des Lavaux (Puidoux). Frühling 2026.">{% include figure.liquid loading="eager" path="assets/img/beyond/bike-lacleman.jpg" class="rounded z-depth-1" %}</a><p class="caption">Anstieg über dem Genfersee, in den Weinbergen des Lavaux (Puidoux). Frühling 2026.</p></swiper-slide>
<swiper-slide><a class="spotlight" href="{{ '/assets/img/beyond/hike-ridge.jpg' | relative_url }}" data-title="Wandern in den Alpen. Sommer 2025.">{% include figure.liquid loading="eager" path="assets/img/beyond/hike-ridge.jpg" class="rounded z-depth-1" %}</a><p class="caption">Wandern in den Alpen. Sommer 2025.</p></swiper-slide>
<swiper-slide><a class="spotlight" href="{{ '/assets/img/beyond/trail-meadow.jpg' | relative_url }}" data-title="Oberhalb des Schwarzsees, in den Freiburger Voralpen. Frühling 2024.">{% include figure.liquid loading="eager" path="assets/img/beyond/trail-meadow.jpg" class="rounded z-depth-1" %}</a><p class="caption">Oberhalb des Schwarzsees, in den Freiburger Voralpen. Frühling 2024.</p></swiper-slide>
<swiper-slide><a class="spotlight" href="{{ '/assets/img/beyond/run-winter.jpg' | relative_url }}" data-title="Ein Lauf durch frischen Schnee. Winter 2024.">{% include figure.liquid loading="eager" path="assets/img/beyond/run-winter.jpg" class="rounded z-depth-1" %}</a><p class="caption">Ein Lauf durch frischen Schnee. Winter 2024.</p></swiper-slide>
</swiper-container>
</div>

<div class="hm-wrap">
  <div class="hm-head">
    <span class="hm-kicker">Wo ich fahre</span>
    <span class="hm-stats" id="heatmap-stats"></span>
  </div>
  {%- assign t = site.data.i18n[page.lang] -%}
  <div
    id="activity-heatmap"
    data-src="{{ '/assets/json/heatmap-tracks.json' | relative_url }}"
    data-label-activities="{{ t.activities }}"
    data-label-error="{{ t.heatmap_error }}"
  ></div>
  <p class="hm-note">Alle Ausfahrten, Läufe, Wanderungen und Spaziergänge, die ich in der Schweiz aufgezeichnet habe, gezeichnet aus den rohen GPS-Spuren.</p>
</div>

#### Wenn das Hobby auf den Beruf trifft

<div markdown="1">
Wer jahrelang jede Ausfahrt aufzeichnet, sammelt eine Menge Daten, also habe ich die naheliegende Frage getestet: Sind die teuren Carbon-Laufräder, die ich gekauft habe, tatsächlich schneller, oder ist das vor allem Marketing? Am 21. April 2026 habe ich an meinem Rennvelo die Aluminium-Laufräder gegen hohe Carbon-Laufräder getauscht und sonst nichts verändert. Unter Kontrolle von Leistung und Gelände ist der Carbon-Aufbau das schnellste meiner drei Velos, rund **+1,3 km/h** gegenüber demselben Velo mit Alu-Laufrädern; und in einem Differenz-in-Differenzen-Vergleich mit meinem nie aufgerüsteten Gravelvelo gewinnt das Rennvelo **+2,2 km/h**, das Gravelvelo dagegen nicht. Vergleicht man allerdings gleiche Jahreszeiten miteinander, verschwindet der grösste Teil dieses Unterschieds, ich würde aus wenigen Monaten Daten also nicht zu viel herauslesen.
</div>

<div class="row align-items-start g-4 mt-1 wheels-figs">
<div class="col-md-6">
{% include figure.liquid loading="eager" path="assets/img/wheels/speed_by_setup.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Angepasste Durchschnittsgeschwindigkeit je Aufbau, bei mittlerer Leistung und mittlerem Gelände. Das Rennvelo mit Carbon-Laufrädern ist das schnellste der drei, rund +1,3 km/h vor demselben Velo mit Alu-Laufrädern." %}
</div>
<div class="col-md-6">
{% include figure.liquid loading="eager" path="assets/img/wheels/main_results.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Rennvelo gegen das Gravelvelo als Placebo (Differenz-in-Differenzen, bei gleicher Leistung und gleichem Gelände). Das Rennvelo gewinnt nach dem Einbau +2,2 km/h, das nie aufgerüstete Gravelvelo nicht." %}
</div>
</div>

<div class="mt-2 mb-1">
<a class="btn z-depth-0" role="button" href="{{ '/assets/pdf/wheels_carbon.pdf' | relative_url }}">📄 Arbeitspapier (PDF, auf Englisch)</a>
<span class="ms-2 text-muted"><em>Halb im Ernst. Die Regressionen sind echt.</em></span>
</div>

<script src="{{ '/assets/leaflet/leaflet.js' | relative_url }}"></script>
<script src="{{ '/assets/js/heatmap.js' | relative_url }}"></script>
