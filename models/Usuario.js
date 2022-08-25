import {DataTypes} from sequelize;
import db from '../config/db.js'

//Creamos una tabla dentro de la base de datos conectada en |config/db.js|
const Usuario = db.define('usuarios',{
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN
})

export default Usuario;
