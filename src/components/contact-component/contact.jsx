import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import axios from "axios";
import './contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {fname: "", femail: "", fmessage: ""}
    }


    handleForm = e => {

        axios.post(
            "https://formcarry.com/s/mY_aLFfVQLI",
            this.state,
            {headers: {"Accept": "application/json"}}
        )
            .then(function (response) {

                // access response.data in order to check formcarry response
                if (response.data.success) {
                    // handle success
                } else {
                    // handle error
                    console.log(response.data.message);
                }

            })
            .catch(function (error) {
                console.log(error);
            });

        e.preventDefault();
    };

    handleFields = e => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <div className="contact-container">
                <h2 id="header-title">CONTACT</h2>
                <p className="contact-text">Let's get in touch!</p>
                <div className="form-container">
                    <Form onSubmit={this.handleForm}>
                        <Form.Group controlId="formGroupName">
                            <Form.Control name="fname" type="name" placeholder="Name" onChange={this.handleFields}/>
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control name="femail" type="email" placeholder="Email" onChange={this.handleFields}/>
                        </Form.Group>
                        <Form.Group controlId="formGroupMessage">
                            <Form.Control name="fmessage" as="textarea" rows="6" type="message" placeholder="Message"
                                          onChange={this.handleFields}/>
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