import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { history } from '../../../../browserHistory';
import { NavItemProps } from './NavItem.types';
import cn from 'classnames';
import './NavItem.css';

const NavItem: FC<NavItemProps> = props => {
  const { url, content } = props;
  const className = cn('NavItem', props.className, {
    NavItem_active: history.location.pathname === url,
  });

  return (
    <Link to={url} className={className}>
      {content}
    </Link>
  );
};

export default NavItem;
