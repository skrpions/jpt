const router = require('express').Router()
const conexion = require('./../config/conexion')

// ------ Start :: Rutas de Humedad ------//
// Get humedades
router.get('/',(req,res)=>{
    let sql = 'SELECT * FROM humedad'
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

// Get humedad x id
router.get('/:id',(req,res)=>{
    const {id} = req.params
    let sql = 'SELECT * FROM humedad where id = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{ // Obtengo 3 posibles respuestas (error, fila o archivo)
        if(err){
            throw err;
        }
        if(rows.length > 0){
            res.json(rows);
        }
        else{
            res.json({message: 'No hay resultados'});
        }
    }) 
})

// Add Humedad
router.post('/',(req, res)=> {
    // Datos: Parametros desde POST
    const{id, eng} = req.body



    let sql = `INSERT INTO humedad (id, ENG) values('${id}','${eng}')`
    conexion.query(sql, (err, rows, fields)=>{ // Obtengo 3 posibles respuestas (error, fila o archivo)
        if(err){
            throw err;
        }
        else{
            res.json({status: 'Humedad Agredada...'});
        }
    }) 

})

//eliminar 
router.delete('/:id',(req, res)=>{
    const{id} = req.params

    console.log("Id "+id);

    let sql =`delete from humedad where id = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Humedad eliminada'})
        }
    })
});


// ------ End :: Rutas de Humedad ------//


// Exportaré las rutas para usarlas desde cualquier parte del back
module.exports = router;