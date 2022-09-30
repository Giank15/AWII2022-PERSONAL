//Importe
import { meseros } from "./mesero.js";
import { clientes } from "./cliente.js";
import { propinas } from "./propina.js";

console.log(`======================================================`);
console.log(``);

//Presentación de datos del arreglo mesero
let i = 0;
while (i<meseros.length){
    console.log(`===MESEROS===`);
    console.log(`ID meseros: ${meseros[i].idMesero}`);
    console.log(`Nombre del mesero: ${meseros[i].nombreMesero}`);
    console.log(``);
    i++;
};

console.log(`======================================================`);
console.log(``);

//Presentación de datos del arreglo cliente
let j = 0;
do{
    console.log(`===CLIENTE===`);
    console.log(`ID cliente: ${clientes[j].idCliente}`);
    console.log(`Nombre del cliente: ${clientes[j].nombreCliente}`);
    console.log(`Cédula del cliente: ${clientes[j].cedulaCliente}`);
    console.log(``);
    j++;
}
while(j<clientes.length);

console.log(`======================================================`);
console.log(``);

//Presentación de datos del arreglo propina
for(let k=0; k<propinas.length; k++){
    console.log(`===PROPINA===`);
    console.log(`ID propina: ${propinas[k].idPropina}`);
    console.log(`ID mesero: ${propinas[k].idMesero}`);
    console.log(`ID cliente: ${propinas[k].idCliente}`);
    console.log(`Fecha: ${propinas[k].fechaPropina} - Hora: ${propinas[k].horaPropina}`);
    console.log(`Valor de la propina: ${propinas[k].valorPropina}`);
    console.log(``);
};