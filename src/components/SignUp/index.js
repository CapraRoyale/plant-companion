import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {compose} from "recompose";

import * as ROUTES from "../../constants/routes";
// import { FirebaseContext } from "../Firebase";
import { withFirebase } from "../Firebase"

const SignUpPage = () => (
  <div>
    <h1>Create a Garden</h1>
    {/* <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer> */}
    <SignUpForm />
  </div>
);

const state = {
  firstName: '',
  lastName: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {

  constructor(prop) {
    super(prop);
    this.state = { ...state }
  }
  onSubmit = event => {
    const { firstName, lastName, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...state });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error })
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid =
      email === '' ||
      firstName === '' ||
      lastName === '' ||
      passwordOne === '' ||
      passwordTwo === '';

    return (
      <form onSubmit={this.onSubmit}>



      <button disabled={isInvalid} type="submit">
        Sign Up
      </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignUpLink = () => (
  <p>
    Don't Have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };

