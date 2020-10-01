---
title: Javascript Buenas prácticas
year: 2016-06-18
layout: post
id: 'notas de javascript'
img: https://images.unsplash.com/photo-1568589098025-33a4dab4341f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80&auto=format
alt: Javascript
description: Buenas prácticas en el desarrollo de javascript
tags: [Javascript]
author:
  name: SRN
---

## Enlaces:

<http://code.tutsplus.com/tutorials/24-javascript-best-practices-for-beginners--net-5399>
<http://www.w3schools.com/js/js_best_practices.asp>
<https://www.thinkful.com/learn/javascript-best-practices-1/>
<https://www.thinkful.com/learn/javascript-best-practices-2/>

## Usa === en lugar de ==

JavaScript utiliza los operadores de igualdad: === o !== y == o != . Lo mejor es usar === y !== dado que compraran también los tiposMal.

"Si dos operandos son del mismo tipo y valor, entonces === indica true y !== indica falso." - JavaScript: The Good Parts

Sin embargo, si trabajamos con == y !=, te encontrarás con problemas cuando trabajes con tipos diferentes. En estos casos trata de adivinar los el tipo sin éxito.

## Eval es el Mal

La función "eval" nos da acceso al compilador Javascript. Podemos ejecutar una cadena pasandola como parametro a "eval".
Esto reduce mucho el desempeño del script y es además un riesgo de seguridad porque permite demasiado poder al texto que pasamos. Evitalo!!

## Usa las llaves

Tecnicamente, puedes omitir los punto y comas y las llaves. La mayoría de los navegadores interpretarán bien:

```javascript
if(someVariableExists)
   x = false
```

Sin embargo si ponemos dos lineas puede pasar lo siguiente:

```javascript
if(someVariableExists)
   x = false
   anotherFunctionCall();

// Podemos pensar que esto es:
if(someVariableExists) {
   x = false;
   anotherFunctionCall();
}

// Pero en realidad significa
if(someVariableExists) {
   x = false;
}
anotherFunctionCall();
```

Aunque la indentación suple a las llaves esto es una mala práctica, solo se puede evitar el uso de llaves con sentencias de una linea. E incluso así esto es debatible.

```javascript
if(2 + 2 === 4) return 'nicely done';
```

Considera que  el el futuro puedes necesitar acomodar más comandos y reescribir el código.

## Utiliza JS Lint

JSLint is a debugger written by Douglas Crockford. Puedes pegar el código y ver los errores y warning que indica. Otra alternativa es JsHint que es mucho menos restrictiva, indicando como warnings muchos de los errores que indicaría el JSLint.

"JSLint takes a JavaScript source and scans it. If it finds a problem, it returns a message describing the problem and an approximate location within the source. The problem is not necessarily a syntax error, although it often is. JSLint looks at some style conventions as well as structural problems. It does not prove that your program is correct. It just provides another set of eyes to help spot problems." - JSLint Documentation

Es buena idea pasar una de estas herramientas para estar seguro de que no se ha comentido ningún error grave.
<http://jshint.com/>
<http://jslint.com/>

Estas herramientas se pueden integrar en muchos editores de código.

## Situa los Scripts al fondo de tu página.

El objetivo es hacer que la página se carge lo más rápido posible para el usuario. Cuando cargas un script, el navegador no puede continuar hasta que la página entera se haya cargado, haciendo esperar al usuario, que puede creer que algo ocurre.

Si tienes JS cuyo propósito es añadir funcionalidad, ejemplo, después de que un botón se pulse, pon los archivos al fondo antes de cerrar la etiqueta de body. Esta es muy buena práctica.

```html
<p>And now you know my favorite kinds of corn. </p>
<script type="text/javascript" src="path/to/file.js"></script>
<script type="text/javascript" src="path/to/anotherFile.js"></script>
</body>
</html>
```

## Declara las variables fuera de la sentencia for

Cuando ejecutamos un for, podemos hacer que el motor del navegador trabaje menos:

```javascript
// Mal

for(var i = 0; i < someArray.length; i++) {
   var container = document.getElementById('container');
   container.innerHtml += 'my number: ' + i;
   console.log(i);
}

// Bien

var container = document.getElementById('container');
for(var i = 0, len = someArray.length; i < len;  i++) {
   container.innerHtml += 'my number: ' + i;
   console.log(i);
}

// Observa que de esta forma no se calcula la longitud cada vez
// (lo cual es ineficiente!!), ni se busca en el documento el 'container' cada vez

```

## La forma más rápida de construir una cadena

No hagas siempre un bucle for si necesitas iterar sobre un array, encuentra formas más creativas

```javascript
var arr = ['item 1', 'item 2', 'item 3', ...];
var list = '<ul><li>' + arr.join('</li><li>') + '</li></ul>';
```

El método más rpapido es este.

Usando metodos nativos (como join()), es a veces más rápido que metodos no nativos.

## Reduce los globales

"By reducing your global footprint to a single name, you significantly reduce the chance of bad interactions with other applications, widgets, or libraries." - Douglas Crockford

```javascript
var name = 'Jeffrey';
var lastName = 'Way';

function doSomething() {...}

console.log(name); // Jeffrey -- or window.name
```

Esto es mejor

```javascript
var DudeNameSpace = {
   name : 'Jeffrey',
   lastName : 'Way',
   doSomething : function() {...}
}
console.log(DudeNameSpace.name); // Jeffrey
```

Se ha reducido la huella a solamente el objeto "DudeNameSpace".

## Comenta tu código

Sin comentarios :)

```javascript
// Cycle through array and echo out each name.
for(var i = 0, len = array.length; i < len; i++) {
   console.log(array[i]);
}
```

## Embrace Progressive Enhancement

Always compensate for when JavaScript is disabled. It might be tempting to think, "The majority of my viewers have JavaScript enabled, so I won't worry about it." However, this would be a huge mistake.

Have you taken a moment to view your beautiful slider with JavaScript turned off? (Download the Web Developer Toolbar for an easy way to do so.) It might break your site completely. As a rule of thumb, design your site assuming that JavaScript will be disabled. Then, once you've done so, begin to progressively enhance your layout!

##  No pases una cadena a "SetInterval" o "SetTimeOut"

```javascript
setInterval(
 "document.getElementById('container').innerHTML += 'My new number: ' + i", 3000
);
```

Es un código ineficiente, además también funciona igual que eval. Nuncar pasar una cadena a SetInterval y SetTimeOut. En su lugar pasale un nombre de función.

```javascript
setInterval(someFunction, 3000);
```

## No uses la sentencia "With"

Puede parecer una idea...

```javascript
with (being.person.man.bodyparts) {
   arms = true;
   legs = true;
}
// en lugar de  --

being.person.man.bodyparts.arms = true;
being.person.man.bodyparts.legs= true;
```

No se comportabien al setear nuevos miembro usa mejor var.

```javascript
var o = being.person.man.bodyparts;
o.arms = true;
o.legs = true;
```

## Usa {} en lugar de new Object()

Hay muchas formas de crear objetos en Javascript. Por ejemplo con el contructor "new":

```javascript
var o = new Object();
o.name = 'Jeffrey';
o.lastName = 'Way';
o.someFunction = function() {
   console.log(this.name);
}
```

El modo literar es mejor, aún siendo correcto el anterior.

```javascript
var o = {
   name: 'Jeffrey',
   lastName = 'Way',
   someFunction : function() {
      console.log(this.name);
   }
};
```

Para objetos vacios.

```javascript
var o = {};
```

"Objects literals enable us to write code that supports lots of features yet still make it a relatively straightforward for the implementers of our code. No need to invoke constructors directly or maintain the correct order of arguments passed to functions, etc." - dyn-web.com

## Usar [] en lugar de new Array()

Igual para los arrays.

```javascript
var a = new Array();
a[0] = "Joe";
a[1] = 'Plumber';
```

Mejor

```javascript
var a = ['Joe','Plumber'];
```

"A common error in JavaScript programs is to use an object when an array is required or an array when an object is required. The rule is simple: when the property names are small sequential integers, you should use an array. Otherwise, use an object." - Douglas Crockford

## Si tenemos una lista larga de variasbles usar un solo "var" y usar comas para concatenar.

```javascript
var someItem = 'some string';
var anotherItem = 'another string';
var oneMoreItem = 'one more string';
```

Mejor

```javascript
var someItem = 'some string',
    anotherItem = 'another string',
    oneMoreItem = 'one more string';
```

Simplemte por limpieza de código.

## Siempre, siempre usa punto y coma.

Aunque la mayoría de los navegadores permiten omitirlo.

```javascript
var someItem = 'some string'
function doSomething() {
  return 'something'
}
```

Simplemente, porque luego es más dificil localizar un error.

```javascript
var someItem = 'some string';
function doSomething() {
  return 'something';
}
```

## Sentencias "For in"

Cuando se itera sobre elementos de un objeto tambien obtienes las funciones. Para evitarlo, envuelve tu código con sentencias if para filtrar la información.

```javascript
for(key in object) {
   if(object.hasOwnProperty(key) {
      ...then do something...
   }
}
```

## Usar la función "Timer" de firebug para obtimizar el código

¿Una forma rápida de saber cuanto dura una operación.? Necesitas una forma de ver cuanto tarda una operación usa el timer de firebug.

```javascript
function TimeTracker(){
 console.time("MyTimer");
 for(x=5000; x > 0; x--){}
 console.timeEnd("MyTimer");
}
```

## Lecturas recomendadas

Object-Oriented JavaScript
JavaScript: The Good Parts
Learning jQuery 1.3
Learning JavaScript

## Funciones Auto-ejecutables

Antes que llamar a una función, es más simple ejecutarla directamene al cargar la pagina, esto se hace encerrandola entre paréntesis y añadiendo un par de parentesis al final

```javascript
(function doSomething() {
   return {
      name: 'jeff',
      lastName: 'way'
   };
})();
```

## JavaScript puro puede ser más rápido que usar una librería

Aunque hay frameworks muy buenos, siempre es más rápido ejecutar javascript puro que usar el metodo each que jQuery, por ejemplo.
