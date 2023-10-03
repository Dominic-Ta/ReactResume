import { Link } from "react-scroll";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({ sections, title }) {
  return (
    <Navbar bg="primary" data-bs-theme="dark" fixed="top" expand="lg" className="bg-body-tertiary">
      <Link to="Home" smooth={true} duration={500} className="navbar-brand">
        {title}
      </Link>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
            {sections.map((section) => (
                <Link key={section.id} className="nav-link" to={section.id} smooth={true} duration={500} >
                    {section.text}
                </Link>
            ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;