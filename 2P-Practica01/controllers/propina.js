const { response } = require('express');
const { Propina } = require('../models');

//Metodo Get
const getPropinas = async(req, res = response )=>{
    //GET http://localhost:3000/products   ?limit=100?since=1
    const propina =  await Propina.find();
    res.json(propina);
    /*const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };
    const [ sum, propinas ] = await Promise.all([
        Propina.countDocuments(query),
        Propina.find(query)
        .skip(Number(since))
        .limit(Number(limit))
    ])
  
    res.json({
      sum, 
      propinas
    })*/
}

const getPropina = async(req, res = response)=>{
    const {id} = req.params
    const propina =  await Propina.findById(id);
    res.json(propina);
}

//Metodo Create
const createPropina = async(req, res = response)=>{
    const { status, user, ...body } =  req.body;

    const data = {
        ...body,
        idCliente: body.idCliente,
        idMesero: body.idMesero,
        fechaPropina: body.fechaPropina,
        horaPropina: body.horaPropina,
        valorPropina: body.valorPropina
    }

    const propina = new Propina(data);

    const nuevaPropina =  await propina.save();
    res.status(201).json(nuevaPropina);
}

//Metodo Update
const updatePropina = async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const updatedPropina =  await Propina.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedPropina);
}

//Metodo Delete
const deletePropina = async (req, res = response)=>{
    const {id} = req.params;
    const deletedPropina =  await Propina.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedPropina);
}

module.exports = {
    getPropina,
    getPropinas,
    createPropina,
    updatePropina,
    deletePropina
};