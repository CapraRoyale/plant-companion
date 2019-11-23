<<<<<<< HEAD
import FirebaseContext from './context';
import Firebase from './firebase';
import {withFirebase} from 'react-redux-firebase';
export default Firebase;
export { FirebaseContext, withFirebase };
=======
// import FirebaseContext, { withFirebase } from './context';
// import Firebase from './firebase';
// export default Firebase;
// export { FirebaseContext, withFirebase };
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

export { firebase }
>>>>>>> 7608a3daefc0ab3c04802b5fdb1dad8497c31170
