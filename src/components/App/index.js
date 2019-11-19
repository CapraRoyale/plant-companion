import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navigation from "../Navigation/index"

const App = () => (
    <Router>
        <Navigation />
    </Router>
);

export default App;