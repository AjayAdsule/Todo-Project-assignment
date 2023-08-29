import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TodoAppState } from "../Context/Context";

const SignIn = () => {
  const {state,dispatch}= TodoAppState();
  const router = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isLoginUser, setIsLoginUser] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    const { email, password } = user;
    e.preventDefault();
    axios
      .post("http://localhost:4000/user/sign/in", {
        email,
        password,
      })
      .then((res) => setIsLoginUser(res.data.user))
      .then(() => {
        router("/");
      })
      .catch((err) => console.error(err));
      dispatch({type:"Login", payLoad:isLoginUser})
  };

  console.log(isLoginUser);
  return (
    <React.Fragment>
      <Container className="d-flex justify-content-center">
        <Card style={{ width: "25rem" }}>
          <Card.Header>SignIn</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={3}>
                  Email
                </Form.Label>

                <Col sm={9}>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPassword"
              >
                <Form.Label column sm={3}>
                  Password
                </Form.Label>

                <Col sm={9}>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Button type="submit" >Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default SignIn;
