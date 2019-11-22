import React from 'react';
import SignUpPage from "../SignUp/index"
import SignInPage from "../SignIn"
const FirebaseContext = React.createContext(null);


export const withFirebase = Component => props => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => <SignUpPage {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
    <FirebaseContext.Consumer>
      {firebase => <SignInPage {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
)
export default FirebaseContext;