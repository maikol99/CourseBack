import express from "express";
import { login, logout, register } from "../controllers/user.js";


//Crea un objeto router. Express permite dividir rutas en archivos separados usando express.Router().
const router = express.Router();


// cuando alguien haga una petición POST, se llamará a la función register.
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);


export default router;