export interface Propina {
    _id?:    string;
    status?: boolean;
    idCliente: string;
    idMesero: string;
    fechaPropina: string;
    horaPropina: string;
    valorPropina: string;
    category?:  number;
    __v?:    number;
}