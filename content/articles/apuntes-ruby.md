---
name: 'apuntes-de-ruby'
title: Apuntes de Ruby
year: 2015-12-12
img: https://images.unsplash.com/photo-1551122102-63cd339bfaab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9
alt: ruby
id: 'apuntes-de-ruby'
description: Apuntes de Ruby
layout: archive
tags: [Programación, Ruby, Script]
author:
  name: Salrion
---

## Vistazo general y adelanto

Ruby es un lenguaje de programación poderoso y flexible que puedes usar en el desarrollo de redes o Internet, para procesar texto y crear juegos, y como parte del popular entorno web "Ruby on Rails". Ruby es:

**De alto nivel**, lo que quiere decir que leer y escribir Ruby es realmente fácil.

**Interpretado**: quiere decir que no necesitas un compilador para ejecutar Ruby. Puedes escribirlo en tu propia PC (muchos ya vienen con el intérprete de Ruby incorporado).

**Orientado a los objetos**, quiere decir que les permite a los usuarios manipular estructuras de datos llamadas objetos, para construir y ejecutar programas. En Ruby, todo es un objeto.

**Fácil de usar**. Ruby fue diseñado por Yukihiro Matsumoto (conocido como "Matz") en 1995. Matz se propuso diseñar un lenguaje a escala humana y por eso Ruby es tan fácil de aprender.

## Tipos de datos: números, cadenas y booleanos

```ruby
mi_num = 25    		# esto es un número
mi_booleano = true    	# un booleano (verdadero o falso)


mi_string = "Ruby"    	# Y una cadena de texto
```

## Matemáticas

- 5 + 5    # Suma (+)
- 10 - 3   # Resta (-)
- 4 _ 5    # Multiplicación ( _ )
- 120 / 6  # División (/)
- 3**2     # Exponenciación ( ** )
- 12 % 3   # Módulo (%)

## puts' y 'print'

El comando print toma cualquier cosa que escribas y lo muestra en la pantalla.
puts (que significa "put string") es un poco diferente: agrega una línea nueva (en blanco) después de lo que quieres que se muestre en pantalla. Se usan de la siguiente manera:

```ruby
puts "¿Qué gusto tiene la sal?"
print "Salado"
```

## Los métodos '.length', '.reverse', '.upcase', '.downcase'

```ruby
"Me encanta el café con leche".length
# ==> 28b

"Salvador".reverse
# ==> "rodavlaS"

"Salvador".upcase
# ==> "SALVADOR"

"Salvador".downcase
# ==> "salvador"
```

## Comentarios

```ruby
# esto es un comentario de una linea

=begin
¡Soy un comentario! multiple, las palabras claves deben estar en su propia linea y sin espacios en el igual
No necesito signos #.
=end
```

## Convenciones para la definición de nombres

A medida que avances en estos cursos vas a encontrar muchos tipos diferentes de variables, pero justo ahora nos estamos ocupando de las variables locales. Por convención, estas variables comienzan con una letra en minúscula, y las palabras están separadas por guiones bajos, como en contador y metodo_experto. Ruby no impedirá que uses otros símbolos, tales como letras mayúsculas, $, o @, al comienzo de tus variables locales; pero por convención, estos símbolos significan cosas distintas, así que es mejor seguir el ejemplo de la comunidad de Ruby y así evitar confusiones.

```ruby
nombre = "salvador"
nombre.downcase.reverse.upcase
```

## Leyendo datos

```ruby
print "¿Cuál es tu nombre?"
nombre = gets.chomp
nombre.capitalize!

print "¿Cuál es tu apellido?"
apellido = gets.chomp
apellido.capitalize!

print "¿De qué ciudad sos?"
ciudad = gets.chomp
ciudad.capitalize!

print "¿De qué estado o provincia sos?"
estado = gets.chomp
estado.upcase!

puts "Tu nombre es #{nombre} #{apellido} y venís de #{ciudad}, #{estado}"
```
