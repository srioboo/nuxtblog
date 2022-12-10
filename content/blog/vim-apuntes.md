---
img: https://res.cloudinary.com/salrion/images/{{trans}}/salrionblog/rock/apuntes-de-vim.jpg
alt: vim y neovim
layout: post
author:
  name: SRN
title: 'Vim: Apuntes de Vim y Neovim, el editor multiconsola'
id: apuntes-de-vim
year: 2016
date: 2016-06-06
description: Apuntes y anotaciones sobre vim y neovim. Atajos de teclados en las
  diferentes opciones de edición, inserción, modo visual y memotécnica para
  recordar los atajos.
---

Vim y neovim son editores de consola muy versatiles, pero al ser bastante antiguo tiene sus peculiaridades, una de ellas es que está diseñado para usarse solamente con el teclado, es más, como los teclados antiguos no poseían las teclas de cursor se usaban otras teclas para moverse entre el texto. Esto hace que para emplearlo eficazmente puedes ser bastante tedioso para un usuario acostumbrado al teclado y al ratón. Sabiendo esto me cree una pequeña chuletas para conocer los atajos de teclado y el funcionamiento básico.

Como ventaja tenemos que al no necesitar mover las manos del teclado mejoramos, en teoría, la velocidad de edicción.

## Cursor movimiento

| **Tecla**  | **Acción**                                                          | **Memotécnica**            |
| ---------- | ------------------------------------------------------------------- | -------------------------- |
| h, j, k, l | moverse izquierda, abajo, arriba, derecha respectivamente           | j es como una flecha abajo |
| w          | saltar al principio de palabra (la puntuación se considera palabra) | word                       |
| W          | saltar palabras (los espacios saltan las palabras separate words)   | Word                       |
| e          | ir al final de las palabras (la puntuación se considera palabra)    | end                        |
| E          | ir al final de las palabras (la puntuacin no se considera palabra)  | End                        |
| b          | saltar palabras hacia atras (incluida puntacin)                     | backwards                  |
| B          | saltar palabras hacia atr s (no incluir punctuation)                | Backwards                  |
| 0          | (cero) comienzo de linea                                            | 0 es el inicio             |
| ^          | primer caracter que no sea espacio en una linea                     | ^ es siempre principio     |
| \$         | fin de linea                                                        | \$ es siempre fin          |
| G          | ir al comando (prefijo numeral - 5G va a la linea 5)                | Go                         |

**Nota:** El prefijo en un comando de cursor de movimiento lo repite. Ejemplo, 4j mueve abajo 4 lineas.

| **Tecla** | **Acción**                    | **Memotécnica** |
| --------- | ----------------------------- | --------------- |
| gg        | ir al principiod de documento |                 |
| G         | ir al final del documento     |                 |
| 4G        | ir a la linea 4               |                 |

## Insertar (Modo) - Insertar/Añadir texto

| **Tecla** | **Acción**                                      | **Memotécnica**  |
| --------- | ----------------------------------------------- | ---------------- |
| i         | insertar en la posición del cursor              | insert           |
| I         | insertar a principio linea                      | Insert           |
| a         | añadir detrás del curso                         | add              |
| A         | añadir a final de la línea                      | Add              |
| o         | añadir (open) linea en blanco bajo linea acutal | Open line        |
| O         | añadir (open) linea en blaco sobre linea actual | Open line        |
| ea        | añaidr al final de la palabra                   | end append       |
| Esc       | salir de insert mode                            | Esc siempre sale |

## Editar (Modo)

| **Tecla** | **Acción**                                                   | **Memotécnica** |
| --------- | ------------------------------------------------------------ | --------------- |
| r         | reemplazar un solo caracter sin hacer insert mode            | replace         |
| J         | une linea de abajo con la actual                             | Join            |
| cc        | cambia (reemplaza) una linea completa                        | change          |
| cw        | cambia (reemplaza) hasta el final de una palabra             | change word     |
| c\$       | cambia (reemplaza) hasta el final de la linea                | change end      |
| s         | borrar caracter bajo el cursor y sustituye texto             | suprime         |
| S         | borrar linea bajo el cursor y sustituye texto (igual que cc) | Suprime         |
| xp        | trasponer dos letras (borrar y pegar, tecnicamente)          | trasXPose       |
| u         | deshacer                                                     | undo            |
| .         | repite el ultimo comando                                     |

## Marcado de texto (visual mode)

| **Tecla** | **Acción**                                                   | **Memotécnica** |
| --------- | ------------------------------------------------------------ | --------------- |
| v         | visual mode, marca lineas y luego un comando (como y - yank) | visual          |
| V         | visual mode, comenzando con linea                            | Visual          |
| o         | mueve a otro final de area marcada                           | other           |
| Ctrl+v    | visual modo de bloque                                        | visual block    |
| O         | move to Other corner of block                                |
| aw        | mark a word                                                  |
| ab        | a () block (with braces)                                     |
| aB        | a {} block (with brackets)                                   |
| ib        | inner () block                                               |
| iB        | inner {} block                                               |
| Esc       | exit visual mode                                             | Esc para salir  |

## Visual comandos

| **Tecla** | **Acción**                   | **Memotécnica** |
| --------- | ---------------------------- | --------------- |
| >         | tabula a la derecha          |
| <         | tabula a la izquierda        |
| y         | yank (copy) el texto marcado | yank            |
| d         | borra el texto marcado       | delete          |
| ~         | switch case                  |

## Copiar y pegar

| **Tecla** | **Acción**                                                 | **Memotécnica**         |
| --------- | ---------------------------------------------------------- | ----------------------- |
| yy        | yank (copy) a line                                         | yank                    |
| 2yy       | yank 2 lines                                               | 2 yank                  |
| yw        | yank word                                                  | yank word               |
| y\$       | yank to end of line                                        | yank \$ = end of line   |
| p         | pega (paste) el contenido del clipboard después del cursor | put                     |
| P         | pega (paste) antes del cursor                              | Put                     |
| dd        | borra (cut) una linea                                      | delete                  |
| d\$       | borra hasta el final de una línea                          | delete \$ = end of line |
| dw        | borra (cut) una palabra                                    | delete word             |
| x         | corta (cut) el caracter actual                             | x como cortar           |

**Nota**: es posible combinar un número con el operador de forma que si pulso 4 y luego la d borro 4 caracteres, y también mezclar operadores de movimiento si pulso d para borrar y luego w de palabra borro la palabra completa.
Ej.- elminar 6 palabra d6w (o 6dw) borra seis palabras

## Moverse entre archivos

| **Tecla** | **Acción**         | **Memotécnica**  |
| --------- | ------------------ | ---------------- |
| gd        | ir a la definición | go to definition |
| gf        | ir a la función    | go to function   |

## Saliendo

| **Tecla** | **Acción**                              | **Memotécnica** |
| --------- | --------------------------------------- | --------------- |
| :w        | graba (save) el archivo, pero sin salir | write           |
| :wq       | graba (save) y sale                     | write quit      |
| :q        | sale (falla si algo ha cambiado)        | quit            |
| :q!       | sale y quita todos los cambios          | quit            |

## Buscar/Remplazar

| **Tecla**          | **Acción**                                                                    | **Memotécnica** |
| ------------------ | ----------------------------------------------------------------------------- | --------------- |
| /_pattern_         | busca un patron                                                               |
| ?_pattern_         | buscan un patron al inverso                                                   |
| n                  | repite busqueda en la misma dirección                                         |
| N                  | repite busqueda en dirección opuesta                                          |
| :%s/_old_/_new_/g  | reemplaza lo _viejo_ con lo _nuevo_ a través del archivo                      |
| :%s/_old_/_new_/gc | r reemplaza lo _viejo_ con lo _nuevo_ a través del archivo con confirmaciones |

## Trabajando con multiples archivos

| **Tecla**       | **Acción**                                         | **Memotécnica**         |
| --------------- | -------------------------------------------------- | ----------------------- |
| :e _filename_   | Editar un archivo en un nuevo buffer               | edit                    |
| :bnext (or :bn) | ir a un nuevo buffer                               |
| :bprev (of :bp) | ir al buffer anterior                              |
| :bd             | borrar un (cerrar archivo)                         |
| :sp _filename_  | Abrir un archivo en nuevo buffer y dividir ventana |
| ctrl+ws         | dividir ventana                                    | window split            |
| ctrl+ww         | cambiar entre ventanas                             | windows sWitch          |
| ctrl+wq         | cerrar ventana                                     | windows quit            |
| ctrl+wv         | dividir ventana verticalmente                      | windows split Verticaly |
