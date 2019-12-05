import * as firebase from "firebase"

const config = {
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACTAPP_DEV_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

// const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()

export { firebase, auth }
