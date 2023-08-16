import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Register from "./Component/Register";
import SignIn from "./Component/SignIn";
import Home from "./Component/Home";
import Task from "./Component/Task";
import Footer from "./Component/Footer";



const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/task" element={<Task/>} />
        <Route exact path="/card" element={<Footer/>} />
      </Routes>
    </>
  );
};

export default App;
