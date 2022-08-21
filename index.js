//Importaciones
import express from "express";
import db from "./config/db.js";
import usuariosRoutes from "./routes/usuariosRoutes.js";


//Creo la app
const app = express();


//Conexión a base de datitos
try{ //Intenta
    await db.authenticate();
    console.log('Conexión a base de datos iniciada correctamente')
} catch(error){ //En caso de error
    console.log(error);
}


//Estaticas.
app.use(express.static('public'));

//Habilitar Ejs
app.set('view engine', 'ejs')
app.set('views', './views')


//Levanto el server
const port = 3000;

app.listen(port, ()=>{
    console.log(`Levanto el server en el puerto ${port}`);
})

//Routing ||Usamos Routes para ordenar las rutas
app.use('/', usuariosRoutes)