---
title: Apuntes de Javascript I - Variables y Tipos
year: 2020-10-10
img: https://images.unsplash.com/photo-1519091915001-f72a15a88b04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9
alt: Javascript
id: 'apuntes-javascript-i-variables-y-tipos'
description: Primera parte del los apuntes de javascript "Javascript variables y tipos", uso de las variables en javascript y tipos de variables, constantes, templates y literales
layout: post
author:
  name: SRN
---

## Variables y constantes

Para las constantes usaremos const, hay que tener en cuenta que const depende del scope

```javascript
const piSimple = 3.14;
```

Para asignar variables usaremos let, let depende del scope:

```javascript
let nombre = 'Salva';

function miNombreCompleto() {
  let nombre = 'Pedro'; // esto no es válido ya que se ha definido antes, se producirá un error
  let apellido = 'Apell';

  return nombre + ' ' + apellido;
}

miNombreCompleto();
```

Sin embargo podremos redefinirlo dentro de la función, o de lo contrario usar otro nombre dentro de la función

```javascript
let nombre = 'Salva';

function miNombreCompleto() {
  nombre = 'Pedro'; // esto no es válido ya que se ha definido antes
  let apellido = 'Apell';

  return nombre + ' ' + apellido;
}

miNombreCompleto();

// aquí el nombre se habrá cambiado ya que lo hemos cambiado en la función
console.log(nombre);
```

También podemos usar var, pero var es la vesión antigua, y el scope no le afecta de igual forma, además permite que se pueda reevaluar múltiples veces sin que salte un error, por esto es menos legible ya que tenemos variables con el mismo nombre en diferentes ámbitos:

```javascript
var nombre = 'Salva';

function miNombreCompleto() {
  var nombre = 'Pedro'; // esto es válido
  var apellido = 'Apell';

  return nombre + ' ' + apellido;
}

miNombreCompleto();

// aquí se mostrará el nombre que hay fuera de la función, ya que se entiende que dentro estas usando otra variable
console.log(nombre);
```

## Templates y listerales

Se pueden usar variables con variables insertadas y saltos de lineas usando una notación especial, así:

```javascript
const variable1 = '<b>variable1</b> \t';
const variable2 = '<b>variable2</b>';

let miCadena = `Esto es una cadena con variables dentro ${variable1} y esto seguiría con diferentes ${variable2}`;

console.log(miCadena);

// Aquí podemos usar saltos de linea, de forma que estos se verían al imprimirlos en la web
let miCadenaConSaltos = String.raw`Esto es una cadena con variables
 dentro, como: ${variable1} y esto seguiría
 con diferentes variables, como ${variable2}. En esta podemos usar \t sin que afecte a nada porque tenemos String.raw puesto `;

console.log(miCadenaConSaltos);
```

Las variables se insertan con la notación \${mi_variable}, en estas podemos usar \t para hacer tabulaciones y otras opciones, etc. Si ponemos String.raw delaten estos valores (\t) se mostrarán tal cual.

## Destructing sintax

Si tengo una serie de variables asignadas a las posictiones de un array, puedo hacerlo de dos formas:

```javascript
let persona = ['Salva', 'Apell', '45', 'hombre'];

var nombre = persona[0];
var apellidos = persona[1];
var edad = persona[2];
var genero = persona[3];

console.log('tipo 1:' + nombre, apellidos, edad, genero);

// O de una forma más sencilla:
var [nombre, apellidos, edad, genero] = persona;

console.log('tipo 2:' + nombre, apellidos, edad, genero);

// si no sabemos el número exacto de valores del array podemos poner al final ...mivariable, que contendrá el resto de valores, sino
// mostrará un undefined
let personaAux = ['Salva', 'Apell', '45', 'hombre', '1', '2'];
var [nombre, apellidos, edad, genero, ...otros] = personaAux;

console.log('tipo 3:' + nombre, apellidos, edad, genero, otros);
```

También puedo hacerlo con clases:

```javascript
class persona() {
    nombre = 'nombre';
    apellido;
    genero;
}

var {nombre,
    apellido,
    genero} = persona;

// con esto podemos usar valores por defecto
var {nombre,
    apellido,
    genero = 'mujer'} = persona;
```

## Tipos primitivos

las variables en javascript pueden ser:

```javascript
// cadenas de texto:
let cadena = 'un texto';

// numeros
let numero = 1;

// booleanos
let esCorrecto = true;
let esFaslo = false;
```

Con las cadenas podemos hacer ciertas operaciones ya que estas tienen métodos de utilidades:

```javascript
let doctor = 'Doctor Who';

// saber si empieza por una cadena
let resultado = doctor.startsWith('Doctor');
// devuelve un booleano
console.log(resultado);

// o si finaliza por una cadena
resultado = doctor.endsWith('Who');
// devuelve un booleano
console.log(resultado);

// o incluye una cadena
resultado = doctor.includes('Wh');
// devuelve un booleano
console.log(resultado);

// podemos convertir a minusculas o mayusculas
console.log(doctor.toLowerCase());
console.log(doctor.toUpperCase());
```

Con los números tenemos varias opciones también:

```javascript
// comprobar si es un número
let numero = 1;
console.log('Esto es true porque es un integer:' + Number.isInteger(numero));

console.log(
  'Esto es true porque es un integer dentro del rango de valores correcto de integer para Javascript:' +
    Number.isSafeInteger(numero),
);
```

## Recursos para aprender más

- [MDN web docs de Mozilla](https://developer.mozilla.org)
- [W3Schools](https://www.w3schools.com/js/)
