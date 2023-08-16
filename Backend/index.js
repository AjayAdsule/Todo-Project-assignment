import express, { urlencoded } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import path from "path";
import { editTodo, home, newTodo, showTodo, showUser, signIn, signUp, } from "./Routes/Routes.js";

const app = express();
const port = 4000;
dotenv.config();
app.set("view engine", "ejs");
//middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), "/public")));
app.use(cors())

// mongo connection

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.error(err);
  });

//home page
app.get("/", home);

// signUp
// signIn
//show user
app.post("/user/signup", signUp);
app.post("/user/sign/in", signIn);
app.get("/api/users",showUser)

//post todo show todo and put todo
app.post("/todo/new",newTodo)
app.get("/todo",showTodo)
app.put("/todo/edit/:id",editTodo)
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
