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

I'm a fairly obsessive cyclist, and like most cyclists I eventually faced The Question: are expensive carbon wheels actually faster, or just very pretty marketing? The cycling internet has argued about this for years. I happen to record every single ride, so instead of arguing, I ran the numbers on myself.

On 21 April 2026 I swapped the road bike's shallow aluminium wheels for deep-section carbon aero wheels, a 55 mm carbon rim built to cut drag, and left everything else on the bike the same. That gives a clean before-and-after. The trouble with before-and-after is that I also got fitter, rode in better weather, and chose nicer routes, so a naive comparison would credit the wheels for all of it. The fix: I also ride indoors on a smart trainer (Zwift), where carbon wheels can do **nothing**. That makes indoor riding a control group (same engine, same fitness, no treatment) and turns the whole thing into a difference-in-differences design with a sample size of one.

**At first, the wheels look great.** Comparing rides at the *same power and terrain*, the carbon setup is about **+1.2 km/h** faster; the difference-in-differences against my indoor rides prints an even tidier **+2.7 km/h**. For a moment I felt very clever about the purchase.

{% include figure.liquid loading="eager" path="assets/img/wheels/speed_power_road.png" class="img-fluid rounded z-depth-1" zoomable=true caption="At any given power, the carbon rides (orange) sit above the alloy rides (blue): exactly the picture you'd want if the wheels were genuinely faster." %}

**Then the result falls apart, honestly.** A difference-in-differences only works if, absent the wheels, my indoor and outdoor speeds would have moved in parallel. They don't. The event study below shows the road-minus-indoor speed gap swinging wildly *before* the wheels ever went on: deeply negative through the summer of 2025, then climbing back to roughly zero by the following spring. That isn't a flat counterfactual; that's seasonality. The "+2.7 km/h" is mostly that seasonal swing, not the wheels. When I judge the spring carbon rides against the *same season* rather than against the rest of the year, the effect collapses to about **+0.4 km/h, statistically indistinguishable from zero.**

{% include figure.liquid loading="eager" path="assets/img/wheels/did_eventstudy.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Event-study difference-in-differences. If the wheels were the story, the points before the dashed line (the install) would sit near zero. Instead they trace a season." %}

There is one piece of evidence that points the other way, and it's my favourite. My gravel bike, which I ride outdoors all winter and which *never* got carbon wheels, makes a second control group that sees the same weather and roads as the road bike. After the install, the road bike speeds up and the gravel bike doesn't, which is harder for pure seasonality to explain. It's the best evidence here that the wheels do something, but it rests on only four post-install gravel rides, so I won't oversell it.

Putting season and calendar year into the regression lands the indoor comparison at +1.7 km/h, partway between the naive +2.7 and the same-season +0.4. The gravel bike, ridden through the same months, doesn't speed up at all:

{% include figure.liquid loading="eager" path="assets/img/wheels/main_results.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Road bike versus the gravel-bike placebo, under my main specification (season and year fixed effects, at equal power and terrain). After the carbon install the road bike gains +1.7 km/h, while the never-upgraded gravel bike, ridden the same months, does not (-1.2). Bars are 95% confidence intervals." %}

### The verdict

Not a clean null, but an expensive maybe. The cleanest test (same season) says nothing; the most suggestive test (the gravel placebo) can't bear much weight. With one rider and six weeks of carbon data, I genuinely can't tell whether I bought speed or a very aerodynamic placebo. The wheels are, however, extremely nice to look at.

I wrote it up as a (very) tongue-in-cheek working paper, with real tables, an event study, a placebo, and a conflict-of-interest statement (I own the wheels):

<div class="mt-3">
<a class="btn btn-sm z-depth-0" role="button" href="{{ '/assets/pdf/wheels_carbon.pdf' | relative_url }}">📄 Working paper (PDF)</a>
</div>

<p class="mt-3"><em>Half-serious. The regressions, regrettably, are real.</em></p>
