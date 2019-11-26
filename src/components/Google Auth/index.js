import React from 'react';
import { Link } from "react-router-dom";
// import { compose } from "recompose"

import * as ROUTES from "../../constants/routes";
import { firebase } from "../Firebase";
import { renderComponent } from 'recompose';

var provider = new firebase.auth.GoogleAuthProvider();

function GoogleAuthButton() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      return(
        <div>
          <button>
            
          </button>
        </div>
      )
    })
    
}


export default GoogleAuthButton;