import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Particles} from "react-particles-js";
import {Events, scroller} from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css';
import './nav.css';

const scrollTo = require('scroll-to-element');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollTo: props.height,
            opacity: 0,
            width: 0,
            height: 0,
            active: true
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.navRef = React.createRef();
    }

    componentDidMount() {
        Events.scrollEvent.register("begin", function () {
            console.log("begin", arguments);
        });
        Events.scrollEvent.register("end", function () {
            console.log("end", arguments);
        });
        /*dynamically update screen dimensions*/
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        /*keep track of current scroll position*/
        window.onscroll = () => {
            const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
            if (this.state.currentScrollHeight !== newScrollHeight) {
                this.setState({currentScrollHeight: newScrollHeight})
            }
        };
    }

    /*clean up components from DOM*/
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    /*function to ensure home component screen fits to browser viewport*/
    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    /*scroll to various sections throughout the website*/
    scrollToAbout() {
        scroller.scrollTo('about-element', {
            duration: 600,
            delay: 0,
            smooth: true
        })
    }

    scrollToHome() {
        scroller.scrollTo('home-element', {
            duration: 600,
            delay: 0,
            smooth: true
        })
    }

    scrollToSkills() {
        scroller.scrollTo('skills-element', {
            duration: 600,
            delay: 0,
            smooth: true
        })
    }

    scrollToPortfolio() {
        scroller.scrollTo('portfolio-element', {
            duration: 600,
            delay: 0,
            smooth: true
        })
    }

    scrollToContact() {
        scroller.scrollTo('contact-element', {
            duration: 600,
            delay: 0,
            smooth: true
        })
    }

    /*scroll position*/
    handleScroll() {
        this.setState({scroll: window.scrollY});
    }

    updateHeight() {
        this.setState({
            height: window.innerHeight + 'px',
            scrollTo: window.innerHeight
        });
    }
    render() {
        // control opacity when scrolling
        const opacity = Math.min(100 / this.state.currentScrollHeight, 1);

        return (
            <div className="home-wrapper" style={{"height": this.state.height}}>
                <div className={this.state.currentScrollHeight >= window.innerHeight - 5 ? "header-wrapper" : ""}>
                    <header className="main">
                        <Nav className={this.state.active ? "justify-content-center" : "responsive"} activeKey="/home" ref={this.navRef}>
                            <Nav.Item>
                                <Nav.Link href="#" onClick={() => this.scrollToHome()}>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#" onClick={() => this.scrollToAbout()}>About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1" onClick={() => this.scrollToSkills()}>Skills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2"
                                          onClick={() => this.scrollToPortfolio()}>Portfolio</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1"
                                          onClick={() => this.scrollToContact()}>Contact</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="icon" onClick={() => this.setState({
                                    active: !this.state.active
                                })}>
                                    <i className="fas fa-bars"></i>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </header>
                </div>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 60,
                                "density": {
                                    "enable": true,
                                    "value_area": 1500
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "opacity": 0.02
                            },
                            "move": {
                                "direction": "right",
                                "speed": 0.05
                            },
                            "size": {
                                "value": 1
                            },
                            "opacity": {
                                "anim": {
                                    "enable": true,
                                    "speed": 1,
                                    "opacity_min": 0.05
                                }
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                }
                            },
                            "modes": {
                                "push": {
                                    "particles_nb": 1
                                }
                            }
                        },
                        "retina_detect": true
                    }}/>
                <div className="name" style={{opacity}}>
                    <h4>Hey, I'm</h4>
                    <h2 id="my-name">Talha Khokhar</h2>
                    <Button className="btn-home" variant="outline-secondary" size="lg"
                            onClick={() => this.scrollToAbout()}>View my work
                        <div className="container-button">
                            <i id="right-arrow" className="fas fa-arrow-right"></i>
                        </div>
                    </Button>
                    <div className="profile-links">
                        <a href="https://github.com/MoTalhaK" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/muhammadkh/" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.dropbox.com/s/rgj1sm0ab0clqxs/talha_khokhar_resume.pdf?dl=0"
                           target="_blank">
                            <i className="fas fa-file-pdf"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;