import React from 'react';
const FirebaseContext = React.createContext(null);


export const withFirebase = Component => props => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
)
export default FirebaseContext;