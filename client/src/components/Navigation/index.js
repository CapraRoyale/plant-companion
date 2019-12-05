import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import "./style.css";
const Navigation = () => (
    <div>
        <button>
            <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </button>
        <button>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </button>
    </div>
);
export default Navigation;