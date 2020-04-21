process.env.PORT = process.env.PORT ||  4000 ;
process.env.NODE_ENV = process.env.NODE_ENV || "Desarrollo"; // 
let host_db  
let user_db 
let password_db
let database_db 
let port_db


if(process.env.NODE_ENV === "Desarrollo"){ // de forma local

    host_db =  'localhost',
    user_db = 'postgres',
    password_db = 'root',
    database_db = 'pruebaapi',
    port_db = '5432'
}
else{ // de forma remota 

    host_db        =       process.env.HOST;
    user_db        =       process.env.USER;
    password_db    =       process.env.PASSWORD;
    database_db    =       process.env.DATABASE;
    port_db         =       process.env.PORT_DB;

}