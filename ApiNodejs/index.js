require('./config/conexion');

const express = require('express');

const app = express();
var bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

// Admitir tipos de datos : Middlewares
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuramos el puerto
app.set('port', port)

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Start :: Importando Mis Rutas
const humedadRouters = require('./rutas/HumedadRuta.js');
const temperaturaRouters = require('./rutas/TemperaturaRuta.js');
const nivelRouters = require('./rutas/NivelRuta.js');
const indiceAmbientalRouters = require('./rutas/IndiceAmbientalRuta.js');


// Usando las Rutas
app.use('/api/humedad',humedadRouters);
app.use('/api/temperatura',temperaturaRouters);
app.use('/api/nivel',nivelRouters);
app.use('/api/indiceambiental',indiceAmbientalRouters);



// Inicio express
app.listen(app.get('port'), (error) => 
{
    if(error){
        console.log('Error al iniciar el servidor '+error);
    }
    else
    {
        console.log('Servidor iniciado en el puerto '+port);
    }
    
})

