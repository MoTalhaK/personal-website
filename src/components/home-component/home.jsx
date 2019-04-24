import React, {Component} from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import Particles from "react-particles-js"
import 'bootstrap/dist/css/bootstrap.css';
import './home.css';
import './nav.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: props.height
        };
    }

    updateHeight() {
        this.setState({
            height: window.innerHeight + 'px'
        });
    }

    async componentDidMount() {
        window.addEventListener("resize", this.updateHeight.bind(this));
        this.updateHeight();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateHeight.bind(this));
    }

    render() {
        return (
            <div className="home-wrapper" style={{"height": this.state.height}}>
                <header className="main">
                    <Nav className="justify-content-end" activeKey="/about">
                        <Nav.Item>
                            <Nav.Link href="#about-title">About</Nav.Link>
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
                <Particles
                    params={{
                        "canvas": {
                            el: "canvas_el",
                            w: "400px",
                            h: "650px",
                        },
                        "particles": {
                            "number": {
                                "value": 60,
                                // "density": {
                                //     "enable": false,
                                //     "value_area": 800
                                // }
                            },
                            "size": {
                                "value": 3,
                            }
                            ,
                            "color": {
                                "value": "#d80a6a"
                            },
                            "line_linked": {
                                "color": "#d80a6a"
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }}/>
                <div className="name">
                    <h4>Hey, I'm</h4>
                    <h2>Muhammad Khokhar</h2>
                    <ButtonToolbar>
                        <Button variant="outline-secondary" size="lg">View my work
                            <div className="container-button">
                                <i id="right-arrow" className="fas fa-arrow-right"></i>
                            </div>
                        </Button>
                    </ButtonToolbar>
                </div>
            </div>
        )
    }
}

export default Home;