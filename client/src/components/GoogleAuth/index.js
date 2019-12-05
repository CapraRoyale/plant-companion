import React, { Component } from 'react';
import * as firebase from "firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default class GooggleAuthButton extends Component {

  // This is our firebaseui configuration object
  uiConfig = {
    signInFlow: "redirect",
    signInSuccessUrl: "/home",
    signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      prompt: "select_account"
    }],


  };
  render() {
    return (
      <StyledFirebaseAuth
        uiConfig={this.uiConfig}
        firebaseAuth={firebase.auth()}
      />
    )
  }

}


  // (
  //     firebase.auth().signInWithPopup(provider).then(function(result) {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       var token = result.credential.accessToken;
  //       // The signed-in user info.
  //       var user = result.user;
  //       // ...
  //     }).catch(function(error) {
  //       // Handle Errors here.
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       // The email of the user's account used.
  //       var email = error.email;
  //       // The firebase.auth.AuthCredential type that was used.
  //       var credential = error.credential;
  //       // ...
  //       return(
  //         <div>
  //           <button>
  //             <GoogleAuthButton />
  //           </button>
  //         </div>
  // )
