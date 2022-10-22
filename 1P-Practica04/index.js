// npm init --y
// npm i express
// npm i cors
// npm i nodemon -D

//Archivos HTML por entidad que serviran de páginas sencillas
const path = require("path");
const urlIndex = path.join(__dirname,"./pages/index.html");
const urlCliente = path.join(__dirname,"./pages/cliente.html");
const urlMesero = path.join(__dirname,"./pages/mesero.html");
const urlPropina = path.join(__dirname,"./pages/propina.html");
const urlError = path.join(__dirname,"./pages/error.html");

//Creando servidor HTTP mediante Express
const express = require("express");
const cors =  require("cors");

const PUERTO = 8080;

const server =  express();

server.use(cors()).use(express.json())

//Rutas GET
//Ruta Index
function functionIndex (req, res){
    res.status(200).sendFile(urlIndex);
}
server.get('/', functionIndex)

//Ruta Cliente
server.get('/cliente', (req,res)=>{
    res.status(200).sendFile(urlCliente);
    //res.status(200).send({
    //    response:"Pagina de cliente cargada..."
    //})
})

//Ruta Mesero
server.get('/mesero', (req,res)=>{
    res.status(200).sendFile(urlMesero);
    //res.status(200).send({
    //    response:"Pagina de mesero cargada..."
    //})
})

//Ruta Propina
server.get('/propina', (req,res)=>{
    res.status(200).sendFile(urlPropina);
    //res.status(200).send({
    //    response:"Pagina de propina cargada..."
    //})
})

//Rutas de error
server.get('/test',(req,res)=>{
    res.status(200).json({
        'message':'Problem with application web!!!!!!!!!'
    })
})
server.use((req,res, next)=>{
    res.status(400).sendFile(urlError);
})


server.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo http://localhost:${PUERTO}`);
})