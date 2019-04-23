import React, {Component} from 'react';
import './about.css';

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <h2 className="about-title">ABOUT</h2>
                <p className="about-text">I am an aspiring software developer based in Toronto currently pursuing a
                    degree in computer science at York University.</p>
                <p className="about-text">My goal is to bring awesome ideas to life, here on the web.</p>
            </div>
        )
    }
}

export default About