import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
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
            scrollTo: props.height,
            opacity: 0
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({scroll: window.scrollY});
    }

    updateHeight() {
        this.setState({
            height: window.innerHeight + 'px',
            scrollTo: window.innerHeight
        });
    }

    async componentDidMount() {
        window.onscroll = () => {
            const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
            if (this.state.currentScrollHeight != newScrollHeight) {
                this.setState({currentScrollHeight: newScrollHeight})
            }
        };

        const el = document.querySelector('div');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("resize", this.updateHeight.bind(this));
        this.updateHeight();
    }

    componentDidUpdate() {
        this.state.scroll > this.state.top ?
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateHeight.bind(this));
    }

    onScrollToAbout() {
        scrollTo('.section-container.about-component', this.state.scrollTo, {
            offset: 0,
            //align: 'middle',
            ease: 'out-bounce',
            duration: 2000
        });
    }

    onScrollToHome() {
        scrollTo('.section-container.home-component', this.state.scrollTo, {
            offset: 0,
            ease: 'out-bounce',
            duration: 2000
        });
    }

    onScrollToPortfolio() {
        scrollTo('.section-container.portfolio-component', this.state.scrollTo, {
            offset: 0,
            ease: 'out-bounce',
            duration: 2000
        });
    }

    onScrollToContact() {
        scrollTo('.section-container.contact-component', this.state.scrollTo, {
            offset: 0,
            ease: 'out-bounce',
            duration: 2000
        });
    }

    render() {
        const opacity = Math.min(100 / this.state.currentScrollHeight, 1);

        return (
            <div className="home-wrapper" style={{"height": this.state.height}}>
                <div className={this.state.scroll >= window.innerHeight - 5 ? "header-wrapper" : ""}>
                    <header className="main">
                        <Nav className="justify-content-end" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link href="#" onClick={this.onScrollToHome.bind(this)}>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#" onClick={this.onScrollToAbout.bind(this)}>About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1" onClick={this.onScrollToPortfolio.bind(this)}>Portfolio</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Skills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1" onClick={this.onScrollToContact.bind(this)}>Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </header>
                </div>
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
                <div className="name" style={{opacity}}>
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