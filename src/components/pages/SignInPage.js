import React from 'react';
import { Tabs, Tab, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignInPage() {
    return(
        <div className="signin-page">
            
            <Tabs defaultActiveKey="login" id="unntrolled-tab-example">
                <Tab eventKey="login" title="Log in">
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Link to="/nutrition-diet"><Button className="btn btn-primary" block>Login</Button></Link>
                        <p>----------- welcome back 🙋---------</p>
                    </Form>
                </Tab>
                <Tab eventKey="register" title="Register">
                    <Form>
                        <Form.Group controlId="formGroupName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Link to="/nutrition-diet"><Button className="btn btn-primary" block>Register</Button></Link>
                        <p>*By registering, you agree to our T&Cs</p>
                    </Form>
                </Tab>
                
            </Tabs>
        </div>
    );

}

export default SignInPage;