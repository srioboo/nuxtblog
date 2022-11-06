---
name: 'notas-tmux'
title: 'Tmux: gestor multiventana para consola'
year: 2017-04-28
id:
description: Notas sobre tmux, gestión de pestañas, paneles, configuración, atajos de teclados y otras características. Herramienta de productividad para la consola.
layout: post
author:
  name: Salrion
---

Tmux permite crear en la consola nuevos paneles y ventanas de forma que se tiene una configuración "multiconsola" con la que poder ser más productivo.

## tmux notas

| **Tecla**                   | **Acción**                            | **Memotécnica** | 
| --------------------------- | ------------------------------------- | --------------- |
| tmux                        | comenzar a usar                       |                 |
| tmux new -s myname          | comenzar a usar con nombre de session |                 |
| tmux a # (o at, o attach)   | attach                                |                 |
| tmux a -t myname            | attach a un nombre                    |                 |
| tmux ls                     | listar sesiones                       |                 |
| tmux kill-session -t myname | matar una sesion                      |                 |

En tmux, pulsa el prefijo 'ctrl+b' ('ctrl+a' en mi caso) para ejecutar cualquier comando

**NOTA:** a partir de aqui **PREFIX=ctrl+b** (o ctrl+a, según se haya definido)

## Sesiones

| **Tecla**   | **Acción**      | **Memotécnica** |
| ----------- | --------------- | --------------- |
| PREFIX :new | nueva sesion    | new             |
| PREFIX s    | listar sesiones |                 |
| PREFIX \$   | nombrar sesion  |                 |

## Ventanas o pestañas

| **Tecla** | **Acción**        | **Memotécnica** |
| --------- | ----------------- | --------------- |
| PREFIX c  | crear ventana     | create          |
| PREFIX w  | listar ventanas   |                 |
| PREFIX n  | siguiente ventana | next            |
| PREFIX p  | anterior ventana  | previous        |
| PREFIX f  | buscar ventana    | find            |
| PREFIX ,  | nombrar ventana   |                 |
| PREFIX &  | matar ventana     |                 |

## Separar en paneles

| **Tecla**    | **Acción**                                                                               | **Memotécnica** |
| ------------ | ---------------------------------------------------------------------------------------- | --------------- |
| PREFIX %     | separación vertical                                                                      | dibujo similar  |
| PREFIX \"    | separación horizontal                                                                    | dibujo similar  |
| PREFIX o     | intercambiar paneles swap panes                                                          |                 |
| PREFIX q     | mostrar numeros de los paneles                                                           |                 |
| PREFIX x     | cerrar panel                                                                             | eXit            |
| PREFIX \+    | romper paneles en ventanas (ej. para seleccionar texto mediante raton para copiar)       |                 |
| PREFIX \-    | restaurar panel desde ventana                                                            |                 |
| PREFIX space | cambiar entre layouts                                                                    |                 |
| PREFIX q     | Muestra los numeros de los paneles, una vez se muestran pulsar la tecla para ir al panel |                 |
| PREFIX {     | mueve el panel actual a la izquierda                                                     |                 |
| PREFIX }     | mueve el panel a la derecha                                                              |                 |
| PREFIX z     | cambia el zoom del panel                                                                 |                 |
