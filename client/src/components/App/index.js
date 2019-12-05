import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import * as ROUTES from '../../constants/routes';
import Home from '../Home';

const App = () => (
    <Router>
        <div>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
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