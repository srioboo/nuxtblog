---
name: 'raspberrypi'
title: 'Raspberry Pi: el mini ordenador versátil'
year: 2016-05-22
img: https://res.cloudinary.com/salrion/image/upload/{{trans}}/salrionblog/raspberry-pi.jpg
alt: Raspberry Pi
id: 'raspberrypi'
description: Apuntes y notas sobre Rasbperry PI, diferentes usos y configuraciones base para configurar diferentes opciones de este mini ordernador.
layout: post
author:
  name: SRN
---

## Montar un servidor web

http://geekytheory.com/tutorial-raspberry-pi-crear-servidor-web/

Asignamos una ip estatica.

```bash
sudo nano /etc/network/interfaces

auto lo
iface lo inet loopback
iface eth0 inet static
address 192.168.1.2
netmask 255.255.255.0
gateway 192.168.1.1
# allow-hotplug wlan0
# iface wlan0 inet manual
# wpa-roam /etc/wpa_supplicant/wpa_supplicant.conf
# iface default inet dhcp
```

## Instalar Nginx, PHP5 y SQLite3 en un Raspberry Pi

http://mentalgrain.com/rpi/installing-nginx-php5-and-sqlite3-on-a-raspberry-pi/
http://lowpowerlab.com/blog/2013/10/07/raspberrypi-home-automation-gateway-setup/

Nginx funciona bien y es facil de configurar. En adición se puede usar con PHP y SQLite.

Actualiza los repositorios

- sudo apt-get update; sudo apt-get upgrade

Instala Nginx con:

- sudo apt-get install nginx

Comprueba que esta instalado correctamente arrancando el servidor e introduciendo en el navegador la direccion de tu Raspberry Pi, http://<address_of_your_rpi>.

- sudo service nginx start

Por defecto el servidor busca el contenido en /usr/share/nginx/www. Pero puede interesar cambiarlo a uno más convencional como /var/www. Si no existe crealo:

1. sudo mkdir /var/www
2. sudo chown pi /var/www #dar permisos al usuario pi.

El servidor no está configurado para buscar en esta carpeta. Necesitas crear una configuración para un sitio nuevo en la carpeta de sites-available.

1. cd /etc/nginx/sites-available/
2. sudo nano nombre_de_tu_sitio

Y añade las siguientes lineas.

```bash
server {
        listen 80;
        root /var/www;
        index index.html index.htm;
}
```

Pero aún no está usando esa configuración.

1. sudo service nginx stop
2. sudo unlink /etc/nginx/sites-enabled/default

1) cd /etc/nginx/sites-enabled/
2) sudo ln -s /etc/nginx/sites-available/nombre_de_tu_sitio

3) sudo service nginx start

Ahora tenemos el servidor sirviendo archivos estáticos desde /var/www. Intenta poner una html en la carpeta y escribe su dirección en el navegador.

## PHP5

Instalamos PHP5 con:

1. sudo apt-get install php5-fpm php-apc php5-common php5-cli

Para configurar Nginx para usar PHP5. Ve al archivo creado en el paso anterior y añade.

```bash
server {
        listen 80;
        root /var/www;
        index index.php index.html index.htm;
        location ~ \.php$ {
                fastcgi_pass unix:/var/run/php5-fpm.sock;
                fastcgi_index index.php;
                include fastcgi_params;
        }
}
```

Guarda y reiniciarnginx.

1. sudo service nginx restart

Compureba que todo funciona creando un archivo php con este contenido.

```php
<?php
        phpinfo();
?>
```

Si el archivo se llama test.php abre en navegador en http://<address_of_your_rpi>/test.php y parece la información de php

## SQLite3

Instalar el SQLite3 y su modulo PHP5 con:

1. sudo apt-get install sqlite3 php5-sqlite

Hay difernecia entre SQLite3 y SQLite2!. El código de abajo comprobara que esta funcionando con php.

```php
<?php
    date_default_timezone_set('Europe/Stockholm');

    function displayResult($result) {
        foreach ($result as $row) {
            echo "Id: " . $row['id'] . "<br>";
            echo "Title: " . $row['title'] . "<br>";
            echo "Message: " . $row['message'] . "<br>";
            echo "Time: " . $row['time'] . "<br>";
            echo "<br>";
        }
    }

    try {
        // Create (connect to) SQLite database in file
        $file_db = new PDO('sqlite:messaging.sqlite3');
        // Set errormode to exceptions
        $file_db->setAttribute(PDO::ATTR_ERRMODE,
                               PDO::ERRMODE_EXCEPTION);

        // Create tables

        $file_db->exec("Create TABLE IF NOT EXISTS messages (
                        id INTEGER PRIMARY KEY,
                        title TEXT,
                        message TEXT,
                        time TEXT)");

        /**************************************
         * Set initial data                    *
         **************************************/

        // Array with some test data to insert to database
        $messages = array(
                          array('title' => 'Hello!',
                                'message' => 'Just testing...',
                                'time' => 1327301464),
                          array('title' => 'Hello again!',
                                'message' => 'More testing...',
                                'time' => 1339428612),
                          array('title' => 'Hi!',
                                'message' => 'SQLite3 is cool...',
                                'time' => 1327214268)
                          );

        // Play with DB and Tables

        // Prepare INSERT statement to SQLite3 file db
        $insert = "INSERT INTO messages (title, message, time)
                   VALUES (:title, :message, :time)";

        $stmt = $file_db->prepare($insert);

        // Bind parameters to statement variables
        $stmt->bindParam(':title', $title);
        $stmt->bindParam(':message', $message);
        $stmt->bindParam(':time', $time);

        // Loop thru all messages and execute prepared insert statement
        foreach ($messages as $m) {
            // Set value to bound variables
            $title = $m['title'];
            $message = $m['message'];
            $time = $m['time'];

            // Execute statement
            $stmt->execute();
        }

        $result = $file_db->query('SELECT * FROM messages');

        displayResult($result);

        // Prepare UPDATE statement
        $update = "UPDATE messages SET time = :time
                   WHERE id == :id";
        $stmt = $file_db->prepare($update);

        // Select all data from file db messages table
        $result = $file_db->query('SELECT * FROM messages');

        // Loop thru all data from messages table
        // and insert it to file db
        foreach ($result as $m) {
            // Bind values directly to statement variables
            $stmt->bindValue(':id', $m['id'], SQLITE3_INTEGER);

            // Format unix time to timestamp
            $formatted_time = date('Y-m-d H:i:s', $m['time']);
            $stmt->bindValue(':time', $formatted_time, SQLITE3_TEXT);

            // Execute statement
            $stmt->execute();
        }

        $result = $file_db->query('SELECT * FROM messages');

        displayResult($result);

        // Drop tables
        $file_db->exec("DROP TABLE messages");

        $file_db = null;
    }
    catch(PDOException $e) {
        // Print PDOException message
        echo $e->getMessage();
    }
?>

```

## Instalar VNC server @TESTEAR

```bash
sudo apt-get install tightvncserver
tightvncserver
vncserver :1 -geometry 1024x768 -depth 24
```

Para que VNC se inicie al encender. Agregar estas líneas antes de "exit 0" en el archivo /etc/rc.local

```bash
echo "Iniciando VNC Server"
su -c 'tightvncserver' root
```

## SETUP NOIP

Fuente. NOIP es para poder acceder desde Internet si tenemos una IP pública dinámica. Ejecutar y seguir las instrucciones

```bash
cd /usr/local/src/
wget http://www.no-ip.com/client/linux/noip-duc-linux.tar.gz
tar xf noip-duc-linux.tar.gz
cd noip-2.1.9-1/
make install
/usr/local/bin/noip2 -C
```

## TOR

The Onion Ring, para acceder a la red a través de TOR.

```bash
sudo apt-get install tor
tor
```

## SERVIDOR MULTIMEDIA (MINI DLNA)

Fuente. Para hacer streaming del contenido del Raspberry Pi a dispositivos en nuestra red local.

```bash
sudo apt-get install minidlna
```

Editar /etc/minidlna.conf para ubicaciones de multimedia.

```bash
sudo service minidlna start
sudo service minidlna force-reload
```

Recursos adicionales en caso de problemas con permisos.

## TORRENT (TRANSMISSION)

(Ahora esto tiene su propio post en esta misma página)

## MKVTOOLNIX

Fuente. Para trabajar con pistas de subtítulos, audio y video de archivos MKV.

sudo apt-get install mkvtoolnix mkvtoolnix-gui

## SCRIPT AUTOSTART?? (@TEST @MEJORAR)

Finalmente, crear un archivo ejecutable con este contenido en el escritorio para ejecutar al iniciar. Son comandos para iniciar servicios y compartir portapapeles por VNC.

```bash
#Compartir clipboard a través de VNC
autocutsel -fork
#no-ip
/usr/local/bin/noip2

#Montar disco
sudo umount /dev/sda1
sudo mount /dev/sda1 /mnt/dos

#En caso de no funcionar, usar: sudo ntfs-3g /dev/sda1 /mnt/dos

#Servidor multimedia
sudo service minidlna start

#Samba, carpetas compartidas
sudo service samba start

tor

```

## DESCARGA SERIES Y SUBS AUTOMATICA

Con Raspberry Pi + Pendrive + Transmission + Flexget + ShowRSS + Periscope
Instalar todo con:

```bash
sudo apt-get install transmission-daemon python-pip
sudo pip install flexget
sudo pip install transmissionrpc
sudo pip install periscope
mkdir /home/pi/.config //por un bug de periscope, si no tiene la carpeta .config falla
```

## Configurar Transmission:

```bash
//ver tambien apartado anterior
sudo service transmission-daemon stop
sudo nano /etc/transmission-daemon/settings.json
//se puede editar tambien la local que no da problemas con permisos
```

Configurar los siguientes puntos en settings.json

```json
"download-dir": "/mnt/Descargas",
"incomplete-dir": "/mnt/DescargasIncompletas",
"incomplete-dir-enabled": true
"rpc-username": "miusuario",
"rpc-password": "mipassword",
"rpc-whitelist-enabled": false,
"umask": 0,
```

Asignamos los premisos adecuados:

```bash
sudo nano /etc/init.d/transmission-daemon
// cabmiar USER=mi_usuario
//
// cambiamos los permisos de los directorios
sudo chown -R mi_usuario:mi_usuario /etc/transmission-daemon
sudo chown -R mi_usuario:mi_usuario /etc/init.d/transmission-daemon
sudo chown -R mi_usuario:mi_usuario /var/lib/transmission-daemon
//
//
// cambiamos el usuario
sudo nano /etc/systemd/system/multi-user.target.wants/transmission-daemon.service // user=mi_usuario
```

Luego recargamos el systemctl

```bash
sudo systemctl daemon-reload
```

Y por ultimo

```bash
sudo mkdir -p /home/mi_usuario/.config/transmission-daemon/
sudo ln -s /etc/transmission-daemon/settings.json /home/mi_usuario/.config/transmission-daemon/
sudo chown -R mi_usuario:mi_usuario /home/mi_usuario/.config/transmission-daemon/
```

Volvemos a arrancar el Tranmissión y podremos conectarnos a él mediante la URL
http://[IPRAPSBERRY]:9091

```bash
sudo service transmission-daemon start
```

## SERVIDOR DE ARCHIVOS (OWNCLOUD, BITTORRENT SYNC)

## Instalar Bittorrent SYNC

```bash
// esta url no está funcionando hay que buscar otra
wget "http://btsync.s3-website-us-east-1.amazonaws.com/btsync_arm.tar.gz"
//alternativa
wget "https://download-cdn.getsyncapp.com/stable/linux-arm/BitTorrent-Sync_arm.tar.gz"

cd /home/pi
tar -zxvf btsync_arm.tar.gz
./btsync
```

En la carpeta autostart (~/.config/) (la creamos si no exite) e introducimos

```bash
[Desktop Entry]

Type=Application

Exec=/home/pi/btsync
```

Y la guardamos en ~/.config/autostart como: syncstart.desktop

```bash
//acceder al GUI web
'http://[YOUR IP ADDRESS]:8888/gui'
Ejemplo: 'http://192.168.1.2:8888/gui'.

```

## Añadir un pendrive y hacerlo permanente

Se puede añadir un disco duro o un USB, aquí usarmos un USB al ser más compacto.

Pincha el pendrive y con "df -h" encuentralo y formatealo de la siguiente forma (remplaza sda1 con el nombre del disco):

```bash
sudo umount /dev/sda1
sudo mkfs.ext4 /dev/sda1 -L 16GB
//la parte del final -L SYNC significa ponerle etiqueta de nombre 16GB
```

Con el siguiente comando veremos la información

```bash
ls -laF /dev/disk/by-uuid/
```

Vamos ahora a hacer que todo quede preparado para que se conecte de forma automática al encender la Raspberry con el disco conectado, o poder conectarlo y desconectarlo con un comando muy simple en caso de tenerla ya encendida.

Con el disco duro o memoria USB conectada tecleamos en una Terminal local o remota los siguientes comandos:

```bash
sudo blkid

//En nuestro caso aparece
/dev/mmcblk0p1: SEC_TYPE="msdos" LABEL="boot" UUID="936C-7154" TYPE="vfat"
/dev/mmcblk0p2: UUID="c1398422-7a7c-4863-8a8f-45a1db26b4f2" TYPE="ext4"
/dev/sda1: LABEL="16GB" UUID="0d30bcc8-effb-40ee-bfbf-228af950e958" TYPE="ext4"
```

Apuntamos letra por letra lo que aparece tras UUID, por largo que sea, TODO. Ahora creamos una carpeta nueva que será en la que "montemos" ese disco duro para que se pueda ver desde el explorador de archivos o desde otros programas. En mi caso he elegido crearla en la carpeta "media" que es la recomendada para esto y con el mismo nombre que la etiqueta que le puse al formatearlo "16GB". Y luego, le damos permisos para que todo el mundo pueda escribir, esto es más o menos inseguro pero nos facilitará las cosas.

```bash
sudo mkdir /media/16GB
sudo chmod 777 /media/16GB
```

Ahora vamos a hacer una cosa más, que es poner un "acceso directo" estilo Linux para que desde la carpeta del usuario estándar "pi" podamos acceder más rápido a nuestro disco

```bash
ln -s /media/16GB/ /home/pi/16GB
```

Ahora con el código que copiamos al principio o viéndolo de nuevo, vamos a editar el fichero de la configuración de discos de la Raspberry Pi

OJO QUE PODEMOS LIARLA, VAMOS A HACER COPIA DE SEGURIDAD E IR CON CUIDADO

```bash
sudo cp /etc/fstab fstab.old
//comprobamos que se ha copiado con ls y seguimos
```

```bash
sudo nano -w /etc/fstab

//añadimos la linea
UUID=lo-que-sea-que-os-salio-antes /media/16GB ext4 defaults 0 0
```

Una vez fuera del editor "nano" comprobamos como están los discos duros, memorias y particiones de la tarjeta SD de la Raspberry Pi con el comando df = disk free = disco libre o disponible.
Reiniciamos con sudo reboot

Después de reiniciar comprobamos de nuevo con df y vemos que ya está disponible

Ahora para desconectarlo o conectarlo cuando esté es ese puerto sda el comando será

```bash
sudo umount /dev/sda
sudo mount /dev/sda
```

## Configurar Owncloud @TEST @Mejorar

Como suele ser un lio en linux el usuario Petrockblog de GITHUB lo simplifico, creando un script para instalar y actualizar Owncloud. Haz lo siguiente:

```bash
sudo apt-get update
sudo apt-get install -y git dialog
```

Descarga el último script:

```bash
cd
git clone git://github.com/petrockblog/OwncloudPie.git
```

y ejecutalo:

```bash
cd OwncloudPie
chmod +x owncloudpie_setup.sh
sudo ./owncloudpie_setup.sh
```

... y a esperar. Tarda un poco
desde http://[Your IP Address]/owncloud se configura. Importante pulsar en "avanzado" y configurar la carpta de datos a /media/SYNC

## Combinar BitTorrent Sync y Owncloud @TEST @Mejorar

First we need to clear up a few file permissions. Add sync to the www-data group:

```bash
sudo usermod -a -G www-data sync
```

Allow sync to write to the thumb drive:

```bash
sudo chmod -R 770 /media/SYNC
```

Now open up the BitTorrent Sync WebUI (YourIpAddress:8888/gui) and add a folder. You’ll want to add: /media/SYNC/USERNAME/files where "username" is the name you selected when setting up Owncloud. Generate a key and you are done. You can now use that key to set up a folder on any computer you want. Any files added to that folder will be synced to your RasPi and be available through the Owncloud web interface. While this is pretty cool, there’s just one more little step to make this much more useful.

Step 6: Set up Owncloud to be accessed from anywhere (including mobile phones)
To access our files from anywhere, we’ll need to first set up a static IP address. If you used the wifi dongle I recommended, you can simply plug it in and it will work. Open terminal and type in:

sudo nano /etc/network/interfaces
You’ll need to make a few changes in order to get a static IP address. Below is what I ended up using after a bit of trial and error. Your address, gateway, net mask, SSID, and PSK will need to be changed according to your network. The settings may be different if you used a different wireless adaptor, or if you are only using an ethernet cable.

```bash
auto lo
iface lo inet loopback

iface eth0 inet static
        address 192.168.1.20
        gateway 192.168.1.1
        netmask 255.255.255.0

auto wlan0
#allow-hotplug wlan0
iface wlan0 inet static
        address 192.168.1.22
        gateway 192.168.1.1
        netmask 255.255.255.0
        wpa-ssid "YOUR SSID"
        wpa-psk "YOUR PSK"
#wpa-roam /etc/wpa_supplicant/wpa_supplicant.conf
iface default inet dhcp
```

Finally, you’ll need to forward a port so that owncloud can be accessed from outside networks. I just forwarded port 80 for the IP address of my RasPi. In this example, my IP address when using wifi is 192.168.1.22. The procedure for forwarding ports is different for every router. If I grab my real IP address from a site such as this one, I can now access Owncloud and my Sync files from anywhere by going to [MyRealIpAddress]/owncloud (where the IP address is what you find from the website I linked to). You can also set up Owncloud with an Android or iOS client for mobile access.

owncloud2
IMG_4222
Phew. If you made it this far, congrats. I had fun creating my own personal BitTorrent-powered cloud and I hope you found this walkthrough helpful. There are so many uses for something like BitTorrent Sync, and I think we’ve only begun to scratch the surface.

If you have found any creative uses for BitTorrent Sync, then share with us on our forums. We’d love to hear about it.

## SERVIDOR DLNA

Comenzamos por instalarlo en nuestra Raspberry:

```bash
sudo apt-get install minidlna
```

Una vez instalado, vamos a configurarlo:

```bash
sudo nano /etc/minidlna.conf
```

Dentro, buscamos la variable media_dir que indica el directorio a indexar y escribimos la ruta a nuestro disco:

```bash
media_dir=/mnt/Descargas
```

Si quisiéramos indexar más de un directorio, se puede agregar varias líneas de media_dir indicando distintas rutas.

Ahora vamos a configurar el nombre de nuestro servidor. Dentro del archivo buscamos:

```bash
#friendly_name=My DLNA Server
```

Como verás, está comentado. Lo que debemos hacer es eliminar el # del principio, y cambiar el nombre por el que más nos guste:

```bash
friendly_name=Raspi DLNA
```

Además, queremos asegurarnos de que el servidor indexe automáticamente los archivos nuevos que se vayan descargando. Habilitamos esta opción aplicando en la configuración:

```bash
inotify=yes
```

Guardamos el archivo. Lo que debemos hacer ahora es iniciar miniDLNA cada vez que se reinicie la Raspberry. Para ello ejecutamos:

```bash
sudo update-rc.d minidlna defaults
```

Y finalmente reiniciamos el servicio:

```bash
sudo service minidlna start
```

De ahora en adelante todos nuestros dispositivos verán la red con nombre «Raspi DLNA».

## SERVIDOR NFS @DONE

Para ello, vamos a convertir un disco duro externo en una suerte de NAS (un disco duro en red).
Hay varios protocolos para compartir ficheros en red: samba, nfs, dlna, upnp, etc.

Vamos a usar NFS, ya que es un poco más rápido que SAMBA y no tendremos problemas con códecs como puede tener DLNA. No obstante, no es descartable la idea de ir probando nuevos protocolos y encontrar el que mejor se ajuste a nuestras necesidades.

Preparativos e instalación
Por si no lo habíamos hecho ya, realizamos un update para actualizar la lista de aplicaciones, ya que probablemente nos dé un error 404 (not found) al instalar NFS.

```bash
# Instalamos los paquetes necesarios
sudo apt-get update
sudo apt-get install nfs-common nfs-kernel-server

# Por si no se nos inicia tras la instalación, el modo de hacerlo es el siguiente:
sudo service nfs-common start
sudo service nfs-kernel-server start

# Si todo ha ido bien… ¡nos saldrá un mensaje de error!
```

Configuración inicial
El fichero /etc/exports que se nos ha creado en la instalación es donde hay que meterse ahora, para poder configurar lo que queremos compartir, ya que el mensaje nos dice que "no hay nada para exportar"

Es un fichero altamente modificable, y es recomendable revisar todas sus opciones en su propio manual http://linux.die.net/man/5/exports

sudo nano /etc/exports

Exports

Así a lo rápido, vemos 3 partes diferenciadas.

/media/disco1/downloads/ 192.168.1.0/24(rw,insecure)

'/media/disco1/downloads/', la ruta a compartir. Puede haber varias rutas, en varias líneas.

'192.168.1.0/24', la ip o ips en las que se comparte el contenido. En el ejemplo, comparto para toda mi red local (desde 192.168.1.1 hasta 192.168.1.254)

Ojo con poner un ‘asterisco’, ya que también nos compartiría con las ipv6, que no están cargadas en el kernel de la raspi, y tendríamos que instalarlo en /etc/modules. Salvo que necesitemos ipv6, no recomiendo hacerlo.

Lógicamente, si queremos configurar manualmente lo que compartir con cada cliente, podemos hacerlo.

'(rw,insecure)', las opciones:

- rw con opción de lectura y escritura.
- insecure es la que permite que el cliente que se conecte al servidor nfs NO sea root.
  ¿Y por qué tengo insecure? Porque es la única manera de compartir con XBMC, desde el cual me conectaré con la TV del salón y podré ver lo que haya en el disco duro. Pero eso ya se verá más adelante.

Hay más opciones de configuración, y recomiendo revisarlas en el manual o googleando un poco.

Continuamos solucionando problemas
Es probable que os salga un fallo como éste:
[warn] Not starting: portmapper is not running … (warning).

Para arreglarlo:
sudo rpcbind

Como dice el manual http://linux.die.net/man/8/rpcbind , convierte números RPC en direcciones universales. Vamos, que es necesario para "coordinar" las peticiones del servidor.

Reiniciamos el servidor:
sudo service nfs-kernel-server restart

Si todo ha ido bien, perfecto.
Ahora que lo tenemos todo funcionando y sabemos cómo hacerlo, vamos a hacer que se automatice todo ello en el próximo arranque.

Configurando NFS para que inicie con el arranque
Si queremos que el servidor se inicie tras cada reinicio de la raspi, lo que yo he hecho, debido a mis limitados conocimientos, es usar un script de http://www.stuffaboutcode.com y adaptarlo a mis necesidades.

Manos a la obra, creamos el fichero:

```bash
sudo nano /etc/init.d/nfs
```

En negrita, las partes que yo he modificado/añadido.

```bash
#!/bin/sh
### BEGIN INIT INFO
# Provides: nfs
# Required-Start: $remote_fs $syslog
# Required-Stop: $remote_fs $syslog
# Default-Start: 2 3 4 5
# Default-Stop: 0 1 6
# Short-Description: Simple script to start a program at boot
# Description: A simple script from www.stuffaboutcode.com which will start / stop a program a boot / shutdown.
### END INIT INFO
# If you want a command to always run, put it here
# Carry out specific functions when asked to by the system
case "$1" in
start)
echo "Starting nfs"
# run application you want to start
    sudo /sbin/rpcbind
    sudo /etc/init.d/nfs-common start
    sudo /etc/init.d/nfs-kernel-server start
;;
stop)
echo "Stopping nfs"
# kill application you want to stop
    killall rpcbind
    sudo /etc/init.d/nfs-common stop
    sudo /etc/init.d/nfs-kernel-server stop
;;
*)
echo "Usage: /etc/init.d/nfs {start|stop}"
exit 1
;;
esac
exit 0
```

Guardamos, y le damos permisos de ejecución:

```bash
sudo chmod +x /etc/init.d/nfs
```

Si queremos hacer la prueba, tan sólo tenemos que escribir:

```bash
sudo /etc/init.d/nfs start #(para iniciarlo)
sudo /etc/init.d/nfs stop #(para pararlo)

# Y ya finalmente, para que se inicie el script en el arranque del sistema:
sudo update-rc.d /etc/init.d/nfs defaults
```

Configurando como cliente en linux
Para probar que todo funciona correctamente, hacemos una prueba con mount (esto desde donde queremos acceder es decir desde el cliente):

sudo mount server:/ruta/compartida /ruta/montaje

En mi caso sería así:

```bash
sudo mount 192.168.1.2:/media/16GB/series /media/multimedia/rasppi
```

Si el montaje ha sido un éxito (recuerda tener instaldo nfs-common), procedemos a añadirlo en el fstab, para que el "disco1″ esté presente en cada arranque.

```bash
sudo nano /etc/fstab
# La sintaxis seguiría así:
192.168.1.2:/media/disco1 /media/disco1 nfs
# Comprobamos que funciona bien:
sudo mount /media/disco1
```
