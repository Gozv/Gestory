import express from "express";
import path from "path";
import db from "./config/db.js";
import { fileURLToPath }  from "url";

//Recreo la funcionalidad de "Dirname"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
app.use(express.static(path.join(__dirname, 'public')));

//Habilitar Pug
app.set('view engine', 'pug')
app.set('views', './views')


//Levanto el server
const port = 3000;

app.listen(port, ()=>{
    console.log(`Levanto el server en el puerto ${port}`);
})

//Routing

app.get("/", (req,res) => {
    res.render('../views/index')
})

app.get("/usuario/login", (req,res) => {
    res.render('../views/usuario/loginpage')
})


app.get("/usuario/registro", (req,res) => {
    res.render('../views/usuario/registro')
})

app.get("/usuario/recuperar", (req,res) => {
    res.render('../views/usuario/recuperar')
})


