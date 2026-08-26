---
layout: page
permalink: /es/aficiones/
ref: beyond
title: Fuera de la investigación
nav_title: Aficiones # the navbar row only fits a short label here
description: Ciclismo, aire libre y alguna que otra pregunta a los datos.
nav: true
nav_order: 5
images:
  slider: true
  spotlight: true
---

{% include beyond_styles.liquid %}

<p class="beyond-lead">Fuera de mi trabajo académico, mi principal afición es el ciclismo, y de vez en cuando se cruza con el trabajo.</p>

Salgo en bicicleta, en la carretera y también bajo techo en Zwift, y trato de acumular entre 8 y 12 horas por semana, aunque el promedio honesto está más cerca de 8 o 9; una buena semana llega a 12, pero la vida suele interponerse. La mayor parte es alrededor de Fribourg, donde vivo: hacia las colinas y las montañas cuando quiero subir, y hacia el lago de Morat cuando busco carreteras más llanas y rápidas. Fuera de la bicicleta también hago senderismo, nada demasiado extremo, y salgo a correr de vez en cuando. Lo registro todo en [Strava](https://www.strava.com/athletes/51373334), por si quiere seguirme.

<div class="spotlight-group">
<swiper-container class="beyond-album" slides-per-view="auto" centered-slides="true" space-between="14" navigation="true" pagination="true" pagination-clickable="true" grab-cursor="true" rewind="true">
<swiper-slide><a class="spotlight" href="{{ '/assets/img/beyond/bike-prealps.jpg' | relative_url }}" data-title="Con la bicicleta de carretera cerca de Schwarzenburg, con los Prealpes al fondo. Primavera de 2026.">{% include figure.liquid loading="eager" path="assets/img/beyond/bike-prealps.jpg" class="rounded z-depth-1" %}</a><p class="caption">Con la bicicleta de carretera cerca de Schwarzenburg, con los Prealpes al fondo. Primavera de 2026.</p></swiper-slide>
<swiper-slide><a class="spotlight" href="{{ '/assets/img/beyond/bike-lacleman.jpg' | relative_url }}" data-title="Subiendo por encima del lago Lemán, en los viñedos de Lavaux (Puidoux). Primavera de 2026.">{% include figure.liquid loading="eager" path="assets/img/beyond/bike-lacleman.jpg" class="rounded z-depth-1" %}</a><p class="caption">Subiendo por encima del lago Lemán, en los viñedos de Lavaux (Puidoux). Primavera de 2026.</p></swiper-slide>
<swiper-slide><a class="spotlight" href="{{ '/assets/img/beyond/hike-ridge.jpg' | relative_url }}" data-title="Senderismo en los Alpes. Verano de 2025.">{% include figure.liquid loading="eager" path="assets/img/beyond/hike-ridge.jpg" class="rounded z-depth-1" %}</a><p class="caption">Senderismo en los Alpes. Verano de 2025.</p></swiper-slide>
<swiper-slide><a class="spotlight" href="{{ '/assets/img/beyond/trail-meadow.jpg' | relative_url }}" data-title="Por encima del Schwarzsee, en los Prealpes de Friburgo. Primavera de 2024.">{% include figure.liquid loading="eager" path="assets/img/beyond/trail-meadow.jpg" class="rounded z-depth-1" %}</a><p class="caption">Por encima del Schwarzsee, en los Prealpes de Friburgo. Primavera de 2024.</p></swiper-slide>
<swiper-slide><a class="spotlight" href="{{ '/assets/img/beyond/run-winter.jpg' | relative_url }}" data-title="Una salida a correr sobre nieve fresca. Invierno de 2024.">{% include figure.liquid loading="eager" path="assets/img/beyond/run-winter.jpg" class="rounded z-depth-1" %}</a><p class="caption">Una salida a correr sobre nieve fresca. Invierno de 2024.</p></swiper-slide>
</swiper-container>
</div>

<div class="hm-wrap">
  <div class="hm-head">
    <span class="hm-kicker">Por dónde ruedo</span>
    <span class="hm-stats" id="heatmap-stats"></span>
  </div>
  {%- assign t = site.data.i18n[page.lang] -%}
  <div
    id="activity-heatmap"
    data-src="{{ '/assets/json/heatmap-tracks.json' | relative_url }}"
    data-label-activities="{{ t.activities }}"
    data-label-error="{{ t.heatmap_error }}"
  ></div>
  <p class="hm-note">Todas las salidas en bicicleta, carreras, caminatas y paseos que registré en Suiza, dibujados a partir de los trazos GPS en bruto.</p>
</div>

#### Cuando la afición se cruza con el trabajo

<div markdown="1">
Registrar cada salida durante años deja muchos datos, así que puse a prueba la pregunta obvia: ¿las costosas ruedas de carbono que compré son de verdad más rápidas, o es sobre todo marketing? El 21 de abril de 2026 cambié las ruedas de aluminio de mi bicicleta de carretera por unas de carbono de perfil alto y no modifiqué nada más. Controlando por potencia y terreno, la configuración con carbono es la más rápida de mis tres bicicletas, alrededor de **+1,3 km/h** por encima de la misma bicicleta con ruedas de aluminio; y en una comparación de diferencias en diferencias contra mi bicicleta de gravel, que nunca actualicé, la de carretera gana **+2,2 km/h** mientras que la de gravel no. Ahora bien, si se comparan temporadas equivalentes, la mayor parte de esa diferencia desaparece, así que no le daría demasiada importancia a unos pocos meses de datos.
</div>

<div class="row align-items-start g-4 mt-1 wheels-figs">
<div class="col-md-6">
{% include figure.liquid loading="eager" path="assets/img/wheels/speed_by_setup.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Velocidad media ajustada según la configuración, con la potencia y el terreno en sus valores medios. La bicicleta de carretera con ruedas de carbono es la más rápida de las tres, alrededor de +1,3 km/h por delante de la misma bicicleta con ruedas de aluminio." %}
</div>
<div class="col-md-6">
{% include figure.liquid loading="eager" path="assets/img/wheels/main_results.png" class="img-fluid rounded z-depth-1" zoomable=true caption="La bicicleta de carretera frente a la de gravel como placebo (diferencias en diferencias, a igual potencia y terreno). La de carretera gana +2,2 km/h tras el cambio y la de gravel, que nunca se actualizó, no." %}
</div>
</div>

<div class="mt-2 mb-1">
<a class="btn z-depth-0" role="button" href="{{ '/assets/pdf/wheels_carbon.pdf' | relative_url }}">📄 Documento de trabajo (PDF, en inglés)</a>
<span class="ms-2 text-muted"><em>Medio en serio. Las regresiones son reales.</em></span>
</div>

<script src="{{ '/assets/leaflet/leaflet.js' | relative_url }}"></script>
<script src="{{ '/assets/js/heatmap.js' | relative_url }}"></script>
