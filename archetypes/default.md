---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
seo_description: ""
seo_keyword:
  - keyword1
  - keyword2
thumbnail: "posts/example.jpg"
slug: "{{ lower .Name | urlize }}"
---

