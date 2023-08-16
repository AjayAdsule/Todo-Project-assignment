import React, { useEffect, useState } from "react";
import  { Container} from "react-bootstrap"
import axios from "axios";
import Footer from "./Task";
const CompleteTask = () => {
  const [task, setTask] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/todo")
      .then((res) => setTask(res.data.result))
      .catch((err) => console.error(`Error ${err}`));
  }, []);
  console.log(task);
  return <React.Fragment>
    <h2 className="text-center">Completed Todo</h2>
     <Container>
       
          {
            task && task.map((todo,index)=>{
              const {task,isCompleted,_id}=todo;
              if(isCompleted){
                return (
                    
                      <Footer task={task} isCompleted={isCompleted} id={_id} key={index}/>
                   
                )
              }
            })
          }
    
     </Container>
  </React.Fragment>;
};

export default CompleteTask;
