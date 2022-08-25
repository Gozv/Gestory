import express from "express";
import {landing, login,registro,recuperar} from "../controllers/usuarioControllers.js"
import { metodologias } from "../controllers/acercaControllers.js";

const router = express.Router();

//Routing 

router.get("/", landing)

//Routing | Usuario

router.get("/usuario/login", login)
router.get("/usuario/registro",registro)
router.get("/usuario/recuperar", recuperar)

//Routing | Acerca
router.get("/acerca/metodologias", metodologias)


//Routing | Projectos

//Routing | Usuario



export default router;