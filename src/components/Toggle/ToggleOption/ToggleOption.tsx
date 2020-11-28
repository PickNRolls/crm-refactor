import React, { FC, useCallback } from 'react';
import Button from '../../Button';
import { ToggleOptionProps } from './ToggleOption.types';

const ToggleOption: FC<ToggleOptionProps> = props => {
  const { value, pin, active, content, onClick } = props;

  const handleClick = useCallback(() => {
    onClick(value);
  }, [onClick]);

  return (
    <Button pin={pin} view={active ? 'active' : 'default'} onClick={handleClick}>
      {content}
    </Button>
  );
};

export default ToggleOption;
