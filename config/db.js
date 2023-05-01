const mongoose = require ("mongoose");
const dotenv = require("dotenv");
dotenv.config({ silent: process.env.NODE_ENV === 'production' });


mongoose
    .connect(process.env.URI)
    .then(() => console.log("Base de datos conectada"))
    .catch((e) => console.log("Falló la conexión a la base de datos"))

