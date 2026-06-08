---
layout: page
permalink: /beyond/
title: Beyond Research
description: Quantitative questions I chase for fun, starting with whether my carbon wheels were worth it.
nav: true
nav_order: 5
---

Outside my academic work, I like pointing the same tools (causal inference and a healthy fear of confounders) at questions that are far less consequential and a lot more fun. This is where those live.

## Do expensive carbon wheels make you faster?

Like most cyclists, I eventually faced The Question: are expensive carbon wheels actually faster, or just very pretty marketing? I record every ride, so instead of arguing about it online I ran the numbers on myself. On 21 April 2026 I swapped my road bike's shallow aluminium wheels for deep-section carbon aero wheels and left everything else untouched.

Adjusting for power and terrain, the carbon setup is the fastest of my three bikes, about **+1.2 km/h** quicker than the very same road bike on its old alloy wheels:

{% include figure.liquid loading="eager" path="assets/img/wheels/speed_by_setup.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Adjusted average speed by setup, holding power and terrain at their means. The carbon road bike is the fastest of the three, about +1.2 km/h ahead of the same bike on alloy wheels. Bars are 95% confidence intervals." %}

Tempting, but a faster spring could just be a fitter, sunnier me. So I use my never-upgraded **gravel bike**, ridden the same roads in the same weeks, as a placebo: it should *not* speed up unless the season, rather than the wheels, is doing the work. In a difference-in-differences after the install, the road bike gains **+1.7 km/h** while the gravel bike doesn't:

{% include figure.liquid loading="eager" path="assets/img/wheels/main_results.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Road bike versus the gravel-bike placebo (difference-in-differences, season and year fixed effects, at equal power and terrain). After the install the road bike gains +1.7 km/h while the never-upgraded gravel bike does not (-1.2). Bars are 95% confidence intervals." %}

That points to a real effect, but I won't oversell it: the placebo rests on only four post-install gravel rides, and once I compare like season with like season the road gain shrinks to about **+0.4 km/h, indistinguishable from zero**. With one rider and six weeks of carbon data, I genuinely can't tell whether I bought speed or a very aerodynamic placebo. The wheels are, however, extremely nice to look at.

I wrote it up as a (very) tongue-in-cheek working paper, with real tables, a placebo, and a conflict-of-interest statement (I own the wheels):

<div class="mt-3">
<a class="btn btn-sm z-depth-0" role="button" href="{{ '/assets/pdf/wheels_carbon.pdf' | relative_url }}">📄 Working paper (PDF)</a>
</div>

<p class="mt-3"><em>Half-serious. The regressions, regrettably, are real.</em></p>
