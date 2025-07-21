import express from "express";
import { createTodo} from "../controllers/todo.js";


//Crea un objeto router. Express permite dividir rutas en archivos separados usando express.Router().
const router = express.Router();


// cuando alguien haga una petición POST, se llamará a la función createTodo.
router.route("/").post(createTodo);




export default router;