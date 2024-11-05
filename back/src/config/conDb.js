require("dotenv").config();

const mongoose = require("mongoose");


const conDb = async () => {
    // Acá se hace la conexión a la BDD con la URL de MongoDB
    // URL 
    mongoose.connect(process.env.MONGO_URI);
};


module.exports =  conDb;

