const { model, Schema } = require('mongoose');

const PropinaSchema = Schema(
    {
        idCliente:{
            type: String
        },
        idMesero:{
            type: String
        },
        fechaPropina:{
            type: String
        },
        horaPropina:{
            type: String
        },
        valorPropina:{
            type: String
        }
    }
);

PropinaSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Propina', PropinaSchema );