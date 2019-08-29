import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import './contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <h2 id="header-title">CONTACT</h2>
                <p className="contact-text">Let's get in touch!</p>
                <div className="form-container">
                    <Form>
                        <Form.Group controlId="formGroupName">
                            <Form.Control type="name" placeholder="Name"/>
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Email"/>
                        </Form.Group>
                        <Form.Group controlId="formGroupMessage">
                            <Form.Control as="textarea" rows="6" type="message" placeholder="Message"/>
                        </Form.Group>
                    </Form>

                    <div className="submit-div">
                        <Button variant="secondary" type="submit" className="btn-submit">
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact