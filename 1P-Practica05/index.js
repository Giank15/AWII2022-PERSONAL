//npm init --y
//npm i express
//npm i cors
//npm i nodemon -D

//Creando servidor HTTP mediante Express
const cors = require("cors");
const express  = require("express");

const app =  express();
const PUERTO =  8080;

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )

//Servicio REST
//Route Cliente
let clientes = [];

//Función GET
app.get('/', (req,res)=>{
    res.status(200).send(
        clientes
    )
})

app.get('/:identificacion', (req,res)=>{
    const {identificacion} =  req.params;
    let result = clientes.filter(p => p.identificacion === identificacion);
    if (result.length>0)
    {
        res.status(200).send(result[0]);
    }
    res.status(404).send({
        "message":"No se puede encontrar el elemento con esa identificación!"
    });
})

//Función POST
app.post('/', (req,res)=>{
    const {body} = req;
    clientes.push(body);
    res.status(200).send({
        message:"Dato insertado correctamente",
        response: body
    })
})

//Función PUT
app.put('/', (req,res)=>{
    const {identificacion, nombre, cedula} = req.body;
    
    let cliente =  clientes.filter(p=> p.identificacion === identificacion)[0] || {}
    cliente.nombre = nombre;
    cliente.cedula = cedula;

    res.status(200).send(
        {
            message:"dato modificado correctamente",
            response: cliente
        }
    )

})

//Función DELETE
app.delete('/:identificacion', (req,res)=>{
    const {identificacion} =  req.params;
    clientes = clientes.filter(p => p.identificacion !== identificacion);
    res.status(200).send({
        response:"Se eliminó el estudiante con éxito!"
    })
})

//Ruta del puerto
//http://localhost:8080/   GET , POST, PATCH,  PUT, DELETE
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})