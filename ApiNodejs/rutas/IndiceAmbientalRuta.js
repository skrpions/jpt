const router = require('express').Router()
const conexion = require('./../config/conexion')
var bodyParser = require ('body-parser')



// ------ Start :: Rutas de Indice Ambiental ------//

// Consulto todos los Indices Ambientales
router.get('/list',(req,res)=>{
    let sql = 'SELECT * FROM indiceambiental'
    conexion.query(sql,(err, rows, fields)=>{
        if(err){
            throw err;
        }
        if(rows.length > 0){ // Si hay 1 o más resultados entonces conviertalos a json
            res.json(rows);
        }
        else{
            res.json({message: 'No hay resultados'});
        }
    }) // Obtengo 3 tipos de respuestas (error, fila o archivo)
})


// Registrar Nuevo Indice Ambiental en la Base de Datos
router.post('/create', (req, res) => {

    const {indice} = req.body;
    const sql = `INSERT INTO indiceambiental ( id, indice) VALUES ('NULL', '${indice}')`;

    conexion.query(sql, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err.message);
            res.send(err);
        }
    })
});

// ------ End :: Rutas de Indice Ambiental ------//

// Exportaré las rutas para usarlas desde cualquier parte del back
module.exports = router;