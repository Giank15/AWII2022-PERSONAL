//Comandos Usados
//npm init --y
//npm i express
//npm i cors
//npm i nodemon -D
//npm i mongoose
//npm install dotenv

//Importaciones y variables
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

//Modelo de propina
const Propina = mongoose.model("Propina", {
    idCliente: String,
    idMesero: String,
    fechaPropina: String,
    horaPropina: String,
    valorPropina: String
});

//CRUD de Propinas
app.use(express.json());

app.get('/propinas', async(req, res) => {
    const propinas =  await Propina.find();
    res.json(propinas);
});

app.post('/propinas', async(req, res = response)=>{
    const { ...body } =  req.body;
    const data = {
        ...body,
        idCliente: body.idCliente,
        idMesero: body.idMesero,
        fechaPropina: body.fechaPropina,
        horaPropina: body.horaPropina,
        valorPropina: body.valorPropina
    }
    const propina = new Propina(data);
    const nuevoPropina =  await propina.save();
    res.status(201).json(nuevoPropina)
});

app.put('/propinas/:id', async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const updatePropina =  await Propina.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatePropina)
});

app.delete('/propinas/:id', async (req, res = response)=>{
    const {id} = req.params;
    const deletePropina =  await Propina.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletePropina)
});

module.exports= app;