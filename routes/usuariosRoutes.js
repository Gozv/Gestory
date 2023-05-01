const express = require("express");
const {landing, login,registro,recuperar} = require("../controllers/usuarioControllers.js");
const metodologias = require("../controllers/acercaControllers.js")
const { tarea } = require("../controllers/gestoryControllers.js");
const { tableros } = require("../controllers/boardsControllers.js");

const router = express.Router();

//Routing 

router.get("/", landing);



//Routing | Usuario

router.get("/usuario/login", login);
router.get("/usuario/registro",registro);
router.get("/usuario/recuperar", recuperar);

//Routing | Acerca
router.get("/acerca/metodologias", metodologias);


//Routing | Projectos
router.get("/boards/tableros", tableros);

//Routing | Usuario

//Routing | Gestor de tareas
router.get("/gestory/tarea", tarea);


module.exports = router;