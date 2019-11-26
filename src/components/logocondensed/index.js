import React from 'react';
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'
import "./style.css"

const logoCondensed = () => (
  <div>
    <Link to={ROUTES.LANDING}>
      <img src="../assets/images/logo-condensed.png" alt='logocondensed' />
    </Link>
    <hr/>
  </div>
)

export default logoCondensed;