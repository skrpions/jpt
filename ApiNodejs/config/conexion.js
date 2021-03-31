
const mysql = require('mysql');
const conexion = mysql.createConnection({
    host : 'localhost', // host Remoto : remotemysql.com
    user: 'root',       // user Remoto : P5iLVnApUF
    password: '',       // password Remota: 05smcB5EX1
    port: 3306,         // Puerto Remoto : 3306
    database: 'quiz'    // database Remota : P5iLVnApUF
});

conexion.connect((err)=>{
    if(err){
        console.log('Ha ucurrido un error '+err);
    }
    else
    {
        console.log('La base de datos se conectó!');
    }
});
  
module.exports = conexion;

