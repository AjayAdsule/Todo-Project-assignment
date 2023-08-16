import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
const Header = () => {
  return (
    <React.Fragment>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Todo</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/register">SignUp / SignIn</Nav.Link>
              <Nav.Link href="/task">Task</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
