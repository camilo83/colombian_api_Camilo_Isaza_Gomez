# Prueba Técnica: React Application

## Descripción del Proyecto

Este proyecto es una prueba técnica que utiliza conceptos básicos y avanzados de desarrollo frontend, específicamente con React. La aplicación consume datos de varias APIs públicas, utilizando Redux para optimizar el rendimiento y mejorar la experiencia del usuario mediante el manejo de estados globales.

## Estructura del Proyecto

### Flujo de la Aplicación

1. **Inicio (`index.html`)**: Este es el punto de entrada de la aplicación. Aquí se hace referencia al componente principal (`Main`), y se definen aspectos importantes de SEO, como el nombre del sitio web y los metadatos.
2. **`Main.tsx`**: Instancia el componente `App`.
3. **`App.tsx`**: Contiene la configuración del enrutador (`Router`), que controla las rutas de la aplicación, como `/colombia_dash/`.
4. **Páginas**:
   - **HomePage**: Contiene un botón que redirige al Dashboard.
   - **Dashboard**: Es donde se muestra la mayor parte del contenido y la lógica de la aplicación.

### Scaffolding

La estructura del proyecto dentro de la carpeta `src` está organizada de la siguiente manera:

1. **`store`**:
   - Contiene la configuración de Redux para el manejo de estados globales, lo que mejora el rendimiento al evitar recálculos innecesarios.
2. **`utils`**:

   - Contiene utilidades como `constants.ts`, donde se definen las configuraciones de la API y los endpoints:
     - President
     - Airport
     - Touristic Attraction
     - Region
     - Department

3. **`model`**:

   - Define los modelos de datos que representan la estructura de las entidades obtenidas de la API. Se limitan a los campos necesarios para cada entidad, optimizando el rendimiento.

4. **`services`**:

   - Contiene los repositorios (`repos`) que manejan la lógica de acceso a datos para cada endpoint. En particular, para `Region` y `Department`, se utilizan repos adicionales para obtener nombres a partir de IDs.

5. **`hooks`**:

   - Implementa hooks personalizados para centralizar y reutilizar la lógica de obtención de datos en diferentes componentes.

6. **`pages`**:

   - Contiene las páginas principales de la aplicación, como `HomePage` y `Dashboard`.

7. **`functions`**:

   - Aquí se implementan las funciones necesarias para agrupar y procesar los datos según lo requerido en la prueba. Cada función se encuentra en su propio archivo para mantener una buena organización y separación de responsabilidades.

8. **`components`**:

   - Contiene los componentes reutilizables que conforman la interfaz de usuario. Cada entidad tiene su propio componente, además de componentes secundarios como `RecordCounter`, `AllRecords`, `InfoSummary`, y `Banner`.

9. **`redux`**:
   - Aquí se maneja la lógica de estado global con Redux, optimizando la eficiencia de la aplicación. Se evita recalcular datos ya procesados, almacenándolos en el estado global. Esto es especialmente útil para datos que requieren múltiples llamadas a la API, como la búsqueda de nombres de departamentos y regiones por ID.

## Pruebas

Al inicio del desarrollo, se realizaron pruebas unitarias básicas. Sin embargo, durante la fase de implementación de funcionalidades más avanzadas y la integración con la API, el enfoque en las pruebas se redujo debido a limitaciones de tiempo. A pesar de esto, la aplicación sigue una estructura que facilita la realización de pruebas adicionales en el futuro.

## Despliegue

Este repositorio incluye todos los archivos necesarios para el despliegue de la aplicación. El compilador utilizado es Vite.

### Instrucciones de Despliegue

1. Instalar las dependencias:

   npm install

2. Abrir en el navegador:

   npm run dev

## ¿Qué sigue?

### Mejoras de Diseño y Experiencia de Usuario

El próximo paso lógico para este proyecto es mejorar el diseño de la interfaz para ofrecer una mejor experiencia de usuario. Aunque la funcionalidad principal está implementada y el rendimiento ha sido optimizado mediante el uso de Redux, hay varias áreas donde el diseño podría mejorarse para hacer la aplicación más atractiva y fácil de usar.

Algunas de las posibles mejoras incluyen:

1. **Mejorar la Estética Visual**:

   - Implementar un sistema de diseño más coherente con una paleta de colores mejor definida.
   - Introducir una tipografía más moderna y legible.
   - Añadir transiciones y animaciones sutiles para mejorar la interacción del usuario.

2. **Hacer la Aplicación Más Responsiva**:

   - Revisar y mejorar la disposición de los elementos para asegurar que se vean bien en todos los tamaños de pantalla, desde dispositivos móviles hasta pantallas grandes.
   - Optimizar las tablas y listas para que se adapten mejor en pantallas pequeñas.

3. **Mejorar la Navegación**:

   - Añadir menús desplegables o una barra lateral que facilite el acceso a las diferentes secciones de la aplicación.
   - Implementar breadcrumbs o indicaciones visuales para que el usuario sepa en qué parte de la aplicación se encuentra.

4. **Accesibilidad**:

   - Revisar los contrastes de color para asegurar que sean accesibles para personas con discapacidades visuales.
   - Añadir soporte para navegación por teclado y mejorar la compatibilidad con lectores de pantalla.

5. **Optimización de la Carga de Datos**:
   - Implementar un sistema de carga diferida (lazy loading) para los componentes que no son necesarios inmediatamente, mejorando así el rendimiento inicial de la aplicación.

Estas mejoras ayudarían a transformar la aplicación en una herramienta no solo funcional, sino también agradable de usar, lo que podría aumentar la satisfacción del usuario y la efectividad general de la aplicación.
