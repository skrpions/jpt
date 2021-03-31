const router = require('express').Router()
const conexion = require('./../config/conexion')

// ------ Start :: Rutas de Nivel ------//
// Get Niveles
router.get('/',(req,res)=>{
    let sql = 'SELECT * FROM nivel'
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

// ------ End :: Rutas de Niveles ------//


// Exportaré las rutas para usarlas desde cualquier parte del back
module.exports = router;