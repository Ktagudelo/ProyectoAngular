'use strict'

//Cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');

//Ejecutar express (http)
var app = express();

//Cargar ficheros rutas
var article_routes = require('./routes/article');

//MiddLewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//Añadir prefijos a rutas / Cargar rutas
app.use('/api', article_routes);

//Ruta o metodo de prueba para el API REST
//Ejemplo1 
// app.get('/probando', function(req, res){
//     console.log('HOLA MUNDO');
// });

//Ejemplo2
// app.get('/probando', (req, res) =>{
    // var hola = req.body.hola; con el post y en el json se agrega la variable
    // return res.status(200).send({

      // curso: 'Master en Framework JS',
      // autor: 'Victor Robles WEB',
      // url: 'visctorroblesweb.es'
      
    // console.log('HOLA MUNDO');
    
    // return res.status(200).send(
        
    // `   <ul>
    //         <li>NodeJS</li>
    //         <li>Angular</li>
    //         <li>React</li>
    //         <li>Vue</li>
    //     </ul>
    // `
    
    // });
    
// });


//Exportar modulo (fichero actual)
module.exports = app; //Utiliza fichero fuera