const express =  require('express');
const cors = require('cors');
const { dbConnection } =  require('./Database/config');

class Server 
{
    constructor()
    {
        this.app = express.Router();
        this.router = express.Router();

        this.port = process.env.PORT;

        this.paths = {
            propina: '/propinas',
        }

        this.connectDB();
        this.routes();
        this.router.use('/examen', this.app);
        this._express = express().use(this.router);
    }

    async connectDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static('public'));
        this.app.use( '/uploads/', express.static('uploads'))

    }

    routes(){
        this.app.use(this.paths.propina, require('./Routes/propina'))
    }

    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor ejecuntando en puerto ${this.port}`)
        })
    }
}

module.exports = Server;