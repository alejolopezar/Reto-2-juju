RETO 2 JUJU: GESTOR DE LIBROS UTILIZANDO NODE.JS
Descripción
Este proyecto consiste en un sistema de gestión de libros en línea desarrollado con Node.js. El sistema permite a los usuarios crear, editar, eliminar y consultar libros a través de una API, que interactúa con una base de datos de libros en MongoDB. La API es el núcleo del sistema, facilitando la gestión eficiente de los datos de los libros.
Requisitos Previos
Para ejecutar este proyecto, asegúrate de tener instaladas las siguientes versiones de Node.js y npm:
•	Node.js: v20.15.0
•	npm: v10.8.2
Dependencias del Proyecto
Front-end:
json
Copiar código
"devDependencies": {
    "live-server": "^1.2.2",
    "nodemon": "^3.1.7"
},
"dependencies": {
    "axios": "^1.7.7",
    "webpack": "^5.94.0",
    "webpack-cli": "^5.1.4"
}
Back-end:
json
Copiar código
"dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.6.4"
},
"devDependencies": {
    "morgan": "^1.10.0",
    "nodemon": "^3.1.4"
}
Instalación
Para clonar el repositorio de GitHub, utiliza el siguiente comando en tu terminal:
bash
Copiar código
git clone https://github.com/alejolopezar/Reto-2-juju.git
Navega hasta el directorio donde desees instalar el proyecto y ejecuta el comando anterior.
Instalación de Dependencias
Una vez clonado el repositorio, instala las dependencias ejecutando el siguiente comando en la consola:
bash
Copiar código
npm install
Esto instalará todas las dependencias necesarias tanto para el front-end como para el back-end del proyecto.
Configuración
Crea un archivo .env en la raíz del proyecto y añade las siguientes líneas de configuración:
bash
Copiar código
MONGO_URI=mongodb+srv://alejoworker:v2wUIaUxHrEmFrCs@prueba.huufa.mongodb.net/books?retryWrites=true&w=majority
JWT_SECRET=secret
Asegúrate de reemplazar los valores con los adecuados para tu entorno si es necesario.
Ejecución
Para ejecutar el proyecto, sigue estos pasos:
1.	Inicia el back-end del proyecto ejecutando el siguiente comando:
bash
Copiar código
npm start
2.	Luego, inicia el front-end con el mismo comando en su respectivo directorio.
Uso
Para interactuar con el sistema, primero debes acceder a la sección de inicio de sesión. Hay dos usuarios registrados en el sistema:
•	Usuario 1:
username: alejandro
password: 123
•	Usuario 2:
username: andrea
password: 456
Si no inicias sesión, podrás realizar únicamente búsquedas de libros. Una vez que hayas iniciado sesión, se habilitarán las solicitudes para crear, actualizar y eliminar libros.
