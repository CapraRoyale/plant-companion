import React from 'react';
import { Link } from "react-router-dom"

const Navigation = () => (
    <div>
        <ul>
            <li>
                <Link to={ROUTE.SIGN_IN}>Sign In</Link>
            </li>
            <li>
                <Link to={ROUTE.HOME}>Home</Link>
            </li>
            <li>
                <Link to={ROUTE.LANDING}>Landing</Link>
            </li>
            <li>
                <Link to={ROUTE.ACCOUT}>Account</Link>
            </li>
            <li>
                <Link to={ROUTE.ADMIN}>Admin</Link>
            </li>
        </ul>
    </div>
);

export default Navigation;