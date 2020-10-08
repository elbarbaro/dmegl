# Proyecto sitio web DMEG

Un sitio web para la organización Data Mining Engineering Group

## Estructura del proyecto

El proyecto esta compuesto de los siguientes directorios y archivos:

    |-css
    |-fonts
    |-font-awesome
    |-flash
    |-img
    |-include
    |-js
    |-json
    |-pdf
    |-index.html
    |-events.html
    |-collaborators.html
    |-robots.txt
    |-sitemap.xml
    |-README.md

### css

Los archivos de estilo de las distintas paginas estan en este directorio.



### fonts y font-awesome

Las fuentes utilizadas en la página para todos los textos son cargadas desde los recursos de este directorio.

### img

Las imágenes del sitio web estan en este directorio separadas por otros directorios para algunas de las secciones de la página. Ejemplo: topics, participants, events

### json

Archivos de definición de datos que son utilizados por los scripts de JavaScript se encuentran en este directorio. 

El archivo para cargar personas en la sección de **Participants** es *participant.json*. En el se encuentra una propiedad **participants** que es un arreglo de objetos participante, todos estos son los datos que se muestran en esa sección.

### js

El comportamiento de las diferentes páginas del sitio esta definido por diferentes scripts en el lenguaje de JavaScript.

Para la sección de **Participants** los datos son cargados por medio del script *participants.js*. Es encargado de realizar una petición para consultar el archivo *participant.json* que esta en el servidor como se mencionó anteriormente.


## Agregando participantes a la sección de Participants

A continuación se describen los pasos para agregar nuevos participantes en la sección de la página:

1. Abrir el archivo participant.json
2. Ir hasta el final del archivo o en el lugar que se quiera pero que sea después de una '},'
3. Agregar un nuevo objeto JSON con los datos del participante: name, title y image. Ejemplo:

        {
            "name" : "Dra. Liliana Ibeth Barbosa Santillán",
            "title": "Chairperson",
            "image": "nombre-del-arhivo-imagen.png"
        }

    1. *name* describe el nombre del participante.
    2. *title* describe el puesto del participante si lo requiere, es opcional.
    3. *image* es el nombre del archivo que es la imagen que se guardo en el directorio *participants* dentro del directorio *img*. Importante poner la extensión del archivo (.png, jpg, jpeg).

        Nota es importante agregar el archivo de la imagen previamente para poder ser cargado.

4. Guardar cambios en el archivo.

Siguiendo los pasos anteriores se hacen modificaciones en el sitio web de manera automática.

## Espero que la información sea de ayuda y gracias por leer este archivo. 😃