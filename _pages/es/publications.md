---
layout: page
permalink: /es/investigacion/
ref: research
title: Investigación
description:
nav: true
nav_order: 2
---

## Publicaciones revisadas por pares

<div class="publications">

{% bibliography --query @article %}

</div>

## Trabajos en curso

<div class="publications">

{% bibliography --query @unpublished --group_by none --sort status,year --order asc,desc %}

</div>

<p class="text-muted mt-4" style="font-size: 0.85rem;">Los títulos y los resúmenes aparecen en el idioma original de la publicación, es decir, en inglés.</p>
