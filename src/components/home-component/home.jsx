import React, {Component} from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
import Particles from "react-particles-js"
import 'bootstrap/dist/css/bootstrap.css';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-div">
                {/*<Particles*/}
                {/*params={{*/}
                {/*"canvas": {*/}
                {/*el: "canvas_el",*/}
                {/*w: "400px",*/}
                {/*h: "650px",*/}
                {/*},*/}
                {/*"particles": {*/}
                {/*"number": {*/}
                {/*"value": 60,*/}
                {/*// "density": {*/}
                {/*//     "enable": false,*/}
                {/*//     "value_area": 800*/}
                {/*// }*/}
                {/*},*/}
                {/*"size": {*/}
                {/*"value": 3,*/}
                {/*}*/}
                {/*,*/}
                {/*"color": {*/}
                {/*"value": "#d80a6a"*/}
                {/*},*/}
                {/*"line_linked": {*/}
                {/*"color": "#d80a6a"*/}
                {/*}*/}
                {/*},*/}
                {/*"interactivity": {*/}
                {/*"detect_on": "canvas",*/}
                {/*"events": {*/}
                {/*"onhover": {*/}
                {/*"enable": true,*/}
                {/*"mode": "repulse"*/}
                {/*}*/}
                {/*}*/}
                {/*}*/}
                {/*}}/>*/}
                <div className="name">
                    <h2>Hey, I'm</h2>
                    <h1>Muhammad Khokhar</h1>
                    <ButtonToolbar>
                        <Button variant="outline-secondary" size="lg">View my work
                            <div className="container-button">
                                <i id="right-arrow" className="fas fa-arrow-right"></i>
                            </div>
                        </Button>
                    </ButtonToolbar>
                </div>
            </div>
        )
    }
}

export default Home;