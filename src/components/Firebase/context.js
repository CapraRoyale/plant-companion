import React from 'react';
import SignUpPage from "../SignUp/"
import SignInPage from "../SignIn"
const FirebaseContext = React.createContext(null);


export const withFirebase = Component => props => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
)
export default FirebaseContext;