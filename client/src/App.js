import React, {Component} from 'react';
import {Element} from 'react-scroll';
import Home from './components/home-component/home';
import About from './components/about-component/about';
import Portfolio from './components/portfolio-component/portfolio';
import Contact from './components/contact-component/contact';
import Footer from './components/footer-component/footer';
import Skills from './components/skills-component/skills';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Element name="home-element">
                    <div className="section home-section">
                        <div className="section-container home-component">
                            <Home/>
                        </div>
                    </div>
                </Element>
                <Element name="about-element">
                    <div className="section about-section">
                        <div className="section-container about-component">
                            <About/>
                        </div>
                    </div>
                </Element>
                <Element name="skills-element">
                    <div className="section skills-section">
                        <div className="section-container skills-component">
                            <Skills/>
                        </div>
                    </div>
                </Element>
                <Element name="portfolio-element">
                    <div className="section portfolio-section">
                        <div className="section-container portfolio-component">
                            <Portfolio/>
                        </div>
                    </div>
                </Element>
                <Element name="contact-element">
                    <div className="section contact-section">
                        <div className="section-container contact-component">
                            <Contact/>
                        </div>
                    </div>
                </Element>
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
