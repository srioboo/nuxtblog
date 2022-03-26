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

Para inicialicar un nuevo directorio para funcionar con git.
```bash
# crear un directorio
mkdir mi_directorio

# entrar en el directorio
cd mi_directorio

# inicializar git
git init
```

Para asignar un usuario global y un email para el usuario 
```bash
git config --global user.name usuario@mail.net

git config --global user.email usuario@mail.net  
```
Si queremos que sea en un usuario local
```bash
git config --local user.name usuario@mail.net

git config --local user.email usuario@mail.net  
```
Para incluir en la configuración de sistema usaremos --system

También podemos añadir ciertos alias para simplificar la escritura de comandos.
```bash
git config --global alias.co checkout  
```
O configurar colores en la salida de datos
```bash
git config --global color.ui auto
```


## Consultar estado y logs

Consultar el estado de los archivos, si no se han añadido, si estan en el espacio de stage, etc.

```bash
git status
```

Consultar se puede consultar el log de diferentes formas

```bash
# log normal
git log

# log en una linea
git log --oneline

# log en una linea y con un solo nivel
git log --oneline --first-parent
```

## Incluir/excluir archivos en git, commit y subirlos al servidor

Tras crear un archivo hay que añadirlo al indice para su seguimiento, para ello
```bash
git add archivo.ext
```
Esto añade el archivo al área de Staging

Si queremos añadir todos los archivos del directorio actual
```bash
git add .
```
Si queremos sacar el archivo del área de staging
```bash
git reset mi_archivo
```

Una vez que los cambios se han concluido añadimos a git y al log con un mensaje
```bash
git commit -m "mi mensaje" 
```
Pero esto solo lo agrega localmente, si queremos subir los cambios a un servidor necesitamos hacer un push
```bash
git push
```

Tambien podemos ver diferencias entre los archivos
```bash
# Para ver las diferencias de un archivo con lo que hay en stage
git diff

# Para ver las diferencias de un archivo que esta en stage pero no comiteado
git diff --staged
```

## Consultar y cambiar de rama

```bash
# Consultar ramas
git branch

# Consultar ramas remotas
git branch --remote
git branch -r

# Crea una rama con el nombre dado
git branch nombre_rama

# Cambiar a una rama 
git switch

# Checkout una rama creada
git checkout

# Checkout y con creacion de rama
git checkout -b nombre_rama
```

Checkout nos permite también quitar los cambios de un archivo usando
```bash
git checkout -- archivo.ext

# si queremos quitar todos los cambios
git checkout -- .
```

## Compartir un repositorio

Para empezar a compartir los cambios con otros es necesario sincronizar con el repositorio remoto.

| **Comando**                   | **Acción**                                                          | **Notas**                                                      |
|-------------------------------|---------------------------------------------------------------------|----------------------------------------------------------------|
| git remote add <nombre> <url> | añadimos un nuevo repositorio con un nombre a la url de un servidor | con esto añadimos al local la dirección del repositorio remoto |
                                

```bash
# Añadir un repositorio remoto
git remote add origin https://github.com/githubuser/MiRepositorio.git

# Para enviar un commit al master
git push -u origin master

# Una vez seteado se puede hacer con
git push

# ver ramas existentes en remoto
git branch --remote
git branch -r
```

## Stash, guardar cambios para mas tarde

```bash
# Añadir una serie de cambios a un stash para usarlos luego se hace con
git stash

# lista los archivos que están en el stag
git stash list

# write working from top of stash stack
git stash pop

# descarta los cambios de la parte de arriba de la pila
git stash drop
```

## Taer datos del repositorio remoto

```bash
# Obtener todas la ramas del repositorio remoto
git fetch

# Si ademas de obtener queremos borrar la informacion de las ramas que se borraron en el remoto, pasamos el parametro prune
git fecth -p

# Para obtener todos los commits de una rama
git pull

# esto varia en el caso de que queramos hacer un rebase de esos datos en nuestro local
git pull --rebase
git pull -r
```

## Combina ramas y reseteo de cambios

```bash
# mergea la rama indicada con la rama actual
git merge <branch>

# Otra opcion pero en lugar de hacer un merge hace un rebase
git rebase <branch>

# quita los cambios de stage, y vuelve la rama al estado del commit indicado
git reset --hard <commit>
```

## Utiles

```bash
# Guardar las credenciales localmente
git config credential.helper store

# Guardar las credenciales Globalmente
git config --global credential.helper store
```

## Tracking path changes

```bash
# borrar el archivo del proyecto y poner en el stage los cambios para commit
git rm <archivo>

# cambiar el archivo del path y meter el cambio en el área de stage
git mv [existing-path] [new-path]

# mostrar el log de todos los cambios comiteados con cambios de path
git log --stat -M

```

## .gitignore e ignorar patrones

Si queremos ignorar ciertos archivos, podemos crear un archivo gitignore
```bash
touch .gitignore
```
Se edita el archivo y se añaden los archivos a ignorar