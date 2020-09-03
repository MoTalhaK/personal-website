import React, {Component} from 'react';
import {Card, CardDeck, Col, Image, Row} from 'react-bootstrap';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="about-fade" data-aos="fade-up">
                    <h2 id="header-title">ABOUT</h2>
                    <p className="about-text">I am an aspiring software developer based in Toronto currently pursuing a
                        degree in computer science at York University.</p>
                    <p className="about-text">My goal is to bring awesome ideas to life, here on the web.</p>
                </div>
                <CardDeck>
                    <Card data-aos="fade-up">
                        <Card.Img variant="top"
                                  src="https://cdn.pixabay.com/photo/2015/08/18/09/54/canada-893534_640.jpg"
                                  title="Ottaoutais River"/>
                        <Card.Body>
                            <Card.Title>Ottawa</Card.Title>
                            <Card.Text>
                                Born in Pakistan, my family moved to Canada when I was very young and we first settled
                                in the country's capital, Ottawa.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Image by <a
                                href="https://pixabay.com/users/DEZALB-1045091/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=893534">Albert
                                Dezetter</a> from <a
                                href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=893534">Pixabay</a>
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card data-aos="fade-up"
                          data-aos-delay="50">
                        <Card.Img variant="top" src="https://i.ibb.co/XzLSPyy/sauga.jpg" title="Absolute World"/>
                        <Card.Body>
                            <Card.Title>Mississauga</Card.Title>
                            <Card.Text>
                                We lived in Ottawa for a short while and then moved to Brampton and then again settled
                                in Mississauga where I have spent most of my life growing up. Yes, we move a lot.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                Image by <a href="https://unsplash.com/@vanveenjf">VanveenJF</a> from <a
                                href="https://unsplash.com/">Unsplash</a>
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card data-aos="fade-up"
                          data-aos-delay="100">
                        <Card.Img variant="top" src="https://live.staticflickr.com/2829/34171818601_23521f8218_z.jpg"
                                  height="268.375px" title="The Bergeron Centre for Engineering Excellence"/>
                        <Card.Body>
                            <Card.Title>Bergeron Centre @ YorkU</Card.Title>
                            <Card.Text>
                                Here I am now attending York University where I have learned to love programming and
                                bringing ideas to life. I am proud to call my self a Lassondian.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                Image by <a data-flickr-embed="true"
                                            href="https://www.flickr.com/photos/empty_quarter/34171818601/"
                                            title="Bergeron [Explored]">Empty Quarter</a> from <a
                                href="https://www.flickr.com/">Flickr</a>
                            </small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}

export default About