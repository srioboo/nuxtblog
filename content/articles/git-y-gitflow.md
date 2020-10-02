---
title: Notas Git y GitFlow
year: 2020-04-04
id: 'notas-de-git'
img: https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&fit=crop
alt: Git
description: Pequeños apuntes y anotaciones sobre Git y GitFlow
layout: post
tags: [Git]
author:
  name: SRN
---

Git permite a grupos de personas trabajar en los mismos documentos o código al mismo tiempo sin pisarse unos a otros. Al igual que CVS o Subversion es un control de versiones aunque en este caso es distribuido permitiendo que cada usuario tenga una copia local del repositorio.

## Configuración e incialización

| **Comando** | **Acción**                          | **Notas** |
|---|---|---|
| git init    | inicializa el repositorio local     | hay que situarse en el directorio |
| git config --global user.name \<nombre usuario\> | asigna nombre de usuario global | usar --local para que los cambios sean locales |
| git config --global user.email \<email usuario\> | asigna email de usuario global | usar --local para que los cambios sean locales |
| git config --global color.ui auto | indica uso de color en la salida de datos |  |
| git config --global alias.co checkout | crea un alias a un comando | en este caso co sustituye al comando checkout git co realizará un checkout |

## Uso de git

|**Comando** | **Acción**                           | **Notas** |
|---|---|---|
|git status  | indica el estado actual del proyecto | muy útil para saber que hay pendiente |
|git add \<archivo\> | añade un archivo al indice | es necesario añadir al indice es slimilar al añadir a subversion |
|git add . | añade todos los archivos |
|git commit -m "mi mensaje" | realizar el commiteo o compromiso del archivo | es igual que commit en svn, solo que se añade al repositorio local |
|git log | muestra el hitorial de commit realizado |

## Compartir un repositorio

Para empezar a compartir los cambios con otros es necesario sincronizar con el repositorio remoto.

|**Comando** | **Acción**                           | **Notas** |
|---|---|---|
|git remote add \<nombre\> \<url\> | añadimos un nuevo repositorio con un nombre a la url de un servidor | con esto añadimos al local la dirección del repositorio remoto |
|git push | subimos los cambios al repositorio remoto | |

```bash
git remote add origin https://github.com/githubuser/MiRepositorio.git
git push -u origin master
```

## git stash
*TODO:* completar la documentación

## git reset
*TODO:* completar la documentación

## git merge
*TODO:* completar la documentación

## Utiles

```bash
//Guardar las credenciales localmente
$ git config credential.helper store

// o Globalmente
$ git config --global credential.helper store
```

## Comando GitFlow

[Git Flow CheatSheet](https://danielkummer.github.io/git-flow-cheatsheet/index.es_ES.html)

|**Comando** | **Acción**                           | **Notas** |
|------------|--------------------------------------|-----------|
|git flow init| Inicialización | |
|git flow feature start MYFEATURE| comenzar una nueva feature||
| git flow feature finish MYFEATURE | finalizar feature | |
| git flow feature publish MYFEATURE | publicar una feature | |
| git flow feature pull origin MYFEATURE | obtener features de otros | |
| git flow feature track MYFEATURE | seguimientos de tus cambios | |
| git flow release start RELEASE [BASE] | comenzar una publicación o release | |
| git flow release publish RELEASE | publicar la release | |
| git flow release track RELEASE | seguimientos de cambios de la release | |
| git flow release finish RELEASE | finalizar la release | no olvides crear los tags con git push --tags |
| git flow hotfix start VERSION [BASENAME] | crear un fix | |
| git flow hotfix finish VERSION | Finalizar un fix | |
