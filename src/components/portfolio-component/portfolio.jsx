import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import './portfolio.css';

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio-container">
                <h2 id="header-title">PORTFOLIO</h2>
                <p className="portfolio-text">Here are a few things I've created recently.</p>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image
                                src="https://cdn.pixabay.com/photo/2015/08/18/09/54/canada-893534_640.jpg"
                                rounded
                                width={350}
                                height={350}
                            />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image
                                src="https://cdn.pixabay.com/photo/2015/08/18/09/54/canada-893534_640.jpg"
                                rounded
                                width={350}
                                height={350}
                            />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image
                                src="https://cdn.pixabay.com/photo/2015/08/18/09/54/canada-893534_640.jpg"
                                rounded
                                width={350}
                                height={350}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Portfolio