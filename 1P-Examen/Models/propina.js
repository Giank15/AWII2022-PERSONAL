const { model, Schema } = require('mongoose');

const PropinaSchema = Schema(
    {
        idCliente:{
            type: Schema.Types.ObjectId
        },
        idMesero:{
            type: Schema.Types.ObjectId
        },
        fechaPropina:{
            type: String
        },
        horaPropina:{
            type: String
        },
        valorPropina:{
            type: String
        },
        replicated:{
            type: Boolean,
            default: false
        }
    }
);


module.exports = model('Propina', PropinaSchema );