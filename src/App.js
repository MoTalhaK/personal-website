import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './components/home-component/home';
import NavBar from './components/header-component/NavBar';
import Footer from './components/footer-component/footer';
import {Nav} from 'react-bootstrap';
// import './styles.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <NavBar/>
                    <Route name="home" exact path="/" component={Home}/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
