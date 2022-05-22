---
id: comandos-linux-unix
title: 'Comandos Linux/Unix'
alt: commandos linux unix
layout: post
author:
  name: SRN
year: 2021-03-06
description: Tabla con los comandos más útiles en Linux/Unix para usar en el terminal
---

# Comandos linux/unix

## Directorios

| comando             | parámetro | resumen                              |     |
| :------------------ | :-------- | :----------------------------------- | :-- |
| **cd {directorio}** |           | ir al directorio                     |     |
| **ls**              |           | listar directorio                    |     |
|                     | -a        | mostrar también ocultos              |     |
|                     | -l        | formato largo                        |     |
|                     | -t        | mostrar fecha                        |     |
|                     | -r        | al revés                             |     |
|                     | -ltr      | combinación de parámetros            |     |
| **du**              |           | tamaños archivos de un directorio    |     |
|                     | -c        | muestra tamaño total de los archivos |     |

## Archivos

| comando                 | parámetro | resumen                             | ejemplo                   |
| :---------------------- | :-------- | :---------------------------------- | :------------------------ |
| **cat {a1> {a2}**       |           | concatena archivos                  | cat arc1.txt arc2.txt     |
| **cat {a1> {a2} > {r}** |           | manda concatenación a archivo       | cat a1.txt a2.txt > r.txt |
| **cat {arc1}**          |           | muestra el contenido                | cat arc1.txt              |
| **grep {text} {arc}**   |           | busca texto en archivos             | grep hola arc1.txt        |
|                         | -c        | cuenta la lineas con coincidencias  | grep hola arc1.txt -c     |
|                         | -n        | muestra el número de linea          | grep hola arc1.txt -n     |
|                         | -v        | muestra las lineas que no coinciden | grep hola arc1.txt -v     |
|                         | -i        | ignora distincion mayúsculas        | grep hola arc1.txt -i     |
|                         | -R        | busca recursivamente en directorio  | grep hola directorio/ -R  |
