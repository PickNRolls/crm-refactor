import React, { FC } from 'react';
import Auth from './Auth';
import './AuthRoute.css';

const AuthRoute: FC = props => {
  return (
    <div className="AuthRoute">
      <Auth className="AuthRoute__Auth" />
    </div>
  )
};

export default AuthRoute;
