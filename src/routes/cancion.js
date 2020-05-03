const {Router} = require('express'); // forma de importar la funcion Router del paquete express
const router = Router(); // ejecutando la funcion

// Importamos solo la funcion que usaremos, en este caso sera getUsers, de index.controller.js
const { getCancion, getCancionById, createCancion ,updateCancionById, deleteCancionById }  = require('../controllers/index')
// const { getCancion, getCancionById } = require('../controllers/index')

router.get( '/cancion', getCancion);  // aqui estamos diciendo al servidor que cuando pida get, con la ruta /users, entonces hara lo de la funcion getUsers

router.get( '/cancion/:id' , getCancionById); // le pongo el xx, solo para darme cuenta y recordar que no necesariamente debe ser id, y eso tambien lo cambias cundo quieras hacer las respuesta para ser ejecuta al query.

router.put('/cancion/:id', updateCancionById);


// presentando fallas

router.post('/cancion', createCancion);

router.delete('/cancion/:id', deleteCancionById);




module.exports = router;