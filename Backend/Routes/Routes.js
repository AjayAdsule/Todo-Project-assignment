import users from "./../Modal/Users.js";
import todo from "./../Modal/Todo.js"
import bcrypt from "bcrypt";
import jsonWebToken from "jsonwebtoken";

const jwt = jsonWebToken;
const SECRET_KEY = "TODOAPP";
export const home = (req, res) => {
  res.render("layout/home");
};

//signup
export const signUp = async (req, res) => {
  const { name, email, contact, password, confirm_password } = req.body;
  try {
    // check if user is already exists
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "user already exist" });
    }
    //hashed password
    const hashedPassword = await bcrypt.hash(password, 10);
    //user creation
    const result = new users({
      name: name,
      email: email,
      password: hashedPassword,
      contact,
    });
    await result.save();
    // token generation
    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(200).json({ user: result, token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something Went wrong" });
  }
};

// login
export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    //check is user is present if not sent message user not found please register
    const existingUser = await users.findOne({ email });
    if (!existingUser) {
      res.status(404).json({ message: "user not found please register" });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(500).json({ message: "password not match" });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      SECRET_KEY
    );
    res.status(200).json({ user: existingUser, token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

// show all register user api

export const showUser = async (req, res) => {
  const user = await users.find();
  res.status(200).json({ user });
};

// create todo
export const newTodo=async(req,res)=>{
  const {task}=req.body
  const result=await todo.create({
    task
    
  })
  
  res.status(200).json({success:true,result})
}
// show todo
export const showTodo=async(req,res)=>{
  const result=await todo.find();
  res.status(200).json({success:true,result});
}

// edit todo
export const editTodo=async (req,res)=>{
  const {task}=req.body
    const Todo=await todo.findByIdAndUpdate(req.params.id,{
      task
    })
    res.status(201).json({success:true,Todo})
}