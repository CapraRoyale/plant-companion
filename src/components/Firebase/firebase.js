import React from "react";
import app from "firebase/app"
import 'firebase/auth'

const devConfig = {
  // apiKey: "AIzaSyD8WjrmWX4m2gN6jEFBHgzojdWTZihCdV0",
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  // authDomain: "plant-companion-24e40.firebaseapp.com",
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  // databaseURL: "https://plant-companion-24e40.firebaseio.com",
  databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
  // projectId: "plant-companion-24e40",
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  // storageBucket: "plant-companion-24e40.appspot.com",
  storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
  // messagingSenderId: "395394460900",
  messagingSenderId: process.env.REACTAPP_DEV_MESSAGING_SENDER_ID,
  // appId: "1:395394460900:web:347c6db3c28a0f62b650f1",
  appId: process.env.REACT_APP_DEV_APP_ID,
  // measurementId: "G-XFF0FFXZ3X",
  measurementId: process.env.REACT_APP_DEV_MEASUREMENT_ID
};

const prodConfig = {
  // apiKey: "AIzaSyD8WjrmWX4m2gN6jEFBHgzojdWTZihCdV0",
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  // authDomain: "plant-companion-24e40.firebaseapp.com",
  authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
  // databaseURL: "https://plant-companion-24e40.firebaseio.com",
  databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
  // projectId: "plant-companion-24e40",
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
  // storageBucket: "plant-companion-24e40.appspot.com",
  storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
  // messagingSenderId: "395394460900",
  messagingSenderId: process.env.REACTAPP_PROD_MESSAGING_SENDER_ID,
  // appId: "1:395394460900:web:347c6db3c28a0f62b650f1",
  appId: process.env.REACT_APP_PROD_APP_ID,
  // measurementId: "G-XFF0FFXZ3X",
  measurementId: process.env.REACT_APP_PROD_MEASUREMENT_ID
}

const config =
  process.env.NODE_ENV === "production" ? prodConfig : devConfig;

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth()
  }

  // Auth API

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () =>
    this.auth.signOut();

  doPasswordReset = email =>
    this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password)
};

export default Firebase;

