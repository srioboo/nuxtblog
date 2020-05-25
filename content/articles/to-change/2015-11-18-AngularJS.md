---
layout: post
title: Apuntes de AngularJS
tags:
- AngujarJS
- Web
- Programación
---

AngularJS es un framework de javascript para desarrollo de paginas web desarrollado por google. En esta sección de mis apuntes anotaré todo lo que puedo ir necesitando para instalar y desarrollar con este framework.

## Descarga
1. Se descarga la branch 1.2.x legacy - Minified
2. Se puede hacer por enlace:
3. [https://ajax.googleapis.com/ajax/libs/angularjs/1.2.27/angular.min.js](https://ajax.googleapis.com/ajax/libs/angularjs/1.2.27/angular.min.js)

## Activando en html
Existen dos formas:

```html
<!-- Esta lineas van al final de html antes del cierre del body -->
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.17/angular.min.js"></script>
<script>window.angular || document.write('<script src="lib/angular/angular.min.js"><\/script>');</script>
```

Directamente desde google con una llamada a local por si falla

```html
   <script src="../angular.min.js" type="text/javascript"></script>
```

Llamandolo en el directorio

## Directivas
Son necesarias para que funcione la app:

1. ng-app : inicializa la app AngularJS
2. ng-controller : que asigna el controller
3. ng-repeat : es un bucle for
4. ng-model: ata una propiedad a un modelo de datos
5. ng-click: ejecuta un click en un elemento, ng-click="Save()"
6. ng-show y ng-hide: muestra u ocultan un componente
7. ng-submit: lanza un formulario

## Directivas generadas
AngularJS añade clases a cada elemento en el que desea operar, por ejemplo:

1. ng-scope : en cada elemento en el que se inicializa el scope
2. ng-binding : para cada elemento que esté vinculado

## El Scope
Es el alcance o limites en los que un objeto o algo

## Filtros de datos
hay filtros predefinidos, pero se pueden crear nuevoa

* orderBy : 'nombre' --> ng-repeat="alumno in alumnos | orderBy:'nombre'"

# NODE.js
en consola ver:

1. node --version
2. npm --version (administrador de paquetes)

Instalar servidor web:

1. npm install -g express-generator //install -g global
2. express miservidor // crea el servidor y muestra los archivos en el directorio, en public se colocan las apps
3. cd miservidor & npm install & npm start
4. localhost:3000 para la pagina del servidor

# Grunt
Es algo así como ant o maven, pero para javascript, tengo que probarlo

1. sudo npm install -g grunt-cli
2. crear un package.json dentro del directorio MiProyecto

```json
  {

   "name":"MiProyecto",

   "version": "0.1.0",

   "devDependencies":{

	   "grunt": "~0.4.5", 		      # grunt como ant
	   "grunt-contrib-jshint": "~0.10.0", # analisis de codigo
	   "grunt-contrib-concat": "~0.4.0",  # mezclar archivos
	   "grunt-contrib-uglify": "~0.5.0",  # minimiza el archivo
	   "grunt-shell": "~" 		      # es el shell
   }

  }
```

  1. sudo npm install --save-dev dentro del directorio de MiProyecto
  2. sudo npm install -g grunt-init #instala el inicializador
  3. crear un gruntfile.js

    Creamos una función para depurar guntfile.js

 ```javascript
    module.exports = function(grunt){

      //Project configuration
      grunt.initConfig({
	      jshint:{
	      	all:['scripts.js']
	      },
	      concat:{
		       dist:{
	      		src: ['scripts.js','scripts1.js','scripts2.js'],
			dest: 'unidos.js'
	       	       }
	       },
	      uglify: {
		      dist:{
			  src: 'unidos.js',
			  dest: 'build/unidos.min.js'
		      }
	       }
      });

      grunt.loadNpmTasks('grunt-contrib-jshint');

      grunt.loadNpmTasks('grunt-contrib-concat');

      grunt.loadNpmTasks('grunt-contrib-uglify');

      //Default Task
      grunt.registerTask('default',['jshint','concat','uglify']);
    };
```

## Grunt-Shell
```javascript
module.exports = function(grunt){

//Project configuration
grunt.initConfig({


    jshint:{
        all:['scripts.js']

    },
    concat:{
     dist:{
        src: ['scripts.js','scripts1.js','scripts2.js'],
        dest: 'unidos.js'
         }
     },
     uglify: {
        dist:{
            src: 'unidos.js',
            dest: 'build/unidos.min.js'
        }
     },
     shell:{
        multiple:{
            command:[
                'del unidos.js',
                'mkdir deploy',
                'move build\\unidos.min.js deploy\\unidos.min.js'
            ].join('&&')

            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //Default Task
    grunt.registerTask('default',['jshint','concat','uglify']);
};
```
esto borra unidos.js
crea un directorio deploy
y mover (en linux se usaría de otra forma mv build/unidos.min.js deploy/unidos.min.js)
join ejecuta varios comandos join


se puede ejecutar todas las tareas grunt o bien una por una con grunt jhint grunt lo-que-sea

grunt serve # sin r, es un servidor

# YEOMAN
Prerequisitos node.js, npm y git Es un workflow, son 3 herramientas que permiten mejorar el flujo de trabajo.

1. Yo : genera la estructura
2. Grunt: para las tareas
3. Bower: para manejo de dependencias

**Instalar Yeoman**
sudo npm install -g yo sudo npm install -g bower sudo npm install -g generator_angular sudo npm install -g generator_angular@0.9.8 #esta es una alternativa

**Estructura Yeoman:**

- app : raíz de la aplicación, .htaccess (permisos), 404.html (pagina error), favicon, robots.txt (paginas a indexsar) y el index.html
  1. scripts: esta el app.js, muestra los distintos controller y sus rutas correspondientes, esto es similar al struts.xml
  2. las carpetas controller tienes el controller
  3. css: los estilos
  4. views: las vistas
  5. images: esto es obvio

- bower_components: contiene los directorios con las librerias de los diferentes componentes. bower.json es similar al package.json y lo que hace es generar la lsita de dependeencias.
- El gruntfile.js es el que ya conocemos, son tareas, test, build, etc.
- karma.conf.js, karma es para pruebas unitarias
- node_modules: tienen los modulos de node.js y están definidos en package.json
- test: aquí estan los test unitarios... usa jasmine y se configura en karma

## Instalar un proyecto
Seguimos los siguientes pasos:

1. mkdir tareas && cd tareas
2. yo #seleccionamar angular
3. no sass compac
4. yes bootstrap
5. npm install #para lo que falta

## Instalar Angular-ui
1. bower list # lista los paquetes instalados
2. bower search angular-ui-sortable
3. bower install --save angular-ui-sortable jquery-ui
4. cerrar el servidor con ctrl+c, y reiniciar con grunt serve. Con esto se incluiran en index.html los nuevos componentes.
5. cargar los modulos en script app.js, añadiendo ui.shortable en los modulos
6. <div ui-sortable ng-model="tareas"></div> en la zona que deseas ordenar

## Testing con karma y jasmine
1. ejecutar grunt test (con sudo) esto da errores
2. test -> karma.conf.js
3. añadimos
4. 'bower_components/jquery/dist/jquery.js',
5. 'bower_components/jquery-ui/ui/jquery-ui.js',
6. 'bower_components/angular-ui-sortable/sortable.js',
7. en test -> spec -> controllers -> main.js
8. añadimos
9. if('no debe terner items al empezar', function(){
10. expect(scope.todos.length).toBe(0);
11. });

## Persistencia de datos en local
1. necesitamos un modulo nuevo
2. bower install --save angular-local-storage
3. añadir a index.html, simplemente lanzar grunt serve y lo hace automaticamente
4. en app.js añadimos:
5. 'LocalStorageModule'
6. y un provider: (añadimos un prefijo para no sobreescribir otras cosas)
7. .config(['localStorageServiceProvider', function(localStorageServiceProvider){
8. localStorageServiceProvider.setPrefix('ls');
9. }])
10. actualizar el controller en main.js

## Empaquetado
lanzar comando grunt --force

## Creación rápida de prototipos
mkdir prototipo && cd prototipo yo angular #(no y si) npm install npm install -g generator-angular bower install angular-bootstrap #incluirlo en index.html ui-bootstrap-tpls.js incluirlo dentro de app.js ui-bootstrap añadir menu de navegación
