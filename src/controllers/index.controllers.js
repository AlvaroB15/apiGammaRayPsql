// importamos lagunas funciones que usaremois del modulo pg, el cual nos permitira tener una conexion correcta con psql

const {Pool} = require('pg'); // Pool es un conjunto de conexiones, con lo cual nos podremos conectar a psql

const pool = new Pool({          // se guarda en una constante para poder reutlizar esta conexion a psql
    host: 'ec2-3-211-48-92.compute-1.amazonaws.com',
    user: 'rutrlquzrhfhkc',
    password: '974a99e6d3baca1efeccc78dcdf127812ba5b80774c79af4f0358027fe5d10a7',
    database: 'd6a5rc5ifr3vku',
    port : '5432'
});

// almacenaremos en funciones las peticiones que el servidor hara
const getCancion = async (req,res) => { // para que el script sql, sea sincronico, se le pone async y su query como await
    // res.send('users');
    const response = await pool.query("SELECT * FROM cancion"); // como quiero que el servidor siga haciendo las demas cosas, por eso le pongo el await, ya que con eso el servidor digue haciendo las demas cosas, y cuando este prerparada el response, recien lo obtiene
    res.status(200).json(response.rows);
    
}

const getCancionById = async (req, res) => {
    // res.send('El id mandado es: '+ req.params.id);
    const id = req.params.id;
    const response = await pool.query("SELECT * FROM cancion WHERE id_cancion = $1", [id]); 
    res.json(response.rows); // no es necesario poner el status(200) ya que por defecto viene eso, tmb puedo asignarle el 404,400, etc
}

const createCancion = async (req,res) => {
    // id_album, id_cancion, nombre_cancion, letra_cancion, creacion_musica, creacion_letra

    const { name, email } = req.body;

    const response = await pool.query("INSERT INTO users(name,email) VALUES ($1 , $2)", [name, email])
   
    console.log(response);
    // res.send("Inserccion con exito");
    res.json({
        message: 'Usuario agregado correctamente',
        body: {
            user : {id_album , nombre_cancion, letra_cancion, creacion_musica, creacion_letra}
        }
    });
}

// const deleteCancionById = async (req,res) =>{
//     const id = req.params.id;
//     const response = await pool.query("DElETE FROM users WHERE id = $1", [id]);
//     res.send('Eliminado correctamente.')
// }

const updateCancionById = async (req,res) =>{
    // id_album, id_cancion, nombre_cancion, letra_cancion, creacion_musica, creacion_letra
    // res.send('actualizar');
    const id = req.params.id;
    const { id_album , nombre_cancion, letra_cancion, creacion_musica, creacion_letra } = req.body;
    
    const response = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id_cancion = $3", 
    [id_album , nombre_cancion, letra_cancion, creacion_musica, creacion_letra]);

    console.log(response);
    res.send('Actualizado correctamente el registro con id: '+id_cancion);
}

module.exports = {
    getCancion, getCancionById, createCancion ,updateCancionById
}