import React from 'react';
import SignOutButton from "../SignOut"
import styled from "styled-components"
import "./style.css";
import LogoCondensed from '../logocondensed'

const Home = () => (
    <div>
        <LogoCondensed />
        <SignOutButton />
        <hr/>
        <div>
            <link href="components/home/css/index.css" rel="stylesheet" />
            <h1> plant and companion</h1>
            <form className="searchform">
                <input type="text" placeholder="Search..." name="search" />
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
)

export default Home;