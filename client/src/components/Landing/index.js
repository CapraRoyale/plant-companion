import React from 'react';
import "./style.css";
import SignInButton from '../SignInButton';
import SignUpButton from '../SignUpButton';
import LogoCondensed from '../logocondensed';
import Logo from '../logo'

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