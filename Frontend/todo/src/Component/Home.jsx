import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import Footer from "./Footer";

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
  return (
    <React.Fragment>
      <Container className="d-flex justify-content-center">
        <Card style={{ width: "30rem" }} className="mt-4">
          <Card.Header className="text-center">Todo</Card.Header>
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
              <Button type="submit" className="mt-3 ">
                Add
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <Footer/>
    </React.Fragment>
  );
};

export default Home;
