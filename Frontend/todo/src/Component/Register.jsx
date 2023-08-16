import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
 const router= useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, contact, password, confirmPassword } = user;
    axios
      .post("http://localhost:4000/user/signup", {
        name,
        email,
        contact,
        password,
        confirmPassword,
      })
      .then((res) => console.log(res))
      .then(() => {
        router("/sign-in")
      })
      .catch((err) => console.error(console.error(`Error ${err}`)));
  };
  return (
    <React.Fragment>
      <Container className="d-flex mt-4 justify-content-center">
        <Card border="primary" style={{ width: "25rem" }}>
          <Card.Header>Register</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalName"
              >
                <Form.Label column sm={3}>
                  Name
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
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
                controlId="formHorizontalContact"
              >
                <Form.Label column sm={3}>
                  Contact
                </Form.Label>

                <Col sm={9}>
                  <Form.Control
                    type="text"
                    placeholder="Contact"
                    name="contact"
                    value={user.contact}
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

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPassword"
              >
                <Form.Label column sm={3}>
                  Re-enter
                </Form.Label>

                <Col sm={9}>
                  <Form.Control
                    type="password"
                    placeholder="confirm-password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <p>
                If you existing user please{" "}
                <NavLink to="/sign-in">Login</NavLink>{" "}
              </p>
              <Button type="submit">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Register;
