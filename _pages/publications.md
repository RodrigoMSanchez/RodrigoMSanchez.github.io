---
layout: page
permalink: /research/
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

### Revise & Resubmit

<div class="publications">

{% bibliography --query @unpublished[status=rr] %}

</div>

### Under Review

<div class="publications">

{% bibliography --query @unpublished[status=review] %}

</div>

### Manuscript in Preparation

<div class="publications">

{% bibliography --query @unpublished[status=prep] %}

</div>
