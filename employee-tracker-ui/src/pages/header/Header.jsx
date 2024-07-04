import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark"> { /* All boostrap components are in seafoam green */ }
      <Container>
      <Navbar.Brand to="/"><strong>Employee Management System</strong></Navbar.Brand>
      <Nav className="ml-auto">
      <NavLink as={Link} to="/" className="nav-link">Employees</NavLink>
      <NavLink as={Link} to="/employee" className="nav-link">Post Employee</NavLink>
      </Nav>
      </Container>
      </Navbar>
    </>
  )
}

export default Header;