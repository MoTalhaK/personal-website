import React, {Component} from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './components/home-component/home';
import About from './components/about-component/about';
import Portfolio from './components/portfolio-component/portfolio';
import Contact from './components/contact-component/contact';
import Footer from './components/footer-component/footer';
import './App.css';
import Skills from "./components/skills-component/skills";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="section home-section">
                    <div className="section-container home-component">
                        {/*<Route name="home" exact path="/" component={Home}/>*/}
                        <Home/>
                    </div>
                </div>
                <div className="section about-section">
                    <div className="section-container about-component">
                        <About/>
                    </div>
                </div>
                <div className="section skills-section">
                    <div className="section-container skills-component">
                        <Skills/>
                    </div>
                </div>
                <div className="section portfolio-section">
                    <div className="section-container portfolio-component">
                        <Portfolio/>
                    </div>
                </div>
                <div className="section contact-section">
                    <div className="section-container contact-component">
                        <Contact/>
                    </div>
                </div>
                <div className="section footer-section">
                    <div className="section-container footer-component">
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
