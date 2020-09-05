import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import ScrollIntoView from 'react-scroll-into-view'
import {Container, Row, Col} from 'react-bootstrap';
import AOS from 'aos';
import './portfolio.css';
import 'aos/dist/aos.css';

AOS.init();

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
            showMessage1: false,
            showMessage2: false,
            showMessage3: false,
            showMessage4: false,
            showMessage5: false,
            showMessage6: false
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    onClickHandler(e, name) {
        e.preventDefault();
        console.log(name);

        switch (name) {
            case "showMessage1":
                this.setState({
                    showMessage1: !this.state.showMessage1,
                    showMessage2: false,
                    showMessage3: false,
                    showMessage4: false,
                    showMessage5: false,
                    showMessage6: false
                });
                break;
            case "showMessage2":
                this.setState({
                    showMessage2: !this.state.showMessage2,
                    showMessage1: false,
                    showMessage3: false,
                    showMessage4: false,
                    showMessage5: false,
                    showMessage6: false
                });
                break;
            case "showMessage3":
                this.setState({
                    showMessage3: !this.state.showMessage3,
                    showMessage2: false,
                    showMessage1: false,
                    showMessage4: false,
                    showMessage5: false,
                    showMessage6: false
                });
                break;
            case "showMessage4":
                this.setState({
                    showMessage4: !this.state.showMessage4,
                    showMessage2: false,
                    showMessage1: false,
                    showMessage3: false,
                    showMessage5: false,
                    showMessage6: false
                });
                break;
            case "showMessage5":
                this.setState({
                    showMessage5: !this.state.showMessage5,
                    showMessage2: false,
                    showMessage1: false,
                    showMessage3: false,
                    showMessage6: false,
                    showMessage4: false
                });
                break;
            case "showMessage6":
                this.setState({
                    showMessage6: !this.state.showMessage6,
                    showMessage2: false,
                    showMessage1: false,
                    showMessage3: false,
                    showMessage5: false,
                    showMessage4: false
                });
                break;
            default:
                return null;
        }
    }

    render() {
        const {showMessage1, showMessage2, showMessage3, showMessage4, showMessage5, showMessage6} = this.state;
        return (
            <div className="portfolio-container">
                <div className="portfolio-fade" data-aos="fade-up">
                    <h2 id="header-title">PORTFOLIO</h2>
                    <div className="overview"></div>
                    <p className="portfolio-text">Here are a few things I've created recently.</p>
                    <p className="portfolio-text">Click on a project to find out more!</p>
                </div>
                {showMessage1 && <TextProject/>}
                {showMessage2 && <WeatherProject/>}
                {showMessage3 && <PortfolioProject/>}
                {showMessage4 && <JavaGameProject/>}
                {showMessage5 && <KMeansProject/>}
                {showMessage6 && <DefectProject/>}
                <Container data-aos="fade-up">
                    <Row>
                        <Col xs={6} md={4}>
                            <div className="image-container">
                                <div className="content">
                                    <ScrollIntoView selector=".portfolio-container">
                                        <a id="text-game" href="" target="_blank"
                                           onClick={(e) => this.onClickHandler(e, "showMessage1")}>
                                            <div className="content-overlay"></div>
                                            <Image
                                                className="content-image"
                                                src={require("D:\\Repos\\React\\personal-website\\src\\images\\spellsword.PNG")}
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
                                    </ScrollIntoView>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="image-container">
                                <div className="content">
                                    <ScrollIntoView selector=".portfolio-container">
                                        <a id="weather-project" href="/" target="_blank"
                                           onClick={(e) => this.onClickHandler(e, "showMessage2")}>
                                            <div className="content-overlay"></div>
                                            <Image
                                                className="content-image"
                                                src={require("D:\\Repos\\React\\personal-website\\src\\images\\starrysky.png")}
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
                                    </ScrollIntoView>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="image-container">
                                <div className="content">
                                    <ScrollIntoView selector=".portfolio-container">
                                        <a href="/" target="_blank"
                                           onClick={(e) => this.onClickHandler(e, "showMessage3")}>
                                            <div className="content-overlay"></div>
                                            <Image
                                                className="content-image"
                                                src={require("D:\\Repos\\React\\personal-website\\src\\images\\personal_website.png")}
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
                                    </ScrollIntoView>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="image-container">
                                <div className="content">
                                    <ScrollIntoView selector=".portfolio-container">
                                        <a href="/" target="_blank"
                                           onClick={(e) => this.onClickHandler(e, "showMessage4")}>
                                            <div className="content-overlay"></div>
                                            <Image
                                                className="content-image"
                                                src={require("D:\\Repos\\React\\personal-website\\src\\images\\oefen.png")}
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
                                    </ScrollIntoView>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="image-container">
                                <div className="content">
                                    <ScrollIntoView selector=".portfolio-container">
                                        <a href="/" target="_blank"
                                           onClick={(e) => this.onClickHandler(e, "showMessage5")}>
                                            <div className="content-overlay"></div>
                                            <Image
                                                className="content-image"
                                                src={require("D:\\Repos\\React\\personal-website\\src\\images\\10_means_max.png")}
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
                                    </ScrollIntoView>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="image-container">
                                <div className="content">
                                    <ScrollIntoView selector=".portfolio-container">
                                        <a href="/" target="_blank"
                                           onClick={(e) => this.onClickHandler(e, "showMessage6")}>
                                            <div className="content-overlay"></div>
                                            <Image
                                                className="content-image"
                                                src={require("D:\\Repos\\React\\personal-website\\src\\images\\defect_prediction.PNG")}
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
                                    </ScrollIntoView>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

function TextProject() {
    return (
        <div className="project-container" data-aos="zoom-in">
            <h3 className="project-title">TEXT GAME</h3>
            <h4 className="project-desc">Description</h4>
            <p className="project-text">
                This text based game titled "Spellsword" was one of the first games developed in
                my journey to learning game development using Unity. The game is quite simple, at each section the
                player is given multiple options to choose from and the outcomes
                depend on the previous choices made.</p>
            <h4 className="project-sw">Software</h4>
            <p className="project-text">
                The game logic was developed using C# and the various graphics and UI was created in Unity.
                The C# scripts were attached to different game objects in Unity to make a functioning game.
            </p>
            <h4 className="project-demo">Demo</h4>
            <p className="project-text">
                <a className="project-link" href="https://motalhak.github.io/Spellsword/" target="_blank">Spellsword</a>
            </p>
        </div>
    )
}

function WeatherProject() {
    return (
        <div className="project-container" data-aos="zoom-in">
            <h3 className="project-title">WEATHER APP</h3>
            <h4 className="project-desc">Description</h4>
            <p className="project-text">
                A weather web app that displays the current weather in any city around the world! This was a fun
                experience
                as I got to work with new APIs that I had not worked with before and gained more knowledge on front-end
                web development.
            </p>
            <h4 className="project-sw">Software</h4>
            <p className="project-text">
                Like my personal website, StarrySky was built entirely with React and the weather statistics were
                obtained
                from the OpenWeatherMap API, however, as a free user, I was limited in the amount of informaiton I could
                pull.
                Additionally, I made use of Google's various APIs such as the Loaction Services, Cloud Functions, and
                Places API. The Places API
                is used alongside Location Services to provide users with an auto-complete function in the search bar.
                And, with React
                being a JavaScript library, its jsx expressions proved to be quite useful in fetching and displaying API
                statistics to users.
            </p>
            <h4 className="project-demo">Demo</h4>
            <p className="project-text">
                <a className="project-link" href="https://starrysky.icu/" target="_blank">Starry Sky</a>
            </p>
        </div>
    )
}

function PortfolioProject() {
    return (
        <div className="project-container" data-aos="zoom-in">
            <h3 className="project-title">Personal Website</h3>
            <h4 className="project-desc">Description</h4>
            <p className="project-text">
                The website you see here was created to showcase the various projects I created in my free time and
                during my undergrad. This was a fun project to take on as I was able to completely design the website
                the way I wanted from the ground up, including the UI and UX and the backend. The next step is to
                optimize the site and ensure every user has a nice and seamless experience.
            </p>
            <h4 className="project-sw">Software</h4>
            <p className="project-text">
                This entire project was actually started as a way to learn the React framework and familiarize myself
                with
                the Node Js environment. Alongside React and Node, I was able to develop my HTML and CSS skills as can
                be
                seen from the UI on this website. Using Node, Express, and Nodemailer, I was able to construct a fully
                functioning "Contact Form" for receiving emails from any interested users. To actually receive these
                emails,
                I setup a SMTP (Simple Mail Transfer Protocol) transport with the host being my email provider, Gmail.
            </p>
            <h4 className="project-demo">Demo</h4>
            <p className="project-text">
                Your looking at it! Here's a link anyways:
            </p>
            {/*<a className="project-link" href="https://starrysky.icu/" target="_blank">Starry Sky</a>*/}
        </div>
    )
}

function JavaGameProject() {
    return (
        <div className="project-container" data-aos="zoom-in">
            <h3 className="project-title">Java Game</h3>
            <h4 className="project-desc">Description</h4>
            <p className="project-text">
                "Oefen", a tower defense-like developed with a friend as a hobby project. In a traditional tower defense game the player places
                towers to
                defend against hordes of enemies. In "Oefen", the objective is the same, except you are up against a
                computer
                or another player and both of you have entire control over the board by placing both monsters and towers
                to crush your opponent. Essentially a tower defense game with a bit of offense as well.
            </p>
            <h4 className="project-sw">Software</h4>
            <p className="project-text">
                This game was developed entirely in Java for Windows desktop and Android/iOS.
                This was one of the first projects, besides school related work, where I applied OOP concepts
                such as polymorphism and inheritance extensively. For example, we created a "Card.java" class
                which is the top-level class that all card types (like "CardAttacker.java") can extend. To build the
                game graphics and animations we used a Java game development framework called LibGDX which provides an API
                for Windows, iOS and Android. Finally, player data was stored using JSON arrays.
            </p>
            <h4 className="project-demo">Demo</h4>
            <p className="project-text">
                <a className="project-link" href="https://github.com/slymask3/Oefen" target="_blank">Oefen</a>
            </p>
            <Image
                className="content-image"
                src={require("D:\\Repos\\React\\personal-website\\src\\images\\oefen.png")}
                rounded
                // width={640}
                // height={480}
            />
        </div>
    )
}

function KMeansProject() {
    return (
        <div className="project-container" data-aos="zoom-in">
            <h3 className="project-title">K-Means Clustering</h3>
            <h4 className="project-desc">Description</h4>
            <p className="project-text">
                As part of a machine learning class I took in my 4th year of undergrad, I was given the
                opportunity to develop a k-means clustering algorithm and visualize the results in Python. Analysis was
                based on the <span className="project-italics">seeds</span> data set which consists of three different
                kinds of wheat: Karma, Rosa and Canadian. In addition to this data, I analyzed clustering on a
                2-D and 3-D <span className="project-italics">points</span> data set.
            </p>
            <h4 className="project-sw">Software</h4>
            <p className="project-text">
                Programmed entirely in Python using only the pandas, numpy and matplotlib libraries. The program implements
                the general k-means algorithm as shown below:
            </p>
            <p className="project-text">
                <ol>
                    <li>
                        Choose K candidate cluster centers.
                    </li>
                    <li>
                        Assign each point to the closest cluster center.
                    </li>
                    <li>
                        Set the new cluster centers as the mean value of all the points in each cluster.
                    </li>
                    <li>
                        Repeat (2) and (3) for any number of iterations or until the cluster assignments no longer change.
                    </li>
                </ol>
            </p>
            <p className="project-text"><a className="project-link" href="http://www.cs.yorku.ca/~kosta/CompVis_Notes/k-means.pdf">Reference</a></p>
            <p className="project-text">
                This implementation of the k-means algorithm also supports a setting where the maximum distance between a point and its
                cluster center is used instead of the default Euclidean distance. Additionally, it is possible to use a uniformly random
                or manual initialization.
            </p>
            <p className="project-text">See the visualization below</p>
            <h4 className="project-demo">Demo</h4>
            <p className="project-text">
                <a className="project-link" href="https://github.com/MoTalhaK/K-Means-Clustering" target="_blank">K-Means</a>
            </p>
            <p className="project-text">2 and 3-dimensional visualizations of k-means clustering:</p>
            <Image
                className="project-image"
                src={require("D:\\Repos\\React\\personal-website\\src\\images\\5_means_max.png")}
                rounded
                width={500}
                height={500}
            />
            <Image
                className="project-image"
                src={require("D:\\Repos\\React\\personal-website\\src\\images\\5_means_max_2D.png")}
                rounded
                width={500}
                height={500}
            />
        </div>
    )
}

function DefectProject() {
    return (
        <div className="project-container" data-aos="zoom-in">
            <h3 className="project-title">Defect Prediction</h3>
            <h4 className="project-desc">Description</h4>
            <p className="project-text">
                In the final project for my "Software Testing" class, I was tasked with developing a set of machine
                learning models that would predict buggy instances of code in a set of open source projects. The projects
                analyzed were the Xorg, JDT, Lucene, and Jackrabbit repositories.
            </p>
            <h4 className="project-sw">Software</h4>
            <p className="project-text">
                The machine learning models were built in Python using the sklearn library. The models included Gaussian
                naive bayes, decision tree, random forests, logistic regression, support vector machine, and neural network
                classifiers. The initial performance of the classifiers was rather poor so to improve the results, a new
                feature set was constructed using a bag-of-words model and then resampled the data using techniques such as
                <span id="project-text"> SMOTE</span>, <span id="project-text">ADASYN</span>, and <span id="project-text">
                Random under sampler (with/without replacement)</span>. The best performing classifier accross all the projects
                analyzed was Random Forests.
            </p>
            <p className="project-text">
                The final results can be seen below:
            </p>
            <h4 className="project-demo">Demo</h4>
            <p className="project-text">
                <a className="project-link" href="https://starrysky.icu/" target="_blank">Defect Prediction</a>
            </p>
            <Image
                className="project-image"
                src={require("D:\\Repos\\React\\personal-website\\src\\images\\random_forests.PNG")}
                rounded
                // width={500}
                // height={500}
            />
        </div>
    )
}

export default Portfolio