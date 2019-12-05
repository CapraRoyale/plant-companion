import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { firebase } from "../Firebase";
import LogoCondensed from "../logocondensed";
import GoogleAuthButton from '../GoogleAuth';
import axios from 'axios';
import createUser from '../../utils/API'

// import GoogleAuthButton from '../Google Auth'


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
        // this.setState({});
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
        <hr/>
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



// const SignUpForm = withRouter(withFirebase(SignUpFormBase));

// export default SignUpPage;

// export { SignUpForm, SignInLink };

// template code from https://serverless-stack.com/chapters/create-the-signup-form.html :

// import React, { useState } from "react";
// import {
//   HelpBlock,
//   FormGroup,
//   FormControl,
//   ControlLabel
// } from "react-bootstrap";
// import LoaderButton from "../components/LoaderButton";
// import { useFormFields } from "../libs/hooksLib";
// import "./Signup.css";

// export default function Signup(props) {
//   const [fields, handleFieldChange] = useFormFields({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     confirmationCode: ""
//   });
//   const [newUser, setNewUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   function validateForm() {
//     return (
//       fields.email.length > 0 &&
//       fields.password.length > 0 &&
//       fields.password === fields.confirmPassword
//     );
//   }

//   function validateConfirmationForm() {
//     return fields.confirmationCode.length > 0;
//   }

//   async function handleSubmit(event) {
//     event.preventDefault();

//     setIsLoading(true);

//     setNewUser("test");

//     setIsLoading(false);
//   }

//   async function handleConfirmationSubmit(event) {
//     event.preventDefault();

//     setIsLoading(true);
//   }

//   function renderConfirmationForm() {
//     return (
//       <form onSubmit={handleConfirmationSubmit}>
//         <FormGroup controlId="confirmationCode" bsSize="large">
//           <ControlLabel>Confirmation Code</ControlLabel>
//           <FormControl
//             autoFocus
//             type="tel"
//             onChange={handleFieldChange}
//             value={fields.confirmationCode}
//           />
//           <HelpBlock>Please check your email for the code.</HelpBlock>
//         </FormGroup>
//         <LoaderButton
//           block
//           type="submit"
//           bsSize="large"
//           isLoading={isLoading}
//           disabled={!validateConfirmationForm()}
//         >
//           Verify
//         </LoaderButton>
//       </form>
//     );
//   }

//   function renderForm() {
//     return (
//       <form onSubmit={handleSubmit}>
//         <FormGroup controlId="email" bsSize="large">
//           <ControlLabel>Email</ControlLabel>
//           <FormControl
//             autoFocus
//             type="email"
//             value={fields.email}
//             onChange={handleFieldChange}
//           />
//         </FormGroup>
//         <FormGroup controlId="password" bsSize="large">
//           <ControlLabel>Password</ControlLabel>
//           <FormControl
//             type="password"
//             value={fields.password}
//             onChange={handleFieldChange}
//           />
//         </FormGroup>
//         <FormGroup controlId="confirmPassword" bsSize="large">
//           <ControlLabel>Confirm Password</ControlLabel>
//           <FormControl
//             type="password"
//             onChange={handleFieldChange}
//             value={fields.confirmPassword}
//           />
//         </FormGroup>
//         <LoaderButton
//           block
//           type="submit"
//           bsSize="large"
//           isLoading={isLoading}
//           disabled={!validateForm()}
//         >
//           Signup
//         </LoaderButton>
//       </form>
//     );
//   }

//   return (
//     <div className="Signup">
//       {newUser === null ? renderForm() : renderConfirmationForm()}
//     </div>
//   );
// }