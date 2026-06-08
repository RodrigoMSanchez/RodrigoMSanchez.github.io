---
layout: page
permalink: /beyond/
title: Beyond Research
description: Quantitative questions I chase for fun, starting with whether my carbon wheels were worth it.
nav: true
nav_order: 5
---

Outside my academic work, I sometimes turn the same methods on much less serious questions. This is one of them.

### Do expensive carbon wheels make you faster?

Like a lot of cyclists, I wondered whether expensive carbon wheels are actually faster or mostly marketing. I record every ride, so I checked on my own data. On 21 April 2026 I replaced my road bike's aluminium wheels with deep-section carbon ones and left everything else unchanged.

Adjusting for power and terrain, the carbon setup is the fastest of my three bikes, about **+1.2 km/h** quicker than the same road bike on its old alloy wheels:

{% include figure.liquid loading="eager" path="assets/img/wheels/speed_by_setup.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Adjusted average speed by setup, holding power and terrain at their means. The carbon road bike is the fastest of the three, about +1.2 km/h ahead of the same bike on alloy wheels. Bars are 95% confidence intervals." %}

That could be the wheels, but it could also just be that I was fitter and the weather was better. To separate the two, I use my gravel bike, ridden on the same roads in the same weeks and never upgraded, as a control: it should not speed up unless the season, rather than the wheels, is doing the work. In a difference-in-differences after the install, the road bike gains **+1.7 km/h** and the gravel bike does not:

{% include figure.liquid loading="eager" path="assets/img/wheels/main_results.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Road bike versus the gravel-bike placebo (difference-in-differences, season and year fixed effects, at equal power and terrain). After the install the road bike gains +1.7 km/h while the never-upgraded gravel bike does not (-1.2). Bars are 95% confidence intervals." %}

Comparing like season with like season, though, most of that gap goes away, so I wouldn't read too much into six weeks of data.

I wrote it up as a tongue-in-cheek working paper, with real tables, a placebo, and a conflict-of-interest statement (I own the wheels):

<div class="mt-3">
<a class="btn btn-sm z-depth-0" role="button" href="{{ '/assets/pdf/wheels_carbon.pdf' | relative_url }}">📄 Working paper (PDF)</a>
</div>

<p class="mt-3"><em>Half-serious. The regressions are real.</em></p>
