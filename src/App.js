import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './components/home';
import NavBar from './components/header-component/NavBar';
import Footer from './components/footer-component/footer';
// import './styles.css';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <NavBar/>
              <Route name="home" exact path="/" component={Home} />
              <Footer/>
          </div>
      </Router>
    );
  }
}

export default App;
