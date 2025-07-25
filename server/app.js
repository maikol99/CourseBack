import express from 'express';
import dotenv from  'dotenv';
import bodyParser from "body-parser"
import { connect } from 'mongoose';
import connectDB from './db/database.js';
import userRouter from "./routes/user.js";
import todoRouter from "./routes/todo.js";
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config();

connectDB();

//Este middleware parsea cuerpos JSON
//como el que mandás desde Postman o un frontend moderno con fetch o axios
app.use(express.json());

//parsea datos enviados como si fueran de un formulario HTML tradicional
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());


app.use("/api/v1/user", userRouter);
app.use("/api/v1/todo", todoRouter);


// http://localhost:8000/api/v1/user/
// http://localhost:8000/api/v1/todo/


const PORT = process.env.PORT || 3000;


app.listen(PORT, () =>{
    console.log(`server listen at port ${PORT}`);
})



