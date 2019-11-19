import React, {Component} from "react";
import {Link} from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const SignUpPage = () => (
  <div>
    <h1>Create a Garden</h1>
    <SignUpForm />
  </div>
);

class SignUpForm extends Component {
  constructor(prop) {
    super(prop);
  }
  onSubmit = event => {

  }

  onChange = event => {

  };

  render() {
    return(
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

