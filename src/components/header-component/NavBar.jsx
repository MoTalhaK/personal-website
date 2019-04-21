import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import './header.css';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <header className="main">
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="#">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </header>
        )
    }
}

export default NavBar