import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useRecoilState } from 'recoil';
import { LoginState } from '../atom/LoginState';
import { LoginName } from '../atom/LoginName';

function Header() {

    const [show0, setShow0] = useState(false);
    const [Login, setLogin] = useState({ username: "", password: "" });
    const [auth, setAuth] = useState("");
    const [msg, setMsg] = useState("");
    const [show1, setShow1] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
    const [User, setUser] = useRecoilState(LoginName);
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
            .then((result) => result.status == 200 ? setAuth(result.result.token + "LOGINID=" + id) : setAuth(""));

    };
    const handleClose0 = () => {
        let L_username = Login.username;
        let L_password = Login.password;
        if (L_username && L_password) {
            fetchLogin(L_username, L_password);
            if (auth) {
                setShow0(false);
            } else {
                setMsg(" - 로그인 실패");
            }
        } else {
            setShow0(false);
        }


    };

    useEffect(() => {
        if (auth) {
            localStorage.setItem('token', auth);
            if (localStorage.getItem('token')) {
                setIsLoggedIn(true);
                setUser(localStorage.getItem('token').split("LOGINID=")[1]);
                setShow0(false);
            }
        }
    }, [auth]);
    const logoutHandler = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        setIsLoggedIn(false);
        setUser("");
        window.location.reload();
    };
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
                            {isLoggedIn ? <Nav.Link href="/flag">Auth</Nav.Link> : ""}
                            <Nav.Link href="/rank">Ranking</Nav.Link>
                            <Nav.Link href="/hof">Hell of Fame</Nav.Link>
                            <Nav.Link href="/mcmap">vect0r hotel</Nav.Link>
                        </Nav>
                        <Nav>
                            {isLoggedIn ? <Nav.Link > {User} </Nav.Link> : <Nav.Link onClick={handleShow0}>Enter</Nav.Link>}
                            {isLoggedIn ? <Nav.Link onClick={logoutHandler}> Logout </Nav.Link> : <Nav.Link onClick={handleShow1}> Register </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show0} onHide={handleClose0}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter {msg}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="username"
                                autoFocus
                                value={Login.username}
                                onChange={e => setLogin({ ...Login, username: e.target.value })}
                                autoComplete='off'
                            />
                            <Form.Label>password</Form.Label>
                            <Form.Control
                                type="password"
                                value={Login.password}
                                onChange={(e) => setLogin({ ...Login, password: e.target.value })}
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