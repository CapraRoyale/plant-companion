<<<<<<< HEAD
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
);
class SignUpForm extends Component {
    constructor(props) {
        super(props);
    }
    onSubmit = event => {
    }
    onChange = event => {
    };
    render() {
        return (
            <form onSubmit={this.onSubmit}>
            </form>
        );
    }
}
const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);
export default SignUpPage;
export { SignUpForm, SignUpLink };
=======
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose"

import * as ROUTES from "../../constants/routes";
import { firebase } from "../Firebase";

// const SignUpPage = () => (
//   <div>
//     <h1>Create a Garden</h1>
//     <SignUpForm />
//   </div>
// );

 
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
    console.log('CREATING USER')
    firebase
      .auth().createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log(authUser)
        // this.setState({ ...state });
        // this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        console.log(error)
        // this.setState({ error })
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
          type="text"
        />
        <button disabled={isInvalid} type="submit">Sign Up</button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

// const SignInLink = () => (
//   <p>
//     Already Have An Account? <Link to={ROUTES.SIGN_IN}>Sign In</Link>
//   </p>
// );

// const SignUpForm = withRouter(withFirebase(SignUpFormBase));

// export default SignUpPage;

// export { SignUpForm, SignInLink };
>>>>>>> 7608a3daefc0ab3c04802b5fdb1dad8497c31170
