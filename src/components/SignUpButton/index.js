import React from 'react';
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'

const SignUpButton = () => (
  <button>
    <Link to={ROUTES.SIGN_UP}>
      Sign Up
    </Link>
  </button>
);

export default SignUpButton;