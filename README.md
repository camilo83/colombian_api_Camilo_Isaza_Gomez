##PRUEBA TÉCNICA

Challenge - Creangel
Challenge - Creangel
Definición del problema
Parte 1. Datos para la prueba
Parte 2. Procesamiento de datos
Parte 3. Visualización
Parte 4. Documentación
Parte 5. Entrega y Extras
Tecnologías
Es normal en Creangel enfrentarse a desafíos de los que no sabemos mucho o a veces nada. Esta
prueba tiene como objetivo presentar un reto similar en el que las/los ingenieros tienen que
investigar una solución e implementarla en un periodo corto de tiempo. Ésta prueba también te sirve
cómo candidato para saber si es un trabajo que te va a gustar o no.
Definición del problema
Realizar un tablero (dashboard) empleando datos de API públicas y librerías de visualización.

1. Datos de la prueba
   Empleando el servicio web API Colombia debe realizar consulta sobre las siguientes tres
   entidades:
   a. Presidentes (President)
   b. Aeropuertos (Airport)
   c. Atracciones turísticas (TouristicAttraction)
   El enlace del servicio web es https://api-colombia.com/
2. Procesamiento
   Realizar una función por cada una de las siguientes consultas:
   Antes de iniciar recuerda
   Si vas a poner el código en un repositorio público, no uses el
   nombre de Creangel en ninguna parte.
   Este es un reto de aprendizaje y no esperamos que conozcas las
   tecnologías necesarias para resolverlas. Esperamos que puedas
   aprender y aplicar.
   a. Realizar agrupamiento sobre la entidad Presidentes según el partido político.
   Devolver una estructura de datos (array de objetos u objeto de objetos), con la lista
   de partidos políticos y que esté ordenada descendentemente por el conteo de
   presidentes electos.
   b. Realizar agrupamiento sobre la entidad Atracciones Turísticas por departamento y
   ciudad. Devolver una estructura de datos(array de objetos u objeto de objetos), con
   los valores de los campos correspondientes y el conteo de las atracciones turísticas.
   c. Realizar agrupamiento sobre la entidad Aeropuertos por departamento y ciudad.
   Devolver una estructura de datos (array de objetos u objeto de objetos), con los
   valores de los campos correspondientes y el conteo de los aeropuertos.
   d. Realizar agrupamiento de la entidad Aeropuertos por Región, Departamento,
   Ciudad y Tipo. Devolver una estructura de datos con los valores de los campos
   correspondientes y el conteo de los aeropuertos. A continuación, se expone una
   visualización de dicho agrupamiento.
   A partir de este agrupamiento, generar otra estructura de datos de salida con el
   siguiente formato:
   {
   "region": {
   "andina": {
   "departamento": {
   "bogota": {
   "ciudad":{
   "bogota": {
   "tipo":{
   "militar": 1,
   "nacional": 1
   }
   }
   }
   },
   "cundinamarca": {
   "ciudad":{
   "madrid": {
   "tipo":{
   "nacional": 1
   }
   },
   "guaimaral": {
   "typo":{
   "militar": 1
   }
   }
   }
   },
   "caldas": {
   "ciudad":{
   "manizales": {
   "tipo":{
   "nacional": 1
   }
   },
   "palestina": {
   "tipo":{
   "nacional": 1
   }
   }
   }

}
}
},
"caribe": {
"departamento": {
"cordoba": {
"ciudad":{
"monterial": {
"tipo":{
"nacional": 1
}

}
}
},
"magdalena": {
"ciudad":{
"santa marta": {
"tipo":{
"internacional": 1,
"nacional": 1
}
}
}
},
"sucre": {
"ciudad":{
"sincelejo": {
"tipo":{
"nacional": 1
}
}
}
}
}
},
.....
}
} 3. Visualización
a. Crear una aplicación en React.
b. La aplicación tendrá una única ruta con el nombre `/colombia_dash`.
c. En la ruta se debe presentar un componente tipo Tab que permita seleccionar la
vista de cada una de las entidades enunciadas en el ítem 1. Datos de la prueba. Un
ejemplo del componente tipo Tab se muestra a continuación.
d. Cada una de las vistas de las entidades debe mostrar:
• Un componente que exponga la cantidad de registros existentes por cada
entidad.
• Un componente con todos los registros de cada entidad.
• Un componente por cada una de las funciones solicitadas en cada entidad del
ítem 2. Procesamiento.
• En el caso del numeral d del ítem 2. Procesamiento, el componente debe
mostrar la visualización de la estructura de datos final.
• Un componente que muestre el tiempo de respuesta de la solicitud a la API (al
solicitar los datos de cada entidad).
Nota: el diseño de la visualización cada componente queda abierto al criterio del
participante.
Bonus: cualquier funcionalidad extra será considerada como un plus, se tomará en
cuenta features relacionadas con experiencia de usuario y responsive. Se pueden
agregar controles para cambiar el orden de los datos procesados (ascendente y
descendente por nombre y conteo). Adicionalmente se puede agregar estadísticas
que considere relevantes a partir de los datos obtenidos por cada entidad. 4. Documentación
a. En la raíz del proyecto debe crear un archivo tipo markdown o readme donde
indique los aspectos básicos de su proyecto y la forma de despliegue e inicialización. 5. Entrega y Extras
a. Para La entrega de la prueba debe crear un repositorio en github y compartir el
enlace. El nombre del repositorio debe tener el siguiente formato
colombian*api*<tu nombre aquí>
b. EXTRA: Dockerizar la aplicación, puede hacerlo utilizando un archivo \*.sh o con un
guión de Docker-compose.
Tecnologías
a. Lenguaje: JavaScript
b. Framework: ReactJS
c. CSS: construye el estilo de los componentes según tu criterio. No utilizar frameworks ni
librerías de CSS.
d. No integrar librerías o plugins adicionales a los indicados. (No jquery ni otros frameworks
para manejo de elementos html por identificador).
Queremos saber hasta dónde puedes llegar en esta prueba. No es necesario que la termines para
entregarla. Lo que realmente valoramos es el esfuerzo que pongas en resolver los desafíos y la
manera en que abordas cada problema. ¡Tu dedicación y enfoque son lo que más nos importa!
Muchos éxitos!
