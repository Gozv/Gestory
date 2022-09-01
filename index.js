//Importaciones
import express from "express";
import usuariosRoutes from "./routes/usuariosRoutes.js";
import ("./config/db.js")

//Creo la app
const app = express();



//Estaticas.
app.use(express.static('public'));

//Habilitar Ejs
app.set('view engine', 'ejs')
app.set('views', './views')


//Levanto el server
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Levanto el server en el puerto ${port}`);
})

//Routing ||Usamos Routes para ordenar las rutas
app.use('/', usuariosRoutes)