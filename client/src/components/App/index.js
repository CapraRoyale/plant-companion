import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';
import PrivateRoute from '../PrivateRoute';
import Home from '../Home';
import { app } from 'firebase';


// export default class App extends Component {
//     state = { loading: true, authenticated: false, user: null };

//     render() {
//         const { authenticated, loading } = this.state;

//         if (loading) {
//             return <p>Loading..</p>;
//         }

//         return (
//             <Router>
//                 <div>
//                     <PrivateRoute
//                         exact path={ROUTES.HOME}
//                         component={Home}
//                         authenticated={authenticated} />
//                     <Route
//                         exact path={ROUTES.LANDING}
//                         component={LandingPage} />
//                     <Route
//                         exact path={ROUTES.SIGN_UP}
//                         component={SignUpPage} />
//                     <Route
//                         exact path={ROUTES.SIGN_IN}
//                         component={SignInPage} />
//                 </div>

//             </Router>
//         )
//     }
//     componentWillMount() {
//         auth().onAuthStateChanged(user => {
//             if (user) {
//                 this.setState({
//                     authenticated: true,
//                     currentUser: user,
//                     loading: false
//                 });
//             } else {
//                 this.setState({
//                     authenticated: false,
//                     currentUser: null,
//                     loading: false
//                 })
//             }
//         })
//     }
// };


const App = () => (
    <Router>
        <div>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            {/* <PrivateRoute
                exact path={ROUTES.HOME}
                component={Home}
                // authenticated={authenticated} 
                /> */}
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route
                exact path={ROUTES.SIGN_UP}
                component={SignUpPage} />
            <Route
                exact path={ROUTES.SIGN_IN}
                component={SignInPage} />
        </div>
    </Router>
);
export default App;