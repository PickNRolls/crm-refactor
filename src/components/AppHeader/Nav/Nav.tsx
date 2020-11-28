import React, { FC, useCallback } from 'react';
import cn from 'classnames';
import { NavProps } from './Nav.types';
import NavItem from './NavItem';
import './Nav.css';

const Nav: FC<NavProps> = props => {
  const { items, className } = props;
  const renderItems = useCallback(() => {
    return items.map((item, index) => (
      <NavItem {...item} key={`${index}:${item.url}`} className="Nav__NavItem" />
    ));
  }, [items]);

  return (
    <nav className={cn('Nav', className)}>
      <ul>
        {renderItems()}
      </ul>
    </nav>
  );
};

export default Nav;
