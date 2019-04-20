import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './components/home-component/home';
import NavBar from './components/header-component/NavBar';
import About from './components/about-component/about';
import Footer from './components/footer-component/footer';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <div className="section home-section">
                        <NavBar/>
                        <div className="section-container home-component">
                            <Route name="home" exact path="/" component={Home}/>
                        </div>
                    </div>
                    <div className="section about-section">
                        <div className="section-container about-component">
                            <About/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
