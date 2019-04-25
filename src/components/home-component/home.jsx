import React, {Component} from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import Particles from "react-particles-js"
import 'bootstrap/dist/css/bootstrap.css';
import './home.css';
import './nav.css';

const scrollTo = require('scroll-to-element');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: props.height,
            scrollTo: props.height
        };
    }

    updateHeight() {
        this.setState({
            height: window.innerHeight + 'px',
            scrollTo: window.innerHeight
        });
    }

    async componentDidMount() {
        window.addEventListener("resize", this.updateHeight.bind(this));
        this.updateHeight();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateHeight.bind(this));
    }

    onScrollToAbout() {
        scrollTo('#about-title', this.state.scrollTo, {
            offset: 0,
            ease: 'out-bounce',
            duration: 2000
        });
    }

    render() {
        return (
            <div className="home-wrapper" style={{"height": this.state.height}}>
                <header className="main">
                    <Nav className="justify-content-end" activeKey="/about">
                        <Nav.Item>
                            <Nav.Link href="#about-title" onClick={this.onScrollToAbout.bind(this)}>About</Nav.Link>
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
                    <Button variant="outline-secondary" size="lg" onClick={this.onScrollToAbout.bind(this)}>View my work
                        <div className="container-button">
                            <i id="right-arrow" className="fas fa-arrow-right"></i>
                        </div>
                    </Button>

                </div>
            </div>
        )
    }
}

export default Home;