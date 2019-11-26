import React from 'react';
import * as ROUTES from '../../constants/routes'
import {Link} from 'react-router-dom'

const SignInButton = () => (
  <button>
    <Link to={ROUTES.SIGN_IN} />
  </button>
)

export default SignInButton;