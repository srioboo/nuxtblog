---
name: 'gestion-proyectos-grunt'
title: Gestión de proyectos con Grunt
year: 2020-03-14
img: https://images.unsplash.com/photo-1565109624019-cf28e0cdc1d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9
alt: grunt
id: 'grunt'
description: Apuntes sobre gestión de proyectos y automatización con Grunt
layout: post
tags: [Grunt, Web, Programación]
author:
  name: Salrion
---

Grunt es un gestor de automatización tareas que permite facilitar la validación, despliegue de código, compilación, etc.

### Instalación

Es necesario tener previamente instalaado Nodejs y npm y ejecutar el siguiente código:

```bash
npm install -g grunt-cli
```

El parámetro *-g* permite que la instalación sea global, con lo que no es necesario instalarlo en cada proyecto.

A continuación se muestra como inicializarlo y algunos comandos útiles:

```bash
npm install -g grunt-init

# Puedes solicitar ayuda al comando con
grunt-init --help

# crear proyecto basado en una plantilla
 grunt-init TEMPLATE

# crear un proyecto basado den una plantilla y ponerla en un path determinado
grunt-init /path/to/TEMPLATE

# algunas plantillas de interés serían
## plantilla jquery

git clone https://github.com/gruntjs/grunt-init-jquery.git ~/.grunt-init/jquery

## plantilla grunt
git clone https://github.com/gruntjs/grunt-init-gruntfile.git ~/.grunt-init/gruntfile

```

Son necesarios los siguentes archivos para configurarlo, Gruntfile.js:

```javascript
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        //src: ['src/**/*.js'],
        src: ['js/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      //files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      files: ['Gruntfile.js', 'js/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};
```

El otro archivo package.json configura lo necesario para usar grunt

```json
{
  "name": "testjspgrunt",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.5",
    "grunt-contrib-jshint": "~0.10.0",
    "grunt-contrib-nodeunit": "~0.4.1",
    "grunt-contrib-uglify": "~0.5.0"
  },
  "dependencies": {
    "grunt-cli": "^1.2.0",
    "grunt-contrib-concat": "^1.0.1",
    "grunt-contrib-qunit": "^2.0.0",
    "grunt-contrib-watch": "^1.0.0"
  }
}
```

Donde:

1. name: es el nombre del proyecto
2. version: la version
3. devDependecies: son las dependecias de desarrollo
4. dependecies: dependecias de ejecución

Se ejecuta **npm install** para que se instale todo lo necesario, y si ejecutamos **npm install [package] --save-dev** además de instalar una dependencia la incluye en el fichero package.json

### Recuerda

* npm se debe ejecutar en el directorio en el que está package.json
* Generalmente Gruntfile.js y package.json se incluyen en el mismo directorio
* grunt-init crea e inicia una configuración básica de estos dos archivos de configuración

### Configurar Grunt para usar tareas en archivos individuales

