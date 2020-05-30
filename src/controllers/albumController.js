// importamos lagunas funciones que usaremois del modulo pg, el cual nos permitira tener una conexion correcta con psql

const {Pool} = require('pg'); // Pool es un conjunto de conexiones, con lo cual nos podremos conectar a psql

const a = require('../config/config');

const pool = new Pool({          // se guarda en una constante para poder reutlizar esta conexion a psql
    host        :       a.h,
    user        :       a.u,
    password    :       a.p,
    database    :       a.d,
    port        :       a.pd
});

// const pool = new Pool({          // se guarda en una constante para poder reutlizar esta conexion a psql
//     host: 'ec2-3-211-48-92.compute-1.amazonaws.com',
//     user: 'rutrlquzrhfhkc',
//     password: '974a99e6d3baca1efeccc78dcdf127812ba5b80774c79af4f0358027fe5d10a7',
//     database: 'd6a5rc5ifr3vku',
//     port : '5432'
// });

// const pool = new Pool({          // se guarda en una constante para poder reutlizar esta conexion a psql
//     host: 'localhost',
//     user: 'postgres',
//     password: 'root',
//     database: 'pruebaapi',
//     port : '5432'
// });

// almacenaremos en funciones las peticiones que el servidor hara




const getAlbum = async (req,res) => { // para que el script sql, sea sincronico, se le pone async y su query como await
    // res.send('users');
    const response = await pool.query("SELECT * FROM album ORDER BY id_album ASC"); // como quiero que el servidor siga haciendo las demas cosas, por eso le pongo el await, ya que con eso el servidor digue haciendo las demas cosas, y cuando este prerparada el response, recien lo obtiene
    res.status(200).json(response.rows); // es opcional poner el status , mas expicaso esta en el getCancionById
    
}



const getAlbumById = async (req, res) => {
    // res.send('El id mandado es: '+ req.params.id);
    const id = req.params.id;
    const response = await pool.query("SELECT * FROM album WHERE id_album = $1", [id]); 
    res.json(response.rows); // no es necesario poner el status(200) ya que por defecto viene eso, tmb puedo asignarle el 404,400, etc
}

// const obtenerUltimoIdAlbum = async() =>{
//     const lastAlbum = await pool.query("SELECT count(id_album) FROM album");
//     return lastAlbum;
// }

// const obtenerUltimoIdCancion = async() =>{
//     const lastSong = await pool.query("SELECT count(id_cancion) FROM cancion");
//     console.log(lastSong);
//     return lastSong;
// }

// const createAlbum = async (req,res) => {
//     // id_album, id_cancion, nombre_cancion, letra_cancion, creacion_musica, creacion_letra

//     // const lastSong = obtenerUltimoIdCancion();
//     // console.log("Dentro del post");
//     // console.log(lastSong);
//     const { id_album, id_cancion, nombre_cancion, letra_cancion, creacion_musica, creacion_letra } = req.body;

//     const response = await pool.query("INSERT INTO cancion(id_album, id_cancion,  nombre_cancion, letra_cancion, creacion_musica, creacion_letra) VALUES ($1, $2, $3,$4, $5, $6)", [id_album, id_cancion , nombre_cancion, letra_cancion, creacion_musica, creacion_letra]);
   
//     // console.log(response);
//     res.send("Inserccion con exito");

//     // res.json({
//     //     message: 'Cancion agregada correctamente',
//     //     body: {
//     //         cancion : { id_album, id_cancion , nombre_cancion, letra_cancion, creacion_musica, creacion_letra }
//     //     }
//     // });
// }

// todavia no se puede USAR ya q probablemente se haga dos consultas
const deleteAlbumById = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query("DElETE FROM album WHERE id_album = $1", [id]);
    // console.log(response);
    res.json('Eliminado correctamente.')
}

// const updateAlbumById = async (req,res) =>{
//     // id_album, id_cancion, nombre_cancion, letra_cancion, creacion_musica, creacion_letra
//     // res.send('actualizar');
//     const id = req.params.id;
//     const { id_album , nombre_cancion, letra_cancion, creacion_musica, creacion_letra } = req.body;
    
//     const response = await pool.query("UPDATE cancion SET id_album = $1 , nombre_cancion = $2, letra_cancion = $3, creacion_musica = $4, creacion_letra = $5 WHERE id_cancion = $6", 
//     [id_album , nombre_cancion, letra_cancion, creacion_musica, creacion_letra, id]);

//     res.send('Actualizado correctamente el registro con id: '+id);
//     console.log(response);
    
// }

module.exports = {
    // getAlbum, getAlbumById, createAlbum ,updateAlbumById, deleteAlbumById
    getAlbum, getAlbumById, deleteAlbumById
    // getCancion, getCancionById
};