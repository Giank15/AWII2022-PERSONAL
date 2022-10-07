//Importe
import { clientes } from "./cliente.js";
import { propinas } from "./propina.js";

console.log(`======================================================`);

//Funcion de busqueda de uno de los elementos del arreglo con sus datos
console.log(`FUNCIONES`);
function buscarPropina(id){
    const propina = propinas.find((propina)=> propina.idPropina===id );
    if (!propina){
        const error =  new Error();
        error.message="No se encuentra una propina con dicho id...";
        throw error;
    }
    return propina;
}

function buscarCliente(id){
    const cliente =  clientes.find((cliente)=>{
        return cliente.idCliente===id;
    });
    if (!cliente)
    {
        const error = new Error();
        error.message="No encontramos al cliente...";
        throw error;
    }
    return cliente;
}

//Imprimir elemento del arreglo con sus datos
let propinaConsultada = buscarPropina(2);
let clienteConsultado = buscarCliente(propinaConsultada.idCliente)
console.log(propinaConsultada);
console.log(clienteConsultado);
console.log(``);

console.log(`======================================================`);

//Estructura Callback
console.log(`CALLBACK`);

function buscarPropinaCB(id, callback){
    const propina = propinas.find((propina)=> propina.idPropina===id );
    if (!propina)
    {
        const error =  new Error();
        error.message="No se encuentra una propina con dicho id...";
        return callback(error);
    }
    return callback(null, propina);
}

function buscarClienteCB(id, callback){
    const cliente =  clientes.find((cliente)=>{
        return cliente.idCliente===id;
    });
    if (!cliente)
    {
        const error = new Error();
        error.message="No encontramos al cliente...";
        return callback(error);
    }
    return callback(null, cliente);
}

buscarPropinaCB(3, (err,propina)=>{
    if (err){
        console.log(err.message);
        return;
    }
    buscarClienteCB( propina.idCliente , ( err, cliente )=>{
        if (err){
            return console.log(err.message);
        }
        propina.cliente = cliente; 
        delete propina.idCliente;
        console.log(propina);
    } )
})
console.log(``);

console.log(`======================================================`);

//Estructura Async/Await
console.log(`ASYNC/AWAIT`);
async function buscarPropinaAs(id){
    const propina = propinas.find((propina)=> propina.idPropina===id );
    if (!propina){
        const error =  new Error();
        error.message="No se encuentra una propina con dicho id...";
        throw error;
    }
    return propina;
}

async function buscarClienteAs(id){
    const cliente =  clientes.find((cliente)=>{
        return cliente.idCliente===id;
    });
    if (!cliente){
        const error = new Error();
        error.message="No encontramos al cliente...";
        throw error;
    }
    return cliente;
}

(async ()=>{
    try{
        const propina = await buscarPropinaAs(5);
        const cliente = await buscarClienteAs(propina.idCliente);
        propina.cliente = cliente;
        console.log(propina);
    }
    catch(err){
        console.log(err.message);
    }
}
)();