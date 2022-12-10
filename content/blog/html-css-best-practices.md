---
title: 'HTML y CSS: buenas prácticas de uso'
year: 2016
date: 2016-06-06
img: https://res.cloudinary.com/salrion/image/upload/{{trans}}/salrionblog/notes.jpg
alt: article 2
description: Buenas prácticas en HTML y CSS, todo lo que se debe hacer para construir una buena estructura de HTML y uno CSS correctos
layout: post
author:
  name: SRN
  bio: I am a person.
---

## Nunca uses estilos inline

Es una mala práctica

## Coloca los archivos css externos en el interior del tag head

Se pueden poner en cualquier parte pero la especificacin HTML recomienda que se coloque en el Head de forma que tus paginas cargan mas rpido, o al menos aparentan eso ya que el renderizado es progresivo.

## Considera colocar los Javascript al fondo de la página

El objetivo principal es que la pagina se carge lo más rápido posible para el usuario. Cuando se carga un script, el navegador no puede continuar hasta que el archivo completo se ha cargado, provocando que el usuario tenga que esperar más hasta ver algún resultado.

```html
<p>And now you know my favorite kinds of corn. </p>
<script type="text/javascript" src="path/to/file.js"></script>
<script type="text/javascript" src="path/to/anotherFile.js"></script>
</body>
</html>
```

## No uses javascript en linea, no estamos en 1996!

Hace años era una práctica común poner comandos JS directamente en el interior de los tags. Por lo general un "onclick" o similar se añade al tag.
Ni que decir tiene que no se debe hacer nunca esto. Lo mejor es pasar el código a un JS externo y usar un "addEventListener/attachEvent" para escuchar el evento o usar un framework como JQuery.

```javascript
$('a#moreInfo').click(function () {
  alert('Quieres más información?');
});
```

## Validar continuamente

Usa las herramientas de validación.

## Los tagas en minusculas

Son más fáciles de leer.

## Descarga ySlow y usalo

Es una herramienta de Yahoo que ha estado haciendo un gran trabajo en este sentido. Analiza la web y muestra un reporte sobre las áreas que neceitan mejoras. Muy recomendable.

## Comprime una vez termine. Esto cuando se despliegue, obviamente

Hay muy buenos compresores tanto de js como css
