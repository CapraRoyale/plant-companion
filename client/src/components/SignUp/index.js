import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { firebase } from "../Firebase";
import LogoCondensed from "../logocondensed";
import GoogleAuthButton from '../GoogleAuth';
import axios from 'axios';
import createUser from '../../utils/API'


const SignUpPage = () => (
  <div>
    <h1>Create a Garden</h1>
  </div>
);

const SignInLink = () => (
  <p>
    Already Have An Account? <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  </p>
);


export default class SignUpFormBase extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    error: null
  };

  onSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email, password } = this.state;
    firebase
      .auth().createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error })
      });
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
    } = this.state;

    const isInvalid =
      email === '' ||
      firstName === '' ||
      lastName === '' ||
      password === ''

    return (
      <div>
        <LogoCondensed />
        <hr />
        <SignUpPage />

        <form onSubmit={this.onSubmit}>
          <input
            name="firstName"
            value={firstName}
            onChange={this.onChange}
            type="text"
            placeholder="First Name"
          />
          <input
            name="lastName"
            value={lastName}
            onChange={this.onChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email"
          />
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <button disabled={isInvalid} type="submit">Sign Up</button>

          {error && <p>{error.message}</p>}
        </form>
        <GoogleAuthButton />
        <SignInLink />
      </div>

    )
  }
}