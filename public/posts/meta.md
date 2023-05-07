---
title: 일이삼사오육칠팔구십 일이삼사오육칠팔구십
date: 2023-02-21
description: 이 글은 테스트용 입니다.
category: 테스트, 마크다운, 헬로, world
---

# A First Level Header

## A Second Level Header

### A Third Level Header

#### A Fourth Level Header

##### A Fifth Level Header

###### A Sixed Level Header

`Now is` the time for all good men to come to
the aid of their country. This is just a
regular paragraph.

The quick brown fox jumped over the lazy
dog's back.

* * *

### Header 3

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
> 
> ## This is an H2 in a blockquote
> 
> This is the first level of quoting.
> 
> > This is nested blockquote.
> 
> Back to the first level.

Some of these words _are emphasized_.
Some of these words _are emphasized also_.

Use two asterisks for **strong emphasis**.
Or, if you prefer, **use two underscores instead**.

* Candy.
* Gum.
* Booze.
* Red
* Green
* Blue

* A list item.

With multiple paragraphs.

* Another item in the list.

* This is a list item with two paragraphs. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit. Aliquam hendrerit
mi posuere lectus.

Vestibulum enim wisi, viverra nec, fringilla in, laoreet
vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
sit amet velit.*   Suspendisse id sem consectetuer libero luctus adipiscing.

* This is a list item with two paragraphs.

This is the second paragraph in the list item. You're
only required to indent the first line. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit.

* Another item in the same list.

* A list item with a bit of `code` inline.

* A list item with a blockquote:

  > This is a blockquote
  > inside a list item.

Here is an example of a pre code block

    tell application "Foo"
        beep
    end tell

This is an [example link](http://example.com/).

I get 10 times more traffic from [Google](http://google.com/ "Google") than from
[Yahoo](http://search.yahoo.com/ "Yahoo Search") or [MSN](http://search.msn.com/ "MSN Search").

I start my morning with a cup of coffee and
[The New York Times](http://www.nytimes.com/).


# Markdown 

You just have to love the simplicity of **markdown**, it doens't
provide a lot of fancy features that _reStructured Text_ or _Textile_
do, but in return, you get a wonderfully straightforward way to create
formatted documents, with almost zero overhead.

It seems to me that technical authors probably have the most to gain
from using **markdown**, this is probably why the most popular
technical sites on the web use it as their primary text markup
language.

## In Emacs Markdown is awesome.

#### Especially when you customize the faces...

    M-x customize-group
    markdown
    
And set some pleasant fonts for your headings, I like Helvetica Neue.

* * * * * 

Lists are phenomenally easy too ... 

1. Just number each item with 1.
1. The markdown implementation of your choice will turn it into a
numbered list.
1. Although, I think you will get varying levels of cleverness from
different implementations...
  1. Nested lists work ok. 
  1. But I find as soon as you start to get a bit clever, things tend to go
  wrong. You won't have much luck tring to use a combination of code
  blocks or blockquotes
  
  > See what I mean?
  > What did I tell you?
  
(defn code-blocks (seriously)
    "it could work!!"
    )

  1. But then what about resuming the list, nah, I don't think so.
  
1. Still, it's much better than doing:

This....

```tsx
    <ol> 
       <li>
    </ol>
```