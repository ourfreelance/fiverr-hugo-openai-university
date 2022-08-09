# Openai University Website

```
minimum hugo version 0.92.2
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

Tailwind CSS file located at "./tailwindcss".
Generated Tailwind CSS located at "./static/css/main.css".

# Build hugo site

```
hugo --ignoreCache --minify
```

# To create new page

```
hugo new content/page_name.md
```

and then edit file located at "./content/page_name.md", setup frontmatter


# Add New Slide

open and change config.toml

add slide input
```
[[params.slides]]
  slideType = "input" # type of slide - "input" | "input-radio" | "view"
  id = "your-id" # id of input
  title = "Input Title" # title of input
  name = "input-name" # name of input
  type = "text" # type of input
```

add slide radio input
```
[[params.slides]]
  slideType = "input-radio" # type of slide - "input" | "input-radio" | "view"
  id = "your-id" # id of input
  title = "Input Title" # title of input
  name = "input-name" # name of input
  type = "text" # type of input
  values = ["value 1", "value 2", "value 3"] # values of radio input
```

add slide custom view
```
[[params.slides]]
  slideType = "view" # type of slide - "input" | "input-radio" | "view"
  view = "slide-views/submit-view.html" # custom view - the view must on folder "partials"
```
