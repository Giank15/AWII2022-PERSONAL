const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

//crear un modelo de mesero
const Mesero = mongoose.model("Mesero", {nombreMesero:String});

app.use(express.json());

app.get('/meseros', async(req, res) => {
    const meseros =  await Mesero.find();
    res.json(meseros);
});

app.post('/meseros', async(req, res = response)=>{
    const { ...body } =  req.body;
    const data = {
        ...body,
        nombreMesero: body.nombreMesero
    }
    const mesero = new Mesero(data);
    const nuevoMesero =  await mesero.save();
    res.status(201).json(nuevoMesero)
});

app.put('/meseros/:id', async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const updateMesero =  await Mesero.findByIdAndUpdate(id,data, {new: true} )
    res.json(updateMesero)
});

app.delete('/meseros/:id', async (req, res = response)=>{
    const {id} = req.params;
    const deleteMesero =  await Mesero.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deleteMesero)
});

module.exports= app;