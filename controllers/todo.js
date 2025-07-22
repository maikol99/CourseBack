import { Todo } from "../models/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(403).json({
        success: false,
        message: "Todos los campos son obligatorios.",
      });
    }
    const todo = new Todo({ title, description });
    todo.save();

    return res.status(201).json({
      success: true,
      message: "tarea creada.",
      todo,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const { title } = req.body;
    console.log(title);
    //const todo = await Todo.findById(todoId)

    const todo = await Todo.findByIdAndUpdate(todoId, { title }, { new: true });
    await todo.save();

    return res.status(200).json({
      success: true,
      todo,
      message: "Tarea Actualizada",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    await Todo.findByIdAndDelete(todoId);
    return res.status(200).json({
      success: true,
      message: "Tarea eliminada",
    });
  } catch (error) {
    console.log(error);
  }
};
