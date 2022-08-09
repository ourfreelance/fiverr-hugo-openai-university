---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
seo_description: ""
seo_keyword:
  - keyword1
  - keyword2
thumbnail: "posts/example.jpg"
youtube_url: "https://youtu.be/D0UnqGm_miA"
tags:
  - tags1
  - tags2
category:
  - Workshop
  - Podcast
slug: "{{ lower .Name | urlize }}"
---

