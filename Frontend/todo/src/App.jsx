import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Register from "./Component/Register";
import SignIn from "./Component/SignIn";
import Home from "./Component/Home";
import Footer from "./Component/Task";
import CompleteTask from "./Component/CompleteTask";



const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/task" element={<CompleteTask/>} />
        <Route exact path="/card" element={<Footer/>} />
      </Routes>
    </>
  );
};

export default App;
