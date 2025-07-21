import { Todo } from "../models/todo.js"

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(403).json({
        success: false,
        message: "Todos los campos son obligatorios.",
      });
    }
   const todo = new Todo({title,description});
   todo.save();

   return res.status(201).json({
    success:true,
    message:"tarea creada.",
    todo
   })
  } catch (error) {
    console.log(error);
  }
};
