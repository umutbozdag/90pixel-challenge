import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import styles from "./navbar.module.scss";

export default function Navi() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link href="/">
          <a className={styles.link}>MovieApp</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link href="/favorites">
              <a className={styles.link}>Favorites</a>
            </Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#">Another Nav</Nav.Link>
          <Nav.Link eventKey={2} href="#">
            Another Nav
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
