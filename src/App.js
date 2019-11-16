import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  // firebase.auth.GithubAuthProvider.PROVIDER_ID,
  // firebase.auth.EmailAuthProvider.PROVIDER_ID,
  // firebase.auth.PhoneAuthProvider.PROVIDER_ID
};

class App extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          {
            user
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }
          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
        </header>
      </div>
    );
  }
}
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
