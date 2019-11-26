import React from 'react';
import Navigation from '../Navigation'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import "./style.css";
import SignInButton from '../SignInButton';
import SignUpButton from '../SignUpButton';
import LogoCondensed from '../logocondensed';
import Logo from '../logo'
import GoogleAuth from '../Google Auth'

const Landing = () => (

    <div>
        <LogoCondensed />
        <SignInButton />
        <SignUpButton />
        <hr/>
        <div>
            <Logo />
        </div>
    </div>

);

export default Landing;