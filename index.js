const express = require("express");
const path = require("path")

//Creo la app
const app = express();


//Estaticas.
app.use(express.static(path.join(__dirname, 'public')));


//Levanto el server
const port = 3000;

app.listen(port, ()=>{
    console.log(`Levanto el server en el puerto ${port}`);
})

//Routing

app.get("/", (req,res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/usuario/login", (req,res) => {
    res.sendFile(__dirname + '/views/usuario/loginpage.html')
})


app.get("/usuario/registro", (req,res) => {
    res.sendFile(__dirname + '/views/usuario/registro.html')
})

app.get("/usuario/recuperar", (req,res) => {
    res.sendFile(__dirname + '/views/usuario/recuperar.html')
})


