import React, { Component } from 'react';
import Resume from '../../images/talha_khokhar_resume.pdf';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <footer>
                    <div className="profile-links">
                        <a href="https://github.com/MoTalhaK" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/talhakho/" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href={Resume} target="_blank" rel='noopener noreferrer'>
                            <i className="fas fa-file-pdf"></i>
                        </a>
                    </div>
                    <div className="footnote">
                        Talha Khokhar <span className="copyright">© 2022</span>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;