import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from "../../constants/routes";
import './style.css'

const mystyle = {
  width: "500px",
  height: "auto"
}

const Logo = () => (

  <Link to={ROUTES.LANDING} style={mystyle}>
    <img src="../assets/images/plant-companion-logo-md.png" alt="logo" />
  </Link>
)

export default Logo;