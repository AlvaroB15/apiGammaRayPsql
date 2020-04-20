const express = require('express');

const app = express();

// Declarando el Middlewares -> se ejecutan funciones con la cua podremos porcesar los datos, entonces antes de que cargue o lleguen las rutas, se debe decir que tipo de datos se procesaran como el .json, o el que viene de los formularios (html)

app.use(express.json()); // se declara que podremos usar el tipo .json

app.use(express.urlencoded( { extended : false } ) );


// definicion de 
app.use(require('./routes/cancion')); // el .js se obvia, con esto estamos diciendo que vamos a usar la ruta que esta en el index




app.listen(4000);
console.log('Server en el puerto 4000');