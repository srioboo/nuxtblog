---
name: 'instalar-transmision'
title: Instalando Transmision en Linux
year: 2016-06-11
id: 'instalar-transmision-linux'
description: Notas de instalación de transmision en Linux
layout: post
tags: [Linux, transmission, instalación]
author:
  name: Salrion
---

# Instalación de Transmission como cliente bittorrent en Raspberry PI
Para instalar transmission como nuestro cliente de bt en Linux segiremos los siguientes pasos.

1. Instalamos el daemon, en este caso lo ejecutaremos en segundo plano en consola

```bash
sudo apt-get install transmission-daemon
```

2. A continuación paramos el daemon

```bash
sudo /etc/init.d/transmission-daemon stop
```
3. Crear los directorios

```bash
sudo mkdir /media/usbdrive/Torrent
sudo mkdir /media/usbdrive/Torrent/Temporary
sudo mkdir /media/usbdrive/Torrent/Completed
```

4. Habilitamos los permisos

```bash
sudo chmod -R 777 /media/usbdrive/Torrent
```

5. Customizamos el cliente

```bash
sudo nano /var/lib/transmission-daemon/info/settings.json
```

Cambiando solo lo siguiente

```json
"download-dir": "/media/usbdrive/Torrent/Completed",
"incomplete-dir": "/media/usbdrive/Torrent/Temporary",
"incomplete-dir-enabled": true,
"rpc-bind-address": "0.0.0.0",
"rpc-enabled": true,
"rpc-whitelist-enabled": false,
```

6. Lo volvemos a habilitar

```bash
sudo /etc/init.d/transmission-daemon start
```

Ahora podemos acceder desde: http://raspberiPi_PI:9091/transmission
usuario / password: transmission / transmission
