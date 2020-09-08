import React, {Component} from 'react';
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
                        <a href="https://www.linkedin.com/in/muhammadkh/" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.dropbox.com/s/jw3cokyufozjbuj/muhammad_khokhar_resume.pdf?dl=0" target="_blank">
                            <i className="fas fa-file-pdf"></i>
                        </a>
                    </div>
                    <div className="footnote">
                        Muhammad Khokhar <span className="copyright">© 2020</span>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;