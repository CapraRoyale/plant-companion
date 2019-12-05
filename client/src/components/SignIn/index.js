import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth } from '../Firebase'
import GoogleAuthButton from '../GoogleAuth'

import * as ROUTES from "../../constants/routes";
import LogoCondensed from '../logocondensed'

import "./style.css";

const SignInPage = () => (
    <div>
        <h1>Sign In</h1>
    </div>
);



const SignUpLink = () => (
    <p>
        Don't Have An Accout? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

export default class SignInFormBase extends Component {

    state = {
        email: "",
        password: "",
        error: null
    };

    onSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                // this.setState({ ...state });
                this.props.history.push(ROUTES.HOME)
            })
            .catch(error => {
                this.setState({ error })
            });

    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <div>
                <LogoCondensed />
                <hr />
                <SignInPage />
                <form onSubmit={this.onSubmit}>
                    <input
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                    />
                    <input
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />

                    <button disabled={isInvalid} type="submit">Sign In</button>
                    {error && <p>{error.message}</p>}
                </form>
                <GoogleAuthButton />
                <SignUpLink />

            </div>
        )
    }
}



// const SignInForm = withRouter(SignInFormBase);

// export default SignInPage

// export { SignInForm, SignUpLink };

// Login template code from https://serverless-stack.com/chapters/create-a-login-page.html

// import React, { useState } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import "./Login.css";

// export default function Login(props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <form onSubmit={handleSubmit}>
//         <FormGroup controlId="email" bsSize="large">
//           <ControlLabel>Email</ControlLabel>
//           <FormControl
//             autoFocus
//             type="email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//         </FormGroup>
//         <FormGroup controlId="password" bsSize="large">
//           <ControlLabel>Password</ControlLabel>
//           <FormControl
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             type="password"
//           />
//         </FormGroup>
//         <Button block bsSize="large" disabled={!validateForm()} type="submit">
//           Login
//         </Button>
//       </form>
//     </div>
//   );
// }