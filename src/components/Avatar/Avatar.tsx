import React, { FC } from 'react';
import cn from 'classnames';
import { AvatarProps } from './Avatar.types';
import defaultAvatarSrc from './avatar.png';
import './Avatar.css';

const Avatar: FC<AvatarProps> = props => {
  const { src = defaultAvatarSrc, className } = props;

  return (
    <div className={cn('Avatar', className)}>
      <img src={src} />
    </div>
  );
};

export default Avatar;
