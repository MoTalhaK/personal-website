import React, {Component} from 'react';
import './skills.css';

class Skills extends Component {
    render() {
        return (
            <div className="skills-container">
                <div className="skills-fade" data-aos="fade-up">
                    <h2 id="header-title">SKILLS</h2>
                    <div className="header-title-bar"></div>
                    <p className="skills-text">
                        I've worked with a variety of programming languages with a large emphasis on Java in my
                        undergrad. Along the
                        way I picked up Python and web development technologies like HTML/CSS and Javascript, which are
                        a blast to work with.
                    </p>
                    <p className="skills-text">Check out the tech stack I've been working with recently!</p>
                </div>
                <div className="prog-container" data-aos="fade-up">
                    <div className="prog-info">
                        <div className="prog-header">
                            <div className="prog-buttons">
                                <div className="prog-button btn-1"></div>
                                <div className="prog-button btn-2"></div>
                                <div className="prog-button btn-3"></div>
                            </div>
                            <p className="prog-header-text">TechnicalSkills.js</p>
                        </div>
                        <div className="prog-content">
                            <p className="var">var <span className="prog-text">languages = <span
                                className="comma-bracket">[<span className="prog-details">"Java"<span
                                className="comma-bracket">, <span className="prog-details">"Python"<span
                                className="comma-bracket">, <span className="prog-details">"C#"<span
                                className="comma-bracket">, <span
                                className="prog-details">"Bash"<span className="comma-bracket">, <span
                                className="prog-details">"C"</span></span></span></span></span></span></span></span></span>]</span></span>
                            </p>
                            <div className="margin-space"></div>
                            <p className="var">var <span className="prog-text">webStack = <span
                                className="comma-bracket">[<span className="prog-details">"HTML/CSS"<span
                                className="comma-bracket">, <span className="prog-details">"JavaScript"<span
                                className="comma-bracket">, <span className="prog-details">"React"<span
                                className="comma-bracket">, <span
                                className="prog-details">"Bootstrap"</span></span></span></span></span></span></span>]</span></span>
                            </p>
                            <div className="margin-space"></div>
                            <p className="var">var <span className="prog-text">tools = <span
                                className="comma-bracket">[<span className="prog-details">"Node.js"<span
                                className="comma-bracket">, <span className="prog-details">"Git"<span
                                className="comma-bracket">, <span className="prog-details">"Unity"<span
                                className="comma-bracket">, <span
                                className="prog-details">"vim"</span></span></span></span></span></span></span>]</span></span>
                            </p>
                            <div className="margin-space"></div>
                            <p className="var">var <span className="prog-text">software = <span
                                className="comma-bracket">[<span className="prog-details">"PSQL"<span
                                className="comma-bracket">, <span className="prog-details">"Windows/Linux"</span></span></span>]</span></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills