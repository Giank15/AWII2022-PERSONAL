const  mongoose =  require('mongoose');


const dbConnection = async ()=>{

    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect('mongodb+srv://Giank:15051709@cluster0.7uwd48c.mongodb.net/tarea?retryWrites=true&w=majority');
        console.log('Base de datos escuchando')
    }
    catch(error){
        console.log(error);
        throw new Error('Error al conectarse con la base de datos');
    }

}
module.exports = {
    dbConnection
}