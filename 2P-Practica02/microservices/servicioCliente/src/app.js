const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

//crear un modelo de cliente
const Cliente = mongoose.model("Cliente", {nombreCliente:String, cedulaCliente:String});

app.use(express.json());

app.get('/clientes', async(req, res) => {
    const clientes =  await Cliente.find();
    res.json(clientes);
});

app.post('/clientes', async(req, res = response)=>{
    const { ...body } = req.body;
    const data = {
        ...body,
        nombreCliente: body.nombreCliente,
        cedulaCliente: body.cedulaCliente
    }
    const cliente = new Cliente(data);
    const nuevoCliente =  await cliente.save();
    res.status(201).json(nuevoCliente)
});

app.put('/clientes/:id', async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const updateCliente =  await Cliente.findByIdAndUpdate(id,data, {new: true} )
    res.json(updateCliente)
});

app.delete('/clientes/:id', async (req, res = response)=>{
    const {id} = req.params;
    const deleteCliente =  await Cliente.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deleteCliente)
});

module.exports= app;