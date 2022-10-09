---
name: 'flexget-instalacion-y-configuracion-raspberry-pi'
title: 'Flexget: Instalación y configuración en Raspberry'
year: 2016-11-06
id: 'flexget-instalacion-y-configuracion-raspberry-pi'
description: flexget, instalación y configuración en Raspberry pi para sacar provecho a la automatización de diversas tareas, como uso de Transmision y subtitulos
layout: post
author:
  name: Salrion
---

up:: [Home](http://salrion.netlify.app)

Flexget permite realizar tareas automatizadas en linux.

## Instalación

Se debe usar el instalador de paquetes de python:

```sh
sudo apt-get install transmission-daemon python-pip
sudo pip install flexget
```

## Configurar flexget

Para ello hay que editar:

```sh
nano .flexget/config.yml

# o bien si prefieres vim
vim .flexget/config.yml
```

Aquí hay que tener cuidado, es un fichero tipo YAML por lo que el número de espacios es muy importante:

```yaml
templates:
  global:
    email:
      from: tucorreoqueenvia@gmail.com
      to: tucorreoquerecibe@gmail.com
      smtp_host: smtp.gmail.com
      smtp_port: 587
      smtp_username: tucorreoqueenvia@gmail.com
      smtp_password: tupasword
      smtp_tls: yes
      template: accepted
tasks:
  rss:
    priority: 1
    rss: TUURLFEED
    all_series: yes
    transmission:
      host: localhost
      port: 9091
      username: 'tuusuario'
      password: 'tupassword'
      ratio: -1
      main_file_only: yes
      path: /mnt/usb/Descargas/Flexget
      addpaused: no
      skip_files:
        - '*.nfo'
        - '*.sfv'
        - '*[sS]ample*'
        - '*.txt'
  subtitles:
    priority: 4
    disable_builtins: yes
    find:
      path:
        - /mnt/usb/Descargas/Flexget
      regexp: '.*\.(mp4|mkv|avi)$'
      recursive: yes
    accept_all: yes
    regexp:
      reject:
        - '.*[sS]ample.*'
    periscope:
      languages:
        - es
      overwrite: yes
  sort:
    priority: 5
    disable_builtins: yes
    find:
      path: /mnt/usb/Descargas/Flexget
      mask: '*.srt'
      recursive: yes
    accept_all: yes
    seen: local
    thetvdb_lookup: yes
    all_series:
      parse_only: yes
    move:
      to: /mnt/usb/Series//
      filename: ' -  - '
      clean_source: 100
      along:
        - mkv
        - mp4
        - avi
  clean:
    priority: 3
    clean_transmission:
      host: localhost
      port: 9091
      username: 'tuusuario'
      password: 'tupassword'
      finished_for: 1 hours
```

Lo que le estamos diciendo es:

1. Cuando se realice alguna tarea que haya terminado bien, manda un correo usando gmail
2. Obtener torrents desde este RSS y descargar todos las series que aparezcan
3. Usar Transmission para las descargas
4. Limpiar las descargas completadas del Transmission
5. Buscar subtítulos para los archivos descargados del tipo vídeo (salvo los que contengan la palabra “sample”)
6. Para cada subtítulo encontrado, buscar los datos de la serie y moverlo junto al vídeo a la carpeta correspondiente.De esta forma, hasta que un capítulo no tenga subtítulos no será movido a la carpeta de la serie y seguirá intentando cada hora encontrar un subtítulo para ella.

Flexget permite muchísimas opciones de configuración, podéis consultarlas en su Wiki.

Una vez configurado, lo probamos:

```bash
flexget execute
```

Y para su ejecución cada cierto tiempo:

```bash
//Si todo va bien, lo añadimos ejecutamos
crontab -e
//y añadimos al final la siguiente línea para que cada hora busque nuevas descargas.
@hourly /usr/local/bin/flexget execute --cron
```

Recomiendo que el disco duro externo esté en EXT4, el rendimiento frente a NTFS es muy grande, y evita que el Tranmissión de errores de “timeout” que puede provocar que el Flexget no lleve bien la cuenta de que capítulos ha descargado y descargue varias veces el mismo.

## Nota:

Actualmente estoy usando la siguiente configuración:

```yaml
templates:
  tv:
    #    manipulate:
    #      - title: &the
    #          replace:
    #            regexp: '^The\W'
    #            format: ''
    #      - filename: *the
    #      - series_name: *the

    private_torrents: no

    series:
      settings:
        tv:
          exact: yes
          propers: 3 days
          #          quality: 720p+
          set:
            path: /media/16GB/series/{{series_name}}
      tv:
        - Arrow
        #        - Castle (2009)
        #        - Cosmos A Spacetime
        #        - Dark Matter
        #        - Defiance
        - Doctor Who (2005)
        #        - Extant
        #        - Falling Skies
        #        - Galavant
        #        - Game of Thrones
        #        - Gotham
        #        - Humans
        #        - Killjoys
        #        - Lost Girl
        #        - Marvel's Agent Carter
        #        - Marvel's Agents of S.H.I.E.L.D.
        #        - Marvel's Daredevil
        #        - Once Upon a Time (2011)
        #        - Orphan Black
        #        - Penny Dreadful
        #        - Person of Interest
        #        - Scorpion
        #        - Sherlock
        #        - Sleepy Hollow
        #        - Teen Wolf
        #        - The 100
        #        - The Big Bang Theory
        #        - The Blacklist
        - The Flash
    #        - The Librarians (US)
    #        - Ultimate Spider Man
    #        - Dexter
    #        - Fringe
    #        - Game of Thrones
    #        - Mad Men
    #        - MythBusters
    #        - The Office
    #        - Real Time with Bill Maher
    #        - South Park
    #        - True Blood

    transmission:
      enabled: yes
      host: localhost
      port: 9091
      username: ''
      password: '{4f11b1058aa367d832ceb88d378634adc64cf0d2TTh5dRCc'
#deprecated      removewhendone: no

tasks:
  showrss:
    priority: 1
    rss: http://showrss.info/rss.php?user_id=17159&hd=null&proper=null
    template: tv

  #  showrss-720:
  #    priority: 2
  #    rss: http://showrss.info/rss.php?user_id=17159&hd=1&proper=null
  #    template: tv

  #  ezrss.it:
  #    priority: 2
  #    rss: http://ezrss.it/feed/
  #    template: tv

  #  thepiratebay.org-tv:
  #    priority: 3
  #    rss: http://rss.thepiratebay.org/208
  #    template: tv
  #    verify_ssl_certificates: no

  #  kat.ph-tv:
  #    priority: 4
  #    rss: http://kat.ph/tv/?rss=1
  #    template: tv

  #  extratorrent.com-tv:
  #    priority: 5
  #    rss: http://extratorrent.com/rss.xml?cid=8
  #    template: tv

  #  torrentz.eu-tv:
  #    priority: 6
  #    rss: http://torrentz.eu/feed
  #    template: tv

  #  showrss.karmorra.info-tv:
  #    priority: 7
  #    rss: http://showrss.karmorra.info/feeds/all.rss
  #    template: tv

  subtitles:
    priority: 4
    disable: builtins
    filesystem:
      path:
        - /media/16GB/series/
      regexp: '.*\.(mp4|mkv|avi)$'
      recursive: yes
    accept_all: yes
    regexp:
      reject:
        - '.*[sS]ample.*'
    periscope:
      languages:
        - en
        - es
      alternatives:
        - es
      overwrite: no
```
