import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import Footer from "./Task";

const Home = () => {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/todo/new", {
        task: task,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/todo")
      .then((res) => {
        setTodo(res.data.result);
      })
      .catch((err) => console.error(err));
  }, [todo]);
  return (
    <React.Fragment>
      <Container className="d-flex justify-content-center">
        <Card style={{ width: "30rem",background:"#1b1b40" }} className="mt-4">
          <Card.Header className="text-center" style={{color:"white"}}>Todo</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Add Todo"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" className="mt-3" style={{background:"#8658fe"}}>
                Add
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      {
        todo && todo.map((todos,index)=>{
          const {_id,task,isCompleted}=todos;
          if(!isCompleted){

            return <Footer key={index} id={_id} task={task} isCompleted={isCompleted} />
          }
        })
      }
    </React.Fragment>
  );
};

export default Home;
