import React, { FC } from 'react';
import Logo from './Logo';
import StatSvg from './stat.react.svg';
import Nav from './Nav';
import { NAV_ITEMS } from './AppHeader.constants';
import './AppHeader.css';

const AppHeader: FC = props => {
  return (
    <header className="AppHeader">
      <div className="container AppHeader__container">
        <Logo className="AppHeader__Logo" />
        <button>
          <StatSvg />
        </button>

        <Nav items={NAV_ITEMS} className="AppHeader__Nav" />
      </div>
    </header>
  );
};

export default AppHeader;
