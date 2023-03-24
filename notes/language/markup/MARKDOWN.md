# Markdown

## Inference

>[Markdown: Syntax](https://daringfireball.net/projects/markdown/syntax)

>[GitHub Flavored Markdown Spec](https://github.github.com/gfm/)

>[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

>[Markdown記法 チートシート](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)

>[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

<br>
<http://example.com|議論マイニングっぽいコンペ>

---
aaaa
<br>

## Source Code Block

````
```(language)
some code
```
````
<br>
```c
#include<stdio.h>
int main(void){
    print("Hello World!");
}
```

```python
import sys
print("Hello World!")
```
<br>

---

<br>

## Code
```markdown
`code`
```
`code`

<br>

---

<br>

## Bold
```markdown
**bold**
```
**bold**

<br>

---

<br>

## Italic
```markdown
*italic*
```
*italic*

<br>

---

<br>

## Citation
```markdown
> citation
```

> citation

<br>

---

<br>

## Hyperlink
```markdown
[hyperlink](https://github.com/)
```

[hyperlink](https://github.com/)

<br>

---

<br>

## Image
```markdown
![github](https://avatars.githubusercontent.com/u/9919?s=280&v=4)
```
![github](https://avatars.githubusercontent.com/u/9919?s=280&v=4)

<br>

---

<br>

## List
```markdown
* list
```
* list

<br>

---

<br>

## OrderedList
```markdown
1. First item
2. Second item
3. Third item
```
1. First item
2. Second item
3. Third item

<br>

---

<br>

## Unordered List
```markdown
- First item
- Second item
- Third item
```

- First item
- Second item
- Third item

<br>

---

<br>

## Header
```markdown
# Header1
## Header2
### Header3
#### Header4
##### Header5
###### Header6
```
# Header1
## Header2
### Header3
#### Header4
##### Header5
###### Header6

<br>

---

<br>

## Strike
```
~~Strike~~
```
~~Strike~~

<br>

---

<br>

## Details
````markdown
<details><summary>sample code</summary></details>

```python
print('Hello, World'!)
```
````
<details><summary>sample code</summary></details>

```python
print('Hello, World'!)
```

    
</div></details>

<br>

---

<br>

 - [ ] task1
 - [x] task2

<br>

---

## Table

```markdown
| Left align | Right align | Center align |
|:-----------|------------:|:------------:|
| This       | This        | This         |
| column     | column      | column       |
| will       | will        | will         |
| be         | be          | be           |
| left       | right       | center       |
| aligned    | aligned     | aligned      |
```
<br>

| Left align | Right align | Center align |
|:-----------|------------:|:------------:|
| This       | This        | This         |
| column     | column      | column       |
| will       | will        | will         |
| be         | be          | be           |
| left       | right       | center       |
| aligned    | aligned     | aligned      |

<br>

---

<br>

## $$\LaTeX$$

$$
e^{i\pi}+1=0\\

\alpha\\

\underline{underline}\\
\underline{\underline{doubleunderline}}\\
$$


| \tiny | \scriptsize | \footnotesize | \normalsize | \large | \LARGE | \huge | \HUGE |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|$$\tiny ABC$$|$$\scriptsize ABC$$|$$\footnotesize ABC$$|$$\normalsize ABC$$|$$\large ABC$$|$$\LARGE ABC$$|$$\huge ABC$$|$$\Huge ABC$$|

<br>

---

<br>

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition


### Emoji

joy :joy:

### Highlight

this is ==highlight== sample.

### Subscript

H~2~O

### Superscript

X^2^