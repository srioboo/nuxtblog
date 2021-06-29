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

### Initializar

| gitflow         | git                                            |
| --------------- | ---------------------------------------------- |
| `git flow init` | `git init`                                     |
| &nbsp;          | `git commit --allow-empty -m "Initial commit"` |
| &nbsp;          | `git checkout -b develop master`               |

### Conectar al repositorio remoto

| gitflow | git                                                     |
| ------- | ------------------------------------------------------- |
| *N/A*   | `git remote add origin git@github.com:MYACCOUNT/MYREPO` |

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
| *N/A*   | `git push origin develop`                          |
| &nbsp;  | `git push origin :feature/MYFEATURE` *(if pushed)* |

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
| *N/A*   | `git checkout release/1.2.0`             |
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
| *N/A*   | `git push origin master`                       |
| &nbsp;  | `git push origin develop`                      |
| &nbsp;  | `git push origin --tags`                       |
| &nbsp;  | `git push origin :release/1.2.0` *(if pushed)* |

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

#### Publicar la rama hotfix mergeada

| gitflow | git                                           |
| ------- | --------------------------------------------- |
| *N/A*   | `git push origin master`                      |
| &nbsp;  | `git push origin develop`                     |
| &nbsp;  | `git push origin --tags`                      |
| &nbsp;  | `git push origin :hotfix/1.2.1` *(if pushed)* |