import React, {Component} from 'react';
import {Image, Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import {Container, Row, Col} from 'react-bootstrap';
import AOS from 'aos';
import './portfolio.css';
import 'aos/dist/aos.css';
import './project-links.css';

/*image imports*/
import spellsword from '../../images/spellsword.PNG';
import starrysky from '../../images/starrysky.png';
import personal_site from '../../images/personal_website.png';
import oefen from '../../images/oefen.png';
import k_means10 from '../../images/10_means_max.png';
import defect_prediction from '../../images/defect_prediction.PNG';

AOS.init();

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            isHovering: false,
            showMessage1: false,
            showMessage2: false,
            showMessage3: false,
            showMessage4: false,
            showMessage5: false,
            showMessage6: false,
            show: false
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    handleShow(e) {
        e.preventDefault();
        this.setState({show: true})
    }

    /*change state when user clicks outside of the modal or clicks the "close" button*/
    handleClose() {
        this.setState({
            showMessage1: false,
            showMessage2: false,
            showMessage3: false,
            showMessage4: false,
            showMessage5: false,
            showMessage6: false
        })
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    /*handle modal dialogs when user clicks on a project*/
    onClickHandler(e, name) {
        e.preventDefault();
        // console.log(name);
        switch (name) {
            case "showMessage1":
                this.setState({
                    showMessage1: !this.state.showMessage1,
                });
                break;
            case "showMessage2":
                this.setState({
                    showMessage2: !this.state.showMessage2,
                });
                break;
            case "showMessage3":
                this.setState({
                    showMessage3: !this.state.showMessage3,
                });
                break;
            case "showMessage4":
                this.setState({
                    showMessage4: !this.state.showMessage4,
                });
                break;
            case "showMessage5":
                this.setState({
                    showMessage5: !this.state.showMessage5,
                });
                break;
            case "showMessage6":
                this.setState({
                    showMessage6: !this.state.showMessage6,
                });
                break;
            default:
                return null;
        }
    }

    render() {
        return (
            <div className="portfolio-container">
                <div className="portfolio-fade" data-aos="fade-up">
                    <h2 id="header-title">PORTFOLIO</h2>
                    <p className="portfolio-text">Here are a few things I've created recently.</p>
                    <p className="portfolio-text">Click on a project to find out more!</p>
                </div>
                {<TextProject show={this.state.showMessage1} hide={this.handleClose} click={this.handleClose}/>}
                {<WeatherProject show={this.state.showMessage2} hide={this.handleClose} click={this.handleClose}/>}
                {<PortfolioProject show={this.state.showMessage3} hide={this.handleClose} click={this.handleClose}/>}
                {<JavaGameProject show={this.state.showMessage4} hide={this.handleClose} click={this.handleClose}/>}
                {<KMeansProject show={this.state.showMessage5} hide={this.handleClose} click={this.handleClose}/>}
                {<DefectProject show={this.state.showMessage6} hide={this.handleClose} click={this.handleClose}/>}
                <Container data-aos="fade-up">
                    <Row>
                        <Col xs={6} md={4}>
                            <div className="image-container">
                                <div className="content">
                                    <a id="text-game" href="" target="_blank"
                                       onClick={(e) => this.onClickHandler(e, "showMessage1")}>
                                        <div className="content-overlay"></div>
                                        <Image
                                            className="content-image"
                                            src={spellsword}
                                            rounded
                                            width={350}
                                            height={350}
                                        >
                                        </Image>
                                        <div className="content-details fadeIn-bottom">
                                            <h3 className="content-title">Text Game</h3>
                                            <p className="content-text">Unity</p>
                                            <i className="fas fa-plus-circle"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="image-container">
                                <div className="content">
                                    <a id="weather-project" href="/" target="_blank"
                                       onClick={(e) => this.onClickHandler(e, "showMessage2")}>
                                        <div className="content-overlay"></div>
                                        <Image
                                            className="content-image"
                                            src={starrysky}
                                            rounded
                                            width={350}
                                            height={350}
                                        >
                                        </Image>
                                        <div className="content-details fadeIn-bottom">
                                            <h3 className="content-title">Starrysky</h3>
                                            <p className="content-text">Web Development</p>
                                            <i className="fas fa-plus-circle"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="image-container">
                                <div className="content">
                                    <a href="/" target="_blank"
                                       onClick={(e) => this.onClickHandler(e, "showMessage3")}>
                                        <div className="content-overlay"></div>
                                        <Image
                                            className="content-image"
                                            src={personal_site}
                                            rounded
                                            width={350}
                                            height={350}
                                        >
                                        </Image>
                                        <div className="content-details fadeIn-bottom">
                                            <h3 className="content-title">Personal Website</h3>
                                            <p className="content-text">Web Development</p>
                                            <i className="fas fa-plus-circle"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="image-container">
                                <div className="content">
                                    <a href="/" target="_blank"
                                       onClick={(e) => this.onClickHandler(e, "showMessage4")}>
                                        <div className="content-overlay"></div>
                                        <Image
                                            className="content-image"
                                            src={oefen}
                                            rounded
                                            width={350}
                                            height={350}
                                        >
                                        </Image>
                                        <div className="content-details fadeIn-bottom">
                                            <h3 className="content-title">Tower Defense</h3>
                                            <p className="content-text">Java Game</p>
                                            <i className="fas fa-plus-circle"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="image-container">
                                <div className="content">
                                    <a href="/" target="_blank"
                                       onClick={(e) => this.onClickHandler(e, "showMessage5")}>
                                        <div className="content-overlay"></div>
                                        <Image
                                            className="content-image"
                                            src={k_means10}
                                            rounded
                                            width={350}
                                            height={350}
                                        >
                                        </Image>
                                        <div className="content-details fadeIn-bottom">
                                            <h3 className="content-title">K-Means Clustering</h3>
                                            <p className="content-text">Python</p>
                                            <i className="fas fa-plus-circle"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="image-container">
                                <div className="content">
                                    <a href="/" target="_blank"
                                       onClick={(e) => this.onClickHandler(e, "showMessage6")}>
                                        <div className="content-overlay"></div>
                                        <Image
                                            className="content-image"
                                            src={defect_prediction}
                                            rounded
                                            width={350}
                                            height={350}
                                        >
                                        </Image>
                                        <div className="content-details fadeIn-bottom">
                                            <h3 className="content-title">Defect Prediction</h3>
                                            <p className="content-text">Python</p>
                                            <i className="fas fa-plus-circle"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

function TextProject(props) {
    return (
        <div>
            <Modal className="modal-tp" size="lg" show={props.show} onHide={props.hide} centered>
                <Modal.Header className="mod-header">
                </Modal.Header>
                <Modal.Header>
                    <Modal.Title className="project-title"><h3>TEXT GAME</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="project-text">
                        "Spellsword" was one of the first games developed in
                        my journey to learning game development using Unity. The game is quite simple, at each section
                        the
                        player is given multiple options to choose from and the outcomes
                        depend on the previous choices made.
                    </p>
                    <p className="project-text">
                        The game logic was developed using C# and the various graphics and UI were created in Unity.
                        The C# scripts were attached to different game objects in Unity to make a functioning game.
                    </p>
                    <div className="project-used">
                        <span className="project-link">Unity</span>
                        <span className="project-link">C#</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="close-btn" variant="secondary" onClick={props.click}>
                        Close
                    </Button>
                    <Button className="project-btn" onClick={(e) => {
                        e.preventDefault();
                        window.open("https://motalhak.github.io/Spellsword/");
                    }}>
                        Demo
                    </Button>
                    <Button className="project-btn" onClick={(e) => {
                        e.preventDefault();
                        window.open("https://github.com/MoTalhaK/Spellsword");
                    }}>
                        Source
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

function WeatherProject(props) {
    return (
        <div>
            <Modal className="modal-wp" size="lg" show={props.show} onHide={props.hide} centered>
                <Modal.Header className="mod-header">
                </Modal.Header>
                <Modal.Header>
                    <Modal.Title className="project-title"><h3>WEATHER APP</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="project-text">
                        A weather web app that displays the current weather in any city around the world! This was a fun
                        experience
                        as I got to work with new APIs that I had not worked with before and gained more knowledge on
                        front-end
                        web development.
                    </p>
                    <p className="project-text">
                        Built with React and obtained location information using Google Places API and weather
                        statistics
                        obtained from the OpenWeatherMap API. Auto-complete feature provides users with a seamless
                        experience.
                    </p>
                    <div className="project-used">
                        <span className="project-link">React</span>
                        <span className="project-link">JavaScript</span>
                        <span className="project-link">Bootstrap</span>
                        <span className="project-link">CSS</span>
                        <span className="project-link">OpenWeatherMap API</span>
                        <span className="project-link">Google Places API</span>
                        <span className="project-link">Firebase</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="close-btn" variant="secondary" onClick={props.click}>
                        Close
                    </Button>
                    <Button className="project-btn" onClick={(e) => {
                        e.preventDefault();
                        window.open("https://starrysky.icu/");
                    }}>
                        Demo
                    </Button>
                    <Button className="project-btn" onClick={(e) => {
                        e.preventDefault();
                        window.open("https://github.com/MoTalhaK/WeatherApp");
                    }}>
                        Source
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

function PortfolioProject(props) {
    return (
        <div>
            <Modal className="modal-pp" size="lg" show={props.show} onHide={props.hide} centered>
                <Modal.Header className="mod-header">
                </Modal.Header>
                <Modal.Header>
                    <Modal.Title className="project-title"><h3>PERSONAL WEBSITE</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="project-text">
                        The website you see here was created to showcase the various projects I created in my free time
                        and
                        during my undergrad. This was a fun project to take on as I was able to completely design the
                        website
                        the way I wanted from the ground up, including the UI/UX and the backend.
                    </p>
                    <p className="project-text">
                        All React for the frontend along with extensive use of CSS to allow for a friendly viewing
                        experience.
                        The backend for handling email requests was built using Node.js + Nodemailer transports.
                    </p>
                    <div className="project-used">
                        <span className="project-link">React</span>
                        <span className="project-link">JavaScript</span>
                        <span className="project-link">Bootstrap</span>
                        <span className="project-link">CSS</span>
                        <span className="project-link">Node</span>
                        <span className="project-link">Nodemailer</span>
                        <span className="project-link">Axios</span>
                        <span className="project-link">Firebase</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="close-btn" variant="secondary" onClick={props.click}>
                        Close
                    </Button>
                    <Button className="project-btn" onClick={(e) => {
                        e.preventDefault();
                        window.open("https://mkhokhar.me/");
                    }}>
                        Demo
                    </Button>
                    <Button className="project-btn" onClick={(e) => {
                        e.preventDefault();
                        window.open("https://github.com/MoTalhaK/personal-website");
                    }}>
                        Source
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

function JavaGameProject(props) {
    return (
        <div>
            <Modal className="modal-jp" size="lg" show={props.show} onHide={props.hide} centered>
                <Modal.Header className="mod-header">
                </Modal.Header>
                <Modal.Header>
                    <Modal.Title className="project-title"><h3>JAVA GAME</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="project-text">
                        "Oefen", a tower defense-like developed with a friend as a hobby project. In a traditional tower
                        defense game the player places
                        towers to
                        defend against hordes of enemies. In "Oefen", the objective is the same, except you are up
                        against a
                        computer
                        or another player and both of you have entire control over the board by placing both monsters
                        and towers
                        to crush your opponent.
                    </p>
                    <p className="project-text">
                        This game was developed entirely in Java for Windows desktop and Android/iOS.
                        This was one of the first projects, besides school related work, where I applied OOP concepts
                        such as polymorphism and inheritance extensively. To build the
                        game graphics and animations we used a Java game development framework called LibGDX which
                        provides an API
                        for Windows, iOS and Android. Finally, player data was stored using JSON arrays.
                    </p>
                    <div className="project-used">
                        <span className="project-link">Java</span>
                        <span className="project-link">LibGDX</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="close-btn" variant="secondary" onClick={props.click}>
                        Close
                    </Button>
                    <Button className="project-btn" onClick={(e) => {
                        e.preventDefault();
                        window.open("https://github.com/slymask3/Oefen");
                    }}>
                        Source
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

function KMeansProject(props) {
    return (
        <div>
            <Modal className="modal-kp" size="lg" show={props.show} onHide={props.hide} centered>
                <Modal.Header className="mod-header">
                </Modal.Header>
                <Modal.Header>
                    <Modal.Title className="project-title"><h3>K-MEANS CLUSTERING</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="project-text">
                        As part of a machine learning class I took in my 4th year of undergrad, I was given the
                        opportunity to develop a k-means clustering algorithm and visualize the results in Python.
                        Analysis was
                        based on the <span className="project-italics">seeds</span> data set which consists of three
                        different
                        kinds of wheat: Karma, Rosa and Canadian. In addition to this data, I analyzed clustering on a
                        2-D and 3-D <span className="project-italics">points</span> data set.
                    </p>
                    <p className="project-text">
                        Programmed entirely in Python using only the pandas, numpy and matplotlib libraries. The program
                        implements
                        the general k-means algorithm.
                    </p>
                    <div className="project-used">
                        <span className="project-link">Python</span>
                        <span className="project-link">Pandas</span>
                        <span className="project-link">Numpy</span>
                        <span className="project-link">Data Analysis</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="close-btn" variant="secondary" onClick={props.click}>
                        Close
                    </Button>
                    <Button className="project-btn" onClick={(e) => {
                        e.preventDefault();
                        window.open("https://github.com/MoTalhaK/K-Means-Clustering");
                    }}>
                        Source
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

function DefectProject(props) {
    return (
        <div>
            <Modal className="modal-dp" size="lg" show={props.show} onHide={props.hide} centered>
                <Modal.Header className="mod-header">
                </Modal.Header>
                <Modal.Header>
                    <Modal.Title className="project-title"><h3>BUG PREDICTION</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="project-text">
                        In the final project for my "Software Testing" class, I was tasked with developing a set of
                        machine
                        learning models that would predict buggy instances of code in a set of open source projects. The
                        projects
                        analyzed were the Xorg, JDT, Lucene, and Jackrabbit repositories.
                    </p>
                    <p className="project-text">
                        The machine learning models were built in Python using the sklearn library. The models included
                        Gaussian
                        naive bayes, decision tree, random forests, logistic regression, support vector machine, and
                        neural
                        network
                        classifiers. The initial performance of the classifiers was rather poor so to improve the
                        results, a new
                        feature set was constructed using a bag-of-words model. For even more improvements, resampling
                        was performed
                        on the dataset.
                    </p>
                    <div className="project-used">
                        <span className="project-link">Python</span>
                        <span className="project-link">NLP</span>
                        <span className="project-link">sklearn</span>
                        <span className="project-link">Pandas</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="close-btn" variant="secondary" onClick={props.click}>
                        Close
                    </Button>
                    <Button className="project-btn" onClick={(e) => {
                        e.preventDefault();
                        window.open("https://github.com/MoTalhaK/4313Project");
                    }}>
                        Source
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Portfolio