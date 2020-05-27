const {Router} = require('express'); // forma de importar la funcion Router del paquete express
const router = Router(); // ejecutando la funcion

// Importamos solo la funcion que usaremos, en este caso sera getUsers, de index.controller.js
// const { getAlbum, getAlbumById, createAlbum ,updateAlbumById, deleteAlbumById }  = require('../controllers/cancionController');

const { getAlbum, getAlbumById, deleteAlbumById }  = require('../controllers/albumController')
// const { getCancion, getCancionById } = require('../controllers/index')

router.get( '/album', getAlbum);  // aqui estamos diciendo al servidor que cuando pida get, con la ruta /users, entonces hara lo de la funcion getUsers

router.get( '/album/:id' , getAlbumById); // le pongo el xx, solo para darme cuenta y recordar que no necesariamente debe ser id, y eso tambien lo cambias cundo quieras hacer las respuesta para ser ejecuta al query.

// router.put('/album/:id', updateAlbumById);


// presentando fallas

// router.post('/album', createAlbum);

router.delete('/album/:id', deleteAlbumById);




module.exports = router;