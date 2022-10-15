// npm init --y
// npm i mongoose

// mongodb+srv://Giank:15051709@cluster0.7uwd48c.mongodb.net/prueba

const mongoose = require('mongoose');

const connectionURL= "mongodb+srv://Giank:15051709@cluster0.7uwd48c.mongodb.net/prueba1?retryWrites=true&w=majority";

( async ()=>{
    try {

        //conectarse a la base de datos
        const stateConnection = await mongoose.connect(connectionURL);

        //crear un modelo de cliente
        const cliente = mongoose.model("Cliente", {nombreCliente:String, cedulaCliente:String});

        //crear modelo de mesero
        const mesero = mongoose.model("Mesero", {nombreMesero:String});

        // crear modelo de propina
        const propina =  mongoose.model("Propina", {
            fechaPropina: String,
            horaPropina: String,
            valorPropina: String,
            idMesero: { type: mongoose.Types.ObjectId , ref:"Mesero" },
            idCliente: { type: mongoose.Types.ObjectId , ref:"Cliente" }
        });

        //CRUD MESERO
        //Ingreso Mesero
        const mesero1 =  new mesero({nombreMesero:"Juancarlo Burgos1"});
        const guardarMesero = await mesero1.save();

        //Consulta Mesero
        const consultaMesero =  await mesero.findById(guardarMesero._id);
        console.log(consultaMesero);

        //Modificar Mesero
        await mesero.updateOne({_id:guardarMesero._id}, {nombreMesero:"Juancho Salmones"});

        //CRUD CLIENTE
        //Ingreso Cliente
        const cliente1 = new cliente({nombreCliente:"Joel Parraga", cedulaCliente:"1314789423"});
        const guardarCliente = await  cliente1.save();

        //Consulta Cliente
        const consultaCliente =  await cliente.findById(guardarCliente._id);
        console.log(consultaCliente);

        //Modificar Cliente
        await cliente.updateOne({_id:guardarCliente._id}, {cedulaCliente:"0918482953"});

        //CRUD PROPINA
        //Ingreso Propina
        const propina1=  new propina(
            {
                fechaPropina:"21/09/2022",
                horaPropina: "19:45",
                valorPropina: "5.00",
                idMesero: guardarMesero._id,
                idCliente: guardarCliente._id
            }
        );
        const guardarPropina =  await propina1.save();

        //Consulta Propina
        const resultado =  await propina.find()
        .populate("idMesero")
        .populate("idCliente");

        console.log(resultado[resultado.length-1])

        //Modificar Propina
        await propina.updateOne({_id:guardarPropina._id}, {valorPropina:"10.00"});
    }
    catch(error){
        console.log(error.message);       
    }
})();