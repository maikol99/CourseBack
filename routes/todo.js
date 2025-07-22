import express from "express";
import { createTodo, deleteTodo, getAllTodos, updateTodo} from "../controllers/todo.js";


//Crea un objeto router. Express permite dividir rutas en archivos separados usando express.Router().
const router = express.Router();


// cuando alguien haga una petición POST, se llamará a la función createTodo.
router.route("/").post(createTodo).get(getAllTodos)
router.route("/:todoId").put(updateTodo).delete(deleteTodo);



export default router;