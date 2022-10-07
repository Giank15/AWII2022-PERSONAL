//Importe
import { meseros } from "./mesero.js"
import { clientes } from "./cliente.js"

//Arreglo de objetos de la entidad propina
const propinas = [
    {
        idPropina: 1,
        idMesero: 2,
        idCliente: 1,
        fechaPropina: "21/09/2022",
        horaPropina: "19:45",
        valorPropina: "5.00"
    },
    {
        idPropina: 2,
        idMesero: 5,
        idCliente: 2,
        fechaPropina: "21/09/2022",
        horaPropina: "20:10",
        valorPropina: "7.00"
    },
    {
        idPropina: 3,
        idMesero: 3,
        idCliente: 3,
        fechaPropina: "21/09/2022",
        horaPropina: "20:35",
        valorPropina: "5.00"
    },
    {
        idPropina: 4,
        idMesero: 1,
        idCliente: 4,
        fechaPropina: "22/09/2022",
        horaPropina: "20:00",
        valorPropina: "10.00"
    },
    {
        idPropina: 5,
        idMesero: 4,
        idCliente: 5,
        fechaPropina: "22/09/2022",
        horaPropina: "22:15",
        valorPropina: "7.50"
    }
]

//Exporte de arreglo
export {
    propinas
}