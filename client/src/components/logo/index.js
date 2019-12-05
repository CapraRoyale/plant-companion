import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from "../../constants/routes";
import './style.css'

const Logo = () => (

  <Link to={ROUTES.LANDING}>
    <img className="logo" src="../assets/images/plant-companion-logo-md.png" alt="logo" />
  </Link>
)

export default Logo;