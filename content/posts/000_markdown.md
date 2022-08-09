---
title: "Markdown Basic"
date: 2022-05-01T20:58:32+07:00
draft: true
seo_description: "Learn Hugo markdown basic"
seo_keyword:
  - Hugo markdown
thumbnail: "posts/example.jpg"
tags:
  - Markdown
  - Hugo
category:
  - News
slug: "markdown-basic"
---

### Typography

#### Heading

```markdown
# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6
```

<h1>Header 1</h1>  
  
<h2>Header 2</h2>  
  
<h3>Header 3</h3>  
  
<h4>Header 4</h4>  
  
<h5>Header 5</h5>  
  
<h6>Header 6</h6>  

#### Font Weight

```markdown
_italic_
**bold**
**_italic bold_**
```

_italic_   
**bold**  
**_italic bold_**

---

### Link

```markdown
[Link title](#link_url)
```

```markdown
[Some link](http://web_url)
```

[Link title](#link_url)  
[Some link](http://web_url)

---

### Image

```markdown
![Image Caption](http://image_url)
```

```markdown
![Some Image Caption](/images/posts/example.jpg)
```

![Some Image Caption](/images/posts/example.jpg)

---

### List

#### Ordered List

```markdown
1. Some text
2. Some text
3. Some text
   1. Some sub text
   2. Some sub text
   3. Some sub text
   - Some mixed sub
4. Some text
```

1. Some text
2. Some text
3. Some text
   1. Some sub text
   2. Some sub text
   3. Some sub text
   - Some mixed sub
4. Some text

#### Unordered List

```markdown
- Some text
- Some text
- Some text
  - Some sub text
  - Some sub text
  - Some sub text
  1. Some mixed sub
- Some text
```

- Some text
- Some text
- Some text
  - Some sub text
  - Some sub text
  - Some sub text
  1. Some mixed sub
- Some text

---

### Code Highlight

#### Shell

{{< highlight markdown >}}

```shell
$ ls -hal
drwxr-xr-x  2 selene selene     4096 Jan 22 13:24 Desktop
drwxr-xr-x  4 selene selene    12288 Apr 13 13:26 Documents
drwx------  6 selene selene    12288 Apr 18 14:30 Downloads
drwxrwxrwx  4 selene selene     4096 Mar 12 23:15 Pictures
drwxr-xr-x  2 selene selene     4096 Mar 25 07:51 Videos

```

{{< / highlight >}}

```shell
$ ls -hal
drwxr-xr-x  2 selene selene     4096 Jan 22 13:24 Desktop
drwxr-xr-x  4 selene selene    12288 Apr 13 13:26 Documents
drwx------  6 selene selene    12288 Apr 18 14:30 Downloads
drwxrwxrwx  4 selene selene     4096 Mar 12 23:15 Pictures
drwxr-xr-x  2 selene selene     4096 Mar 25 07:51 Videos

```

#### HTML

{{< highlight markdown >}}

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello</title>
  </head>
  <body>
    Hello World!!
  </body>
</html>
```

{{< / highlight >}}

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello</title>
  </head>
  <body>
    Hello World!!
  </body>
</html>
```

#### Python

{{< highlight markdown >}}

```python
#!/bin/env python3

some_var = "Hello world!!"

print(f'{some_var}')
```

{{< / highlight >}}

```python
#!/bin/env python3

some_var = "Hello world!!"

print(f'{some_var}')

```

Supported
[programming language](https://gohugo.io/content-management/syntax-highlighting/#list-of-chroma-highlighting-languages).

---

### Blockquote

```markdown
> This block of text
> is a
> blockquote.
```

> This block of text
> is a
> blockquote.

---

### Emoji Support

Please take a look at
[emoji cheatsheet](https://www.webfx.com/tools/emoji-cheat-sheet/). :smile:

---

