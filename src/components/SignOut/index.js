import React from 'react';
import { firebase } from "../Firebase"
import { auth, provider} from '../Firebase'
import * as ROUTES from "../../constants/routes"
import { Link } from 'react-router-dom'

// import { withFirebase } from "../Firebase"

function SignOutButton({ firebase }) {
    function signOut(event) {
        event.preventDefault()
        console.log("button clicked")
        auth.signOut()
        .then(function () {
            console.log("made it this far")
            window.location.pathname = ROUTES.LANDING
        }).catch(function (error) {
            // An error happened.
        });
    }
    return (
        <button type="button" onClick={signOut}>
            Sign Out
        </button>
    )
}





export default SignOutButton;