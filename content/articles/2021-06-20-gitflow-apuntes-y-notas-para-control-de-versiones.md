---
img: https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&fit=crop
alt: GitFlow
layout: post
author:
  name: SRN
title: "GitFlow: apuntes y notas para control de versiones"
tags:
  - GitFlow
id: notas-de-git
year: 2021-06-20T11:05:43.921Z
description: GitFlow, apuntes y anotaciones sobre uso, comandos principales e
  inicialización de una de las herramientas de control de versiones más
  populares.
---
# GitFlow

GitFlow es una forma de usar Git de forma que muchas de las acciones que se hacen en la gestión de ramas queden automatizadas.



## GitFlow init

Para inicializar gitflow vamos a la carpeta del proyecto y lanzamos el comando

```shell
git flow init
```

## Comandos GitFlow

[Git Flow CheatSheet](https://danielkummer.github.io/git-flow-cheatsheet/index.es_ES.html)

| **Comando**                               | **Acción**                            | **Notas**                                     |
| ----------------------------------------- | ------------------------------------- | --------------------------------------------- |
| git flow init                             | Inicialización                        |                                               |
| git flow feature start MYFEATURE          | comenzar una nueva feature            |                                               |
| git flow feature finish MYFEATURE         | finalizar feature                     |                                               |
| git flow feature publish MYFEATURE        | publicar una feature                  |                                               |
| git flow feature pull origin MYFEATURE    | obtener features de otros             |                                               |
| git flow feature track MYFEATURE          | seguimientos de tus cambios           |                                               |
| git flow release start RELEASE \[BASE]    | comenzar una publicación o release    |                                               |
| git flow release publish RELEASE          | publicar la release                   |                                               |
| git flow release track RELEASE            | seguimientos de cambios de la release |                                               |
| git flow release finish RELEASE           | finalizar la release                  | no olvides crear los tags con git push --tags |
| git flow hotfix start VERSION \[BASENAME] | crear un fix                          |                                               |
| git flow hotfix finish VERSION            | Finalizar un fix                      |                                               |