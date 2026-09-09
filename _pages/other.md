---
layout: page
permalink: /other/
ref: other # pairs this page with its German and Spanish counterparts
title: Other
description:
nav: true
nav_order: 5
dropdown: true
# The navbar renders this entry as a menu and never links to the page itself,
# so it stays out of the sitemap; the body is only a fallback for direct hits.
sitemap: false
children:
  - title: Data
    permalink: /data/
  - title: Beyond Research
    permalink: /beyond/
---

- [Data]({{ '/data/' | relative_url }})
- [Beyond Research]({{ '/beyond/' | relative_url }})
