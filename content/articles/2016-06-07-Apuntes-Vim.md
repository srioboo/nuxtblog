---
title: Apuntes de Vim
alt: test
img: https://images.unsplash.com/photo-1571723141898-68dfa1e50431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60
year: 06 Jun 2016
id: 'apuntes-de-vim'
description:
    Apuntes y anotaciones sobre vim
layout: post
tags: [tutorial, chuleta, vim]
author:
  name: Salva
---

Vim es un editor de consola muy versatil, pero al ser bastante antiguo tiene sus peculiaridades y hacerse con él para emplearlo eficazmente puedes ser bastante tedioso. Sabiendo esto me cree una pequeña chuletas para conocer los atajos de teclado y el funcionamiento básico.

## Cursor movimiento

**Tecla** | **Acción** | **Memotécnica**
---|---|---
h | moverse izquierda |
j | moverse abajo |
k | moversea arriba |
l | moverse derecha |
w | saltar al principio de palabra (la puntuación se considera palabra) | word
W | saltar palabras (los espacios saltan las palabras separate words)   | Word
e | ir al final de las palabras (la puntuación se considera palabra)    | end
E | ir al final de las palabras (la puntuacin no se considera palabra)  | End
b | saltar palabras hacia atras (incluida puntacin) | backwards
B | saltar palabras hacia atr s (no incluir punctuation) | Backwards
0 | (cero) comienzo de linea | 0 es el inicio
^ | primer caracter que no sea espacio en una linea | ^ es siempre principio
$ | fin de linea | $ es siempre fin
G | ir al comando (prefijo numeral - 5G va a la linea 5) | Go

**Nota:** El prefijo en un comando de cursor de movimiento lo repite. Ejemplo, 4j mueve abajo 4 lineas.

## Insertar (Modo) - Insertar/Añadir texto

**Tecla** | **Acción** | **Memotécnica**
---|---|---
i | insertar en la posición del cursor | insert
I | insertar a principio linea | Insert
a | añadir detrás del curso | add
A | añadir a final de la línea | Add
o | añadir (open) linea en blanco bajo linea acutal | Open line
O | añadir (open) linea en blaco sobre linea actual | Open line
ea | añaidr al final de la palabra | end append
Esc | salir de insert mode | Esc siempre sale

## Editar (Modo)

**Tecla** | **Acción** | **Memotécnica**
---|---|---
r | reemplazar un solo caracter sin hacer insert mode |  replace
J | une linea de abajo con la actual | Join
cc | cambia (reemplaza) una linea completa | change
cw | cambia (reemplaza) hasta el final de una palabra | change word
c$ | cambia (reemplaza) hasta el final de la linea | change end
s | borrar caracter bajo el cursor y sustituye texto | suprime
S | borrar linea bajo el cursor y sustituye texto (igual que cc) | Suprime
xp | trasponer dos letras (borrar y pegar, tecnicamente)  | trasXPose
u | deshacer | undo
. | repite el ultimo comando |

## Marcado de texto (visual mode)

**Tecla** | **Acción** | **Memotécnica**
---|---|---
v | visual mode, marca lineas y luego un comando (como y - yank) | visual
V | visual mode, comenzando con linea | Visual
o | mueve a otro final de area marcada | other
Ctrl+v | visual modo de bloque | visual block
O | move to Other corner of block |
aw | mark a word |
ab | a () block (with braces) |
aB | a {} block (with brackets) |
ib | inner () block |
iB | inner {} block |
Esc | exit visual mode | Esc para salir

## Visual comandos

**Tecla** | **Acción** | **Memotécnica**
---|---|---
> | tabula a la derecha |
< | tabula a la izquierda |
y | yank (copy) el texto marcado | yank
d | borra el texto marcado | delete
~ | switch case |

## Copiar y pegar

**Tecla** | **Acción** | **Memotécnica**
---|---|---
yy | yank (copy) a line | yank
2yy | yank 2 lines | 2 yank
yw | yank word | yank word
y$ | yank to end of line | yank end
p | pega (paste) el contenido del clipboard después del cursor | put
P | pega (paste) antes del cursor | Put
dd | borra (cut) una linea | delete
dw | borra (cut) una palabra |delete word
x | corta (cut) el caracter actual | x como cortar

## Saliendo

**Tecla** | **Acción** | **Memotécnica**
---|---|---
:w | graba (save) el archivo, pero sin salir | write
:wq | graba (save) y sale | write quit
:q | sale (falla si algo ha cambiado) | quit
:q! | sale y quita todos los cambios | quit

## Buscar/Remplazar

**Tecla** | **Acción** | **Memotécnica**
---|---|---
/*pattern* | busca un patron |
?*pattern* | buscan un patron al inverso |
n | repite busqueda en la misma dirección |
N | repite busqueda en dirección opuesta |
:%s/*old*/*new*/g | reemplaza lo *viejo* con lo *nuevo* a través del archivo  |
:%s/*old*/*new*/gc | r reemplaza lo *viejo* con lo *nuevo* a través del archivo con confirmaciones |

## Trabajando con multiples archivos

**Tecla** | **Acción** | **Memotécnica**
---|---|---
:e *filename* | Editar un archivo en un nuevo buffer | edit
:bnext (or :bn) | ir a un nuevo buffer  |
:bprev (of :bp) | ir al buffer anterior |
:bd | borrar un (cerrar archivo) |
:sp *filename* | Abrir un archivo en nuevo buffer y dividir ventana |
ctrl+ws | dividir ventana | window split
ctrl+ww | cambiar entre ventanas | windows sWitch
ctrl+wq | cerrar ventana | windows quit
ctrl+wv | dividir ventana verticalmente | windows split Verticaly
