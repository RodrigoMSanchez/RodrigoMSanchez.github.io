---
layout: page
permalink: /de/forschung/
ref: research
title: Forschung
description:
nav: true
nav_order: 2
---

## Begutachtete Publikationen

<div class="publications">

{% bibliography --query @article %}

</div>

## Laufende Arbeiten

<div class="publications">

{% bibliography --query @unpublished --group_by none --sort status,year --order asc,desc %}

</div>

<p class="text-muted mt-4" style="font-size: 0.85rem;">Titel und Zusammenfassungen der Arbeiten stehen in der Originalsprache der Publikation, also auf Englisch.</p>
