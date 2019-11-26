import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';
import Logo from "../logo"
import CondensedLogo from '../logocondensed'
import { Link } from 'react-router-dom'

console.log(process.env)
const App = () => (
    <Router>

        <div>
            <CondensedLogo />
            <button>
                <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </button>
            <button>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </button>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
    </Router>
);
export default App;
