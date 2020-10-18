
#### Tabla de contenidos

[Qué puedo ver](#¿Qué-puedo-ver?)
[Fase actual del desarrollo](##Fase-actual-del-desarrollo:-Desarrollo-finalizado-🚀)
[Construido con](##Construido-con-🛠️)
[Bugs conocidos](##Bugs-conocidos)
[Scripts disponibles (funcionamiento)](##Scripts-Disponibles-(funcionamiento))

# ¿Qué puedo ver?

Reto final propuesto por el bootcamp de frontend online de GeeksHubsAcademy. Consiste en la elaboración de una webapp con react que permite obtener información detallada sobre series y películas a partir de la API de [TheMovieDB](https://developers.themoviedb.org/3/getting-started/introduction).

Se puede ver una versión operativa a través de GitHub Pages haciendo clic en el siguiente [enlace](https://diegosuarez-dev.github.io/reto4-what-can-i-watch).

## Fase actual del desarrollo: Desarrollo finalizado 🚀

La web permite obtener listados de las 10 películas o series más populares, así como realizar búsquedas por título o título original. Una vez obtenidos los resultados, se puede acceder al detalle de la serie o película deseada y ampliar información. Por si fuera poco, se tiene acceso a recomendaciones de títulos similares al consultado.

## Construido con 🛠️

React, Redux, React Router, Bootstrap y Sass.

## Bugs conocidos

### Peticiones a la API para obtener listados de géneros (solucionado)
La API de TMDB ofrece dos endpoints diferentes para obtener los listados de géneros de [películas](https://developers.themoviedb.org/3/genres/get-movie-list) y [series de televisión](https://developers.themoviedb.org/3/genres/get-tv-list), lo cual resulta muy útil para combinarlo con algunos endpoints, como por ejemplo los de las películas y series más populares. Esto es debido a que en la respuesta de la API se ofrecen ids de géneros en lugar del nombre, el cual podremos obtener al cruzarlo con las respectivas respuestas de las peticiones de listados de géneros.

Se detectó un problema al encontrar casos de series y películas en los que el id de alguno de sus géneros no figuraba en los listados correspondientes, por lo que daba error al intentar renderizarlo. Al cotejar ambos listados, se descubrió no solo que los ids que no se localizara en uno de los listados de géneros se podía localizar en el otro, sino que además el id utilizado era el mismo para series y películas (es decir, el género "drama", por ejemplo, tiene el id 18 en ambos listados). Por lo tanto, se ajustó el software para crear un listado único de géneros para series y películas, pudiendo así renderizar sin problemas los géneros de ambas.

[Ir al inicio](#Tabla-de-contenidos)

## Scripts Disponibles (funcionamiento)

En el directorio del proyecto puedes ejecutar:

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.<br />
Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se recargará si haces cambios y los guardas.<br />
También puedes ver errores en la consola.

### `npm test`

Lanza el sistema de tests en el modo de visionado interactivo.<br />
Echa un vistazo a la sección sobre [ejecutar tests](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run build`

Construye la versión de producción de la app en el directorio `build`.<br />
Esto empaqueta correctamente React en modo producción y optimiza la app para el mejor rendimiento.

El proyecto se minimiza y los nombres de ficheros incluyen los hashes.<br />
Tu app está lista para ser desplegada!

Echa un vistazo a la sección sobre [despliegue](https://facebook.github.io/create-react-app/docs/deployment) para más información.

### `npm run eject`

**Nota: esta operación es de un solo sentido. Una vez lanzas `eject`, ¡no puedes volver atrás!**

Si no estás satisfecho con la herramienta de empaquetado y las opciones de configuración, puedes utilizar `eject` en cualquier momento. Este comando eliminará la dependencia de tu proyecto.

En lugar de eso, copiará todos los ficheros de configuración y dependencias transitivas (webpack, Babel, ESLint, etc) en tu proyecto, de modo que tendrás control total sobre ellos. Todos los comandos salvo `eject` seguirán funcionando, pero apuntarán a los scripts copiados, por lo que podrás modificarlos. A partir de este momento estás solo.

No necesitas usar `eject`. La característica incluida se adapta a despliegues pequeños y medianos y no deberías sentirte obligado a usarla. Sin embargo, entendemos que esta herramienta no sería útil no pudieras configurarla cuando estés listo para ello.

[Ir al inicio](#Tabla-de-contenidos)

## Saber más

Puedes aprender más en la [Documentación Crea una Aplicación en React](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, comprueba la [Documentación de React](https://reactjs.org/).

[Ir al inicio](#Tabla-de-contenidos)