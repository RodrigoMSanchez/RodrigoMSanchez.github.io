---
layout: page
permalink: /research/
ref: research # pairs this page with its German and Spanish counterparts
title: Research
description:
nav: true
nav_order: 2
---

## Peer-Reviewed Publications

<div class="publications">

{% bibliography --query @article %}

</div>

## Work in Progress

<div class="publications">

{% bibliography --query @unpublished --group_by none --sort status,year --order asc,desc %}

</div>
