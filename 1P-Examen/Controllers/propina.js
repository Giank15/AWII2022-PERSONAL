const { response } = require('express');
const { Propina } = require('../Models');

//Metodo Create
const createPropina = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existPropina =  await Propina.findOne({name: body.name})

    if (existPropina)
    {
        return res.status(400).json({
            msg:`La propina ${ existePropina.name } ya existe`
        })
    }

    const data = {
        ...body,
        idCliente: body.idCliente,
        idMesero: body.idMesero,
        fechaPropina: body.fechaPropina,
        horaPropina: body.horaPropina,
        valorPropina: body.valorPropina
    }

    const propina = new Propina(data);

    const newPropina =  await propina.save();
    res.status(201).json(newPropina);
}

//Metodo Get
const getPropinas = async (req,res = response )=>{
    const busqueda = await Propina.find();
    res.json({
        busqueda
    })
}

//Metodo espejo
const espejoPropina = async (req,res = response )=>{
    const espejo = await Propina.find({replicated: false}).updateMany({replicated: true}).forEach((doc) => {
        db.PropinaCopia.insert(doc)
    })
    res.json({
        espejo
    })
}

module.exports ={
   createPropina,
   getPropinas,
   espejoPropina
}