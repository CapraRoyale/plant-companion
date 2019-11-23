import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from "../../constants/routes";

const Logo = () => (
  <Link to={ROUTES.LANDING}>
    <img src="../../../public/assets/images/plant-companion-logo.svg" alt="logo" />
  </Link>
)


export default Logo;