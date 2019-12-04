import React from 'react';
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'
import "./style.css"
import 'bootstrap'

const logoCondensed = () => (
  <div>
    <Link to={ROUTES.LANDING}>
      <img src="../assets/images/logo-condensed.png" alt='logocondensed' />
    </Link>

  </div>
)

export default logoCondensed;