import React, { useEffect, useState } from "react";
import  { Row,Container, Col } from "react-bootstrap"
import axios from "axios";
import Footer from "./Footer";
const Task = () => {
  const [task, setTask] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/todo")
      .then((res) => setTask(res.data.result))
      .catch((err) => console.error(`Error ${err}`));
  }, []);
  console.log(task);
  return <React.Fragment>
    <h2 className="text-center">Todo</h2>
     <Container>
       <Row >
          {
            task && task.map((todo,index)=>{
              const {task,isCompleted,_id}=todo;
              if(!isCompleted){
                return (
                    <Col key={index}>
                      <Footer task={task} isCompleted={isCompleted} id={_id} />
                    </Col>
                )
              }
            })
          }
          </Row>
     </Container>
  </React.Fragment>;
};

export default Task;
