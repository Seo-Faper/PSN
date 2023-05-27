import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function Header() {

    const [show0, setShow0] = useState(false);
    const [LoginState, setLoginState] = useState({ username: "", password: "" });

    const [show1, setShow1] = useState(false);

    const [userAuth, setUserAuth] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const fetchLogin = (id, pw) => {

        fetch("/api/v1/users/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: id,
                password: pw,
            }),
        })
            .then((response) => response.json())
            .then((result) => result.status == 200 ? setUserAuth(result.result.token) : setUserAuth(""));

        //console.log(userAuth);

    };
    const handleClose0 = () => {
        let L_username = LoginState.username;
        let L_password = LoginState.password;
        if (L_username && L_password.length) {
            fetchLogin(L_username, L_password);
            if (userAuth.length != 0 && userAuth === localStorage.getItem('authTokens')) {

                setIsLogin(true);
                setShow0(false);
            }
        } else {
            setShow0(false);
        }



    };
    useEffect(() => {
        //console.log(userAuth);

        if (userAuth.length != 0) {

            localStorage.setItem('authTokens', userAuth);
            setShow0(false);
        }


    }, [userAuth]);
    useEffect(() => {

        if (userAuth.length != 0 && userAuth === localStorage.getItem('authTokens')) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
        //console.log(isLogin);
    }, [isLogin]);
    const handleShow0 = () => setShow0(true);


    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    return (
        <>
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
                            <Nav.Link onClick={handleShow0}>Enter</Nav.Link>
                            <Nav.Link onClick={handleShow1}> Register </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show0} onHide={handleClose0}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="username"
                                autoFocus
                                value={LoginState.username}
                                onChange={e => setLoginState({ ...LoginState, username: e.target.value })}
                                autoComplete='off'
                            />
                            <Form.Label>password</Form.Label>
                            <Form.Control
                                type="password"
                                value={LoginState.password}
                                onChange={(e) => setLoginState({ ...LoginState, password: e.target.value })}
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={handleClose0} >
                        Enter
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>아이디</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="username"
                                autoFocus
                                autoComplete='off'
                                required
                            />
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control
                                type="password"
                            />
                            <Form.Label>비밀번호 재확인</Form.Label>
                            <Form.Control
                                type="password"
                            />
                            <Form.Label>이메일</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="your@email.com"
                                autoComplete='off'
                            />
                        </Form.Group>
                        {/* <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>한줄 소개</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="간단하게 나를 표현하자면?"
                                autoFocus

                            />
                        </Form.Group> */}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose1}>
                        Register
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Header;