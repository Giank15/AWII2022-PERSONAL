//Comandos Usados
//npm init --y
//npm i express
//npm i cors
//npm i nodemon -D
//npm i mongoose
//npm install dotenv

require('dotenv').config();
const Server = require('./server');


const server = new Server();


server.listen();