const express = require('express');

require('./config/config');

const path = require('path');

const app = express();

// Declarando el Middlewares -> se ejecutan funciones con la cua podremos porcesar los datos, entonces antes de que cargue o lleguen las rutas, se debe decir que tipo de datos se procesaran como el .json, o el que viene de los formularios (html)

app.use(express.json()); // se declara que podremos usar el tipo .json

app.use(express.urlencoded( { extended : false } ) );


// definicion de 

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(require('./routes/cancion')); // el .js se obvia, con esto estamos diciendo que vamos a usar la ruta que esta en el index
app.use(require('./routes/album'));


app.listen(process.env.PORT);
// console.log('Server en el puerto 5000');
console.log(`server en el puerto: ${process.env.PORT}`);


// console.log(process.env);