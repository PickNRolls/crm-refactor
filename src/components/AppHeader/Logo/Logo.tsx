import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from './logo.react.svg';
import { LogoProps } from './Logo.types';

const Logo: FC<LogoProps> = props => {
  return (
    <Link to="/" className={props.className}>
      <LogoSvg />
    </Link>
  );
};

export default Logo;
