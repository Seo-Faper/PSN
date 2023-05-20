import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">PSN</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/problem">Problem Set</Nav.Link>
                        <Nav.Link href="/rank">Ranking</Nav.Link>
                        <Nav.Link href="/hof">Hell of Fame</Nav.Link>
                        <NavDropdown title="Projects" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Vect0r Hotel 2th</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Cq tier list
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://seo-faper.github.io/HashBr0wn/" target="_blank" rel="noreferrer noopener" >get Hash</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Berlekamp project
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Enter</Nav.Link>
                        <Nav.Link eventKey={2} href="/register">
                            Register
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;