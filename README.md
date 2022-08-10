# Openai University Website

```
minimum hugo version 0.101.0+extended
tailwindcss version 3.1.5
```

# Setup dev env

Run "npm install" (first time only)

Then configure "config.toml"

# Run hugo server

1. Hugo only

```
hugo serve -D
```

2. Hugo with tailwindcss watcher (dev)

```
hugo serve -D
```

then run tailwindcss server

```
npm run watch
```

Tailwind CSS file located at "./tailwind.css".  
Generated Tailwind CSS located at "./static/assets/css/main.css".

# Build hugo site

```
hugo --ignoreCache --minify
```

# To create new page

```
hugo new content/page_name.md
```

and then edit file located at "./content/page_name.md", setup frontmatter

# To create new blog post

```
hugo new content/posts/post_title.md
```

and then edit file located at "./content/posts/post_title.md", then setup
frontmatter

# Front matter breakdown

```
---
title: "Page or post title" (1)
date: 2022-05-22T20:58:46+07:00 (2)
draft: false (3)
seo_description: "Some SEO META description" (4)
seo_keyword: (5)
  - keyword1
  - some keyword2
  - other keyword3
thumbnail: "posts/example.jpg" (6)
youtube_url: "https://youtu.be/D0UnqGm_miA" (7)
tags: (8)
  - tag1
  - tag2
  - tag3
category: (9)
  - Category 1
  - Category 2
slug: "page-or-post-slug" (10)
---
```

1. Set page or post title
2. Set date page or post published
3. Set draft, set to true then page or post will be hidden in production
4. Set SEO META description
5. Set SEO META keyword
6. Set thumbnail, value must be set, place image in "./static/assets/images/"
7. Set YouTube video URL (for Podcast & Workshop only)
8. Set post tags
9. Set post category (Podcast or Workshop)
4. Set URL slug
