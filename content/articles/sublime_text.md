---
name: 'test1'
title: Mis apuntes de Sublime Text, el editor de código multilenguajes
year: 2016-06-07
img: https://images.unsplash.com/photo-1512317049220-d3c6fcaf6681?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&fit=crop
alt: Sublime Text
id: 'apuntes-sublime-text'
description: Apuntes de atajos de teclados de Sublime Text, configuración, extensiones, todo para sacar provecho a este editor ligero y potente
layout: post
tags: [Programación]
author:
  name: Salrion
---

## SHORCUT
This is a cheat sheet with keyboard shortcuts for Sublime Text. A comma means that all previous keys are no longer held. Add another tab with replace and "(?!^)(?<!>)(?<!>\t)\t(?!\t)" and "\t\t" in regex mode.

## Backups

Key                   | Valor
--------------------- | -------------------------------------------
Ctrl + Alt + [        | Navigate backwards through history
Ctrl + Alt + ]        | Navigate forwards through history
Ctrl + Alt + Shft + [ | Navigate to beginning of history
Ctrl + Alt + Shft + ] | Navigate to end of history
Ctrl + Alt + Shft + M | Merge selected version with current version

## General

Key             | Valor
--------------- | --------------------
Ctrl + B        | Build file
Ctrl + Shft + B | Test file
Ctrl + Shft + P | Open command palette
Ctrl + S        | Save file
Ctrl + Shft + S | Save file as

## Plugins

key                             | Valor
------------------------------- | -----------------------------------------
Ctrl + Alt + Shft + C,  G, F, M | Open Github Flavored Markdown cheat-sheet
Ctrl + Alt + Shft + C,  G, I, T | Open Git cheat-sheet
Ctrl + Alt + Shft + C,  G, O    | Open Go cheat-sheet
Ctrl + Alt + Shft + C,  K, D, E | Open KDE cheat-sheet
Ctrl + Alt + Shft + C,  M, D    | Open Markdown cheat-sheet
Ctrl + Alt + Shft + C,  R, X    | Open Regular Expressions cheat-sheet
Ctrl + Alt + Shft + C,  S, H    | Open Bash cheat-sheet
Ctrl + Alt + Shft + C,  S, T    | Open Sublime Text cheat-sheet
Alt  + ;                        | Align table with Regular Expressions
Ctrl + Alt + J                  | Align JSON formatting

## Text Editing

Key                | Valor
------------------ | ------------------------------------
Ctrl + C           | Copy selection or whole line
Ctrl + V           | Paste and indent
Ctrl + X           | Cut selection or whole line
Ctrl + Shft + F    | Replace in multiple files
Ctrl + Shft + D    | Duplicate line
Ctrl + J           | Join next line with current line
Ctrl + K    + K    | Delete to the end of line
Ctrl + K    + Bksp | Delete to start of line
Ctrl + Shft + K    | Delete line
Ctrl + T           | Transpose letters adjacent to cursor
Ctrl + Shft + U    | Soft undo
Ctrl + Shft + Y    | Redo
Ctrl + Shft + Z    | Undo
Ctrl + [           | Increase tab
Ctrl + ]           | Decrease tab
Ctrl + Shft + /    | Toggle comments on selected lines
Ctrl + Entr        | Insert line after
Ctrl + Shft + Entr | Insert line before
Ctrl + Shft + Up   | Move line up
Ctrl + Shft + Down | Move line down
Ctrl + Bksp        | Delete to beginning of word
Ctrl + Del         | Delete to end of word

## Text Navigation

Key                    | Valor
---------------------- | ----------------------------------
Ctrl + F               | Find in file
Ctrl + F3              | Find next
Ctrl + Shft + F3       | Find previous
Ctrl + F,     Alt  + C | Toggle case sensitivity in Find
Ctrl + F,     Alt  + R | Toggle RegEx in Find
Ctrl + F,     Alt  + W | Toggle whole word matching in Find
Ctrl + Shft + F        | Find in files
Ctrl + H               | Replace in file
Ctrl + H,     Alt  + A | Toggle preserve case in Replace
Ctrl + K + C           | Move to cursor
Ctrl + K + 1-9         | Fold to level 1-9
Ctrl + K + J           | Unfold all
Ctrl + M               | Jump to matching bracket
Home                   | Move cursor to beginning of line.
End                    | Move cursor to end of line.
Ctrl + P               | Go to anything
Ctrl + G               | Go to line number
Ctrl + R               | Go to function
Ctrl + ;               | Go to word
Ctrl + Shft + P        | Open command pallette
F5                     | Next bookmark
Shft + F5              | Previous bookmark
Ctrl + F5              | Toggle bookmark
Alt  + F5              | Select all bookmarks
Ctrl + Shft + F5       | Clear all bookmarks
Ctrl + Shft + [        | Fold code
Ctrl + Shft + ]        | Unfold code

## Text Selection

key                | value
------------------ | ---------------------------------------------
Ctrl + A           | Select all
Ctrl + D           | Repeat multi-­select word
Alt  + D           | Select all instances of word
Ctrl + Shft + J    | Expand selection to indentation
Ctrl + K           | Skip multi-­select word
Ctrl + L           | Select current line
Ctrl + Shft + M    | Select everything within the current brackets
Ctrl + Shft + U    | Undo selection and actions
Ctrl + Shft + Spce | Expand selection to scope
Ctrl + Clck        | Make multiple selections with mouse

## Window Navigation

key               | value
----------------- | -----------------------------------
Ctrl + K + B      | Toggle side-bar
Ctrl + K + M      | Toggle mini-map
Ctrl + N          | Open new tab
Ctrl + Shft + N   | Open new window
Ctrl + Alt + P    | Switch to recent project
Alt  + Shft + 1   | Switch to 1 column and 1 row layout
Alt  + Shft + 2   | Switch to 2 column layout
Alt  + Shft + 3   | Switch to 3 column layout
Alt  + Shft + 4   | Switch to 4 column layout
Alt  + Shft + 5   | Switch to 2 column and 2 row layout
Alt  + Shft + 8   | Switch to 2 row layout
Alt  + Shft + 9   | Switch to 3 row layout
Ctrl + Shft + 1   | Focus on group 1
Ctrl + Shft + 2   | Focus on group 2
Ctrl + Shft + 3   | Focus on group 3
Ctrl + Shft + 4   | Focus on group 4
Ctrl + Tab        | Switch to the next tab
Ctrl + Shft + Tab | Switch to the previous tab
Shft + F11        | Distra­ction free mode

## Sublime Text / Atom extensiones

Sublime Extensión         | Atom Extensión                 | Descripción
------------------------- | ------------------------------ | ----------------------------------------------------------------------
**Emmet**                 | --                             | extensión para autocompletado de html
**Knowndown**             | --                             | sintaxis markdown
**SmartMarkdown**         | --                             | caracteristicas adicionales como folding mediante tab de las secciones
**MarkdownEditing**       | --                             | otra opción (pero tabula para centrar, lo cual no me gusta)
**FileDiffs**             | --                             | compare-side-by-side
**Markdown HTML preview** | --                             | preview de markdown
**PlainTask**             | **Tasks**                      | listas de TODO
**SideBarEnchandments**   | --                             | panel lateral (crear dir, archivos)
**gutterColor**           | --                             | muestra los colores en los css
**ColorPicker**           | **color-picker**, **pigments** | para obtener colores
**Origami**               | --                             | divide en paneles de forma más interesante que el default
**StringEncode**          | --                             | decodifica el html o lo codifica (URL, etc)
AngularJS                 | --                             | decribir
Compare Side-By-Side      | --                             | decribir
Emmet Css Snippets        | --                             | decribir
Emmet                     | --                             | decribir
FileDiffs                 | --                             | decribir
GitGutter                 | --                             | decribir
HTML5                     | --                             | decribir
Markdown Preview          | --                             | decribir
MaxPane                   | --                             | decribir
Origami                   | --                             | decribir
Package Control           | --                             | decribir
Python 3                  | --                             | decribir
PyV8                      | --                             | decribir
SideBarEnhancements       | --                             | decribir
SmartMarkdown             | --                             | decribir
StringEncode              | --                             | decribir
**Theme - Flatland**      | **Flatland Dark UI Theme**     | Tema Flatland
View In Browser           | --                             | decribir
--                        | Sublime-Style-Column-Selection | activa Sublime Style Column Selection

### Para Python
[https://realpython.com/blog/python/setting-up-sublime-text-3-for-full-stack-python-development/](https://realpython.com/blog/python/setting-up-sublime-text-3-for-full-stack-python-development/)

### Para AngularJS
AngularJS

### Para font-end
[http://daker.me/2013/05/5-sublimetext2-packages-to-enhance-your-frontend-development-workflow.html](http://daker.me/2013/05/5-sublimetext2-packages-to-enhance-your-frontend-development-workflow.html)
