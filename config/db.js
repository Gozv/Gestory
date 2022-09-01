 import mongoose from "mongoose"; 


const URI = 'mongodb+srv://jesus2630:HR82fmBFzXGtJgjw@cluster0.cth9r9b.mongodb.net/Gestory-Project'

mongoose
    .connect(URI)
    .then(() => console.log("Base de datos conectada"))
    .catch((e) => console.log("Falló la conexión a la base de datos"))