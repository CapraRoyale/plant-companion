import React from 'react';
import SignOutButton from "../SignOut"
import styled from "styled-components"


const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip
`;
const Home = () => (
    <div>
        <SignOutButton />
        <div>
            <h1>My Garden</h1>
        </div>
    </div>
);

export default Home;