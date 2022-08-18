//Configuro base de datos
import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config({path: '.env'});

//Toma 4 datos
const db = new Sequelize(process.env.BD_NOMBRE,process.env.BD_USER,process.env.BD_PASSWORD,{
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define:{
        timestrap:true
    },
    pool:{
        max:5,
        min: 0,
        aquire: 30000,
        idle: 10000
    },
    operatorAlisases:false
});

export default db;

