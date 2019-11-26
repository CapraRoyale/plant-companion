import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from "../SignOut"
import * as ROUTES from '../../constants/routes';
//import './index.css';



const Navigation = () => (
    <div>
        <ul>
            <li>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </li>
            <li>
                <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
            <li>
                <SignOutButton />
            </li>
        </ul>
    </div>
    
    

);


   






export default Navigation;

{/* <Navbar bg="light">
<Navbar.Brand href="#home">Brand link</Navbar.Brand>
</Navbar>
<br />
<Navbar bg="light">
<Navbar.Brand>Brand text</Navbar.Brand>
</Navbar> */}