---
title: "Git: control de versiones"
img: https://res.cloudinary.com/salrion/image/upload/{{trans}}/salrionblog/git.jpg
alt: Git
layout: post
author:
  name: SRN
id: notas-de-git
year: 2020-04-04
description: Pequeños apuntes y anotaciones sobre Git y GitFlow, uso, comandos
  principales e inicialización de una de las herramientas de control de
  versiones más populares.
---
Git permite a grupos de personas trabajar en los mismos documentos o código al mismo tiempo sin pisarse unos a otros. Al igual que CVS o Subversion es un control de versiones aunque en este caso es distribuido permitiendo que cada usuario tenga una copia local del repositorio.

## Configuración e incialización

| **Comando**                                    | **Acción**                                | **Notas**                                                                  |
| ---------------------------------------------- | ----------------------------------------- | -------------------------------------------------------------------------- |
| git init                                       | inicializa el repositorio local           | hay que situarse en el directorio                                          |
| git config --global user.name <nombre usuario> | asigna nombre de usuario global           | usar --local para que los cambios sean locales                             |
| git config --global user.email <email usuario> | asigna email de usuario global            | usar --local para que los cambios sean locales                             |
| git config --global color.ui auto              | indica uso de color en la salida de datos |                                                                            |
| git config --global alias.co checkout          | crea un alias a un comando                | en este caso co sustituye al comando checkout git co realizará un checkout |

## Consultar estado y logs

Consultar el estado de los archivos, si no se han añadido, si estan en el espacio de stage, etc.

```bash
$ git status
```

Consultar en log

```bash
# log normal
git log

# log en una linea
$ git log --oneline

# log en una linea y con un solo nivel
$ git log --oneline --first-parent
```

## Incluir archivos en git, commit y subirlos al servidor

| **Comando**                | **Acción**                                    | **Notas**                                                          |
| -------------------------- | --------------------------------------------- | ------------------------------------------------------------------ |
| git status                 | indica el estado actual del proyecto          | muy útil para saber que hay pendiente                              |
| git add <archivo>          | añade un archivo al indice                    | es necesario añadir al indice es slimilar al añadir a subversion   |
| git add .                  | añade todos los archivos                      |                                                                    |
| git commit -m "mi mensaje" | realizar el commiteo o compromiso del archivo | es igual que commit en svn, solo que se añade al repositorio local |



```bash
# Para subirlos a un directorio remoto se usa push
$ git push
```

## Compartir un repositorio

Para empezar a compartir los cambios con otros es necesario sincronizar con el repositorio remoto.

| **Comando**                   | **Acción**                                                          | **Notas**                                                      |
| ----------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------- |
| git remote add <nombre> <url> | añadimos un nuevo repositorio con un nombre a la url de un servidor | con esto añadimos al local la dirección del repositorio remoto |
| git push                      | subimos los cambios al repositorio remoto                           |                                                                |

```bash
# Añadir un repositorio remoto
$ git remote add origin https://github.com/githubuser/MiRepositorio.git

# Para enviar un commit al master
$ git push -u origin master

# Una vez seteado se puede hacer con
$ git push
```

## git stash
```bash
# Añadir una serie de cambios a un stash para usarlos luego se hace con
$ git stash
```
*TODO:* completar la documentación

## git reset

*TODO:* completar la documentación

## git merge

*TODO:* completar la documentación

## Utiles

```bash
# Guardar las credenciales localmente
$ git config credential.helper store

# Guardar las credenciales Globalmente
$ git config --global credential.helper store
```