import React, { Component } from "react";
import { Button, Radio, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import Routes from "../Routes"
import { LinkContainer } from "react-router-bootstrap";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            user_type: ""


        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 && this.state.username.length > 0 && this.state.first_name.length > 0 && this.state.last_name.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <FormGroup controlId="first_name" bsSize="large">
                        <ControlLabel>First Name</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.first_name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="last_name" bsSize="large">
                        <ControlLabel>Last Name</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.last_name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="user_type">
                        <Radio name="radioGroup" inline>
                            Employee
      </Radio>{' '}
                        <Radio name="radioGroup" inline>
                            Manager
      </Radio>{' '}
                    </FormGroup>


                    <LinkContainer to="/calendar">
                        <Button
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit"
                        >
                            Signup
          </Button>
                    </LinkContainer>
                </form>
            </div>
        );
    }
}
