---
id: notas-de-git
title: "Git: GitFlow, apuntes y notas para control de versiones"
img: https://res.cloudinary.com/salrion/image/upload/{{trans}}/salrionblog/git.jpg
alt: GitFlow
layout: post
author:
  name: SRN
date: 2021-06-20
year: 2021
tags:
- GitFlow
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

### Initializar

| gitflow         | git                                            |
| --------------- | ---------------------------------------------- |
| `git flow init` | `git init`                                     |
| &nbsp;          | `git commit --allow-empty -m "Initial commit"` |
| &nbsp;          | `git checkout -b develop master`               |

### Conectar al repositorio remoto

| gitflow | git                                                     |
| ------- | ------------------------------------------------------- |
| _N/A_   | `git remote add origin git@github.com:MYACCOUNT/MYREPO` |

### Features

#### Crear una rama de feature

| gitflow                            | git                                         |
| ---------------------------------- | ------------------------------------------- |
| `git flow feature start MYFEATURE` | `git checkout -b feature/MYFEATURE develop` |

#### Publicar una rama feature

| gitflow                              | git                                 |
| ------------------------------------ | ----------------------------------- |
| `git flow feature publish MYFEATURE` | `git checkout feature/MYFEATURE`    |
| &nbsp;                               | `git push origin feature/MYFEATURE` |

#### Obtener lo último de la rama feature

| gitflow                                  | git                                          |
| ---------------------------------------- | -------------------------------------------- |
| `git flow feature pull origin MYFEATURE` | `git checkout feature/MYFEATURE`             |
| &nbsp;                                   | `git pull --rebase origin feature/MYFEATURE` |

#### Finalizar una rame feature

| gitflow                             | git                                   |
| ----------------------------------- | ------------------------------------- |
| `git flow feature finish MYFEATURE` | `git checkout develop`                |
| &nbsp;                              | `git merge --no-ff feature/MYFEATURE` |
| &nbsp;                              | `git branch -d feature/MYFEATURE`     |

#### Publicar la rama feature mergeada

| gitflow | git                                                |
| ------- | -------------------------------------------------- |
| _N/A_   | `git push origin develop`                          |
| &nbsp;  | `git push origin :feature/MYFEATURE` _(if pushed)_ |

### Releases

#### Crear una rama release

| gitflow                        | git                                     |
| ------------------------------ | --------------------------------------- |
| `git flow release start 1.2.0` | `git checkout -b release/1.2.0 develop` |

#### Publicar una rama release

| gitflow                          | git                             |
| -------------------------------- | ------------------------------- |
| `git flow release publish 1.2.0` | `git checkout release/1.2.0`    |
| &nbsp;                           | `git push origin release/1.2.0` |

#### Obtener los últimos cambios de una rama release

| gitflow | git                                      |
| ------- | ---------------------------------------- |
| _N/A_   | `git checkout release/1.2.0`             |
| &nbsp;  | `git pull --rebase origin release/1.2.0` |

#### Finalizar una rama release

| gitflow                         | git                               |
| ------------------------------- | --------------------------------- |
| `git flow release finish 1.2.0` | `git checkout master`             |
| &nbsp;                          | `git merge --no-ff release/1.2.0` |
| &nbsp;                          | `git tag -a 1.2.0`                |
| &nbsp;                          | `git checkout develop`            |
| &nbsp;                          | `git merge --no-ff release/1.2.0` |
| &nbsp;                          | `git branch -d release/1.2.0`     |

#### Publicar una rama release mergeada

| gitflow | git                                            |
| ------- | ---------------------------------------------- |
| _N/A_   | `git push origin master`                       |
| &nbsp;  | `git push origin develop`                      |
| &nbsp;  | `git push origin --tags`                       |
| &nbsp;  | `git push origin :release/1.2.0` _(if pushed)_ |

### Hotfixes

#### Crear una rama hotfix

| gitflow                                | git                                     |
| -------------------------------------- | --------------------------------------- |
| `git flow hotfix start 1.2.1 [commit]` | `git checkout -b hotfix/1.2.1 [commit]` |

#### Finalizar una rama hotfix

| gitflow                        | git                              |
| ------------------------------ | -------------------------------- |
| `git flow hotfix finish 1.2.1` | `git checkout master`            |
| &nbsp;                         | `git merge --no-ff hotfix/1.2.1` |
| &nbsp;                         | `git tag -a 1.2.1`               |
| &nbsp;                         | `git checkout develop`           |
| &nbsp;                         | `git merge --no-ff hotfix/1.2.1` |
| &nbsp;                         | `git branch -d hotfix/1.2.1`     |

<br>

#### Publicar la rama hotfix mergeada

| gitflow | git                                           |
| ------- | --------------------------------------------- |
| _N/A_   | `git push origin master`                      |
| &nbsp;  | `git push origin develop`                     |
| &nbsp;  | `git push origin --tags`                      |
| &nbsp;  | `git push origin :hotfix/1.2.1` _(if pushed)_ |
