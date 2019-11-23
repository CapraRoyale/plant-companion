import React from 'react';
import { firebase } from "../Firebase"
import * as ROUTES from "../../constants/routes"

// import { withFirebase } from "../Firebase"

const SignOutButton = ({ firebase }) => (
    <button type="button">
        Sign Out
    </button>
);

firebase.auth().signOut()
    .then(function () {
        this.props.history.push(ROUTES.LANDING)
    }).catch(function (error) {
        console.log(error)
    });

export default SignOutButton;