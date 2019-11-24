import React from 'react';
import Navigation from '../Navigation'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import "./style.css";

const Landing = () => (

    <div>
        <h1>Landing</h1>
        <div>
            <button>
                <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </button>
            <button>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </button>
        </div>
    </div>

);

export default Landing;