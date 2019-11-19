import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const SignUpPage = () => (
  <div>
    <h1>Create a Garden</h1>
    <SignUpForm />
  </div>
);

const state = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  error: null,
};

class SignUpForm extends Component {

  constructor(prop) {
    super(prop);
    this.state = { ...state }
  }
  onSubmit = event => {

  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      error
    } = this.state

    return (
      <form onSubmit={this.onSubmit}>

      </form>
    )
  }
}

const SignUpLink = () => (
  <p>
    Don't Have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };

