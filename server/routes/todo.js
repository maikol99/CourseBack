import express from "express";
import { createTodo, deleteTodo, getAllTodos, updateTodo} from "../controllers/todo.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

//Crea un objeto router. Express permite dividir rutas en archivos separados usando express.Router().
const router = express.Router();


// cuando alguien haga una petición POST, se llamará a la función createTodo.
router.route("/").post(isAuthenticated, createTodo).get(getAllTodos);
router
  .route("/:todoId")
  .put(isAuthenticated, updateTodo)
  .delete(isAuthenticated, deleteTodo);



export default router; 