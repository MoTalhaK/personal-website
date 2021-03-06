import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            errors: []
        }
    }

    hasError(key) {
        return this.state.errors.indexOf(key) !== -1;
    }

    handleSubmit(e) {
        e.preventDefault();

        var errors = [];

        if (this.state.name === "") {
            errors.push("name");
        }

        this.setState({
            errors: errors
        });

        if (errors.length > 0) {
            return false;
        }
        /*send message to server*/
        axios({
            method: "POST",
            url: "https://us-central1-personal-website-82c41.cloudfunctions.net/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    /*reset the form on submit*/
    resetForm() {
        this.setState({name: "", email: "", message: ""})
    }

    handleFields = e => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <div className="contact-container" data-aos="fade-up">
                <h2 id="header-title-contact">CONTACT</h2>
                <div id="header-title-bar"></div>
                <p className="contact-text">Let's get in touch!</p>
                <div className="form-container" data-aos="zoom-in">
                    <Form onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <Form.Group controlId="formGroupName">
                            <Form.Control name="name"
                                          type="name"
                                          placeholder="Name"
                                          value={this.state.name}
                                          onChange={this.handleFields}
                                          required/>
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control name="email"
                                          type="email"
                                          placeholder="Email"
                                          value={this.state.email}
                                          onChange={this.handleFields}
                                          required/>
                        </Form.Group>
                        <Form.Group controlId="formGroupMessage">
                            <Form.Control name="message"
                                          as="textarea"
                                          rows="6"
                                          type="message"
                                          placeholder="Message"
                                          value={this.state.message}
                                          onChange={this.handleFields}
                                          required/>
                        </Form.Group>
                        <div className="submit-div">
                            <Button variant="secondary" type="submit" className="btn-submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Contact