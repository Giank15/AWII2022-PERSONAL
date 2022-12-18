const express =  require('express');
const cors = require('cors');

const { dbConnection } =  require('./database/config');

class Server 
{
    constructor(){
        this.app = express.Router();
        this.router = express.Router();

        this.port = 5000;

        this.paths = {
            propinas: '/api/propina'
        }

        this.connectDB();
        //this.middlewares();
        this.routes();
        this.router.use('/v1/reportes', this.app);
        this._express = express().use(this.router);
    }
    
    async connectDB(){
        await dbConnection();
    }

    /*middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static('public'));
        this.app.use( '/uploads/', express.static('uploads'))
    }*/
    routes(){
        this.app.use(this.paths.propinas, require('./routes/propina'))
    }

    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor ejecuntando en puerto ${this.port}`)
        })
    }
}

module.exports = Server;