import React from './node_modules/react'
import { Link } from './node_modules/react-router-dom'
import * as ROUTES from "../../constants/routes";

const Logo = () => (
  <Link to={ROUTES.LANDING}>
    <img src="../assets/images/plant-companion-logo-sm.png" alt="logo" />
  </Link>
)


export default Logo;