import React from 'react';
import { Option } from 'components/Toggle/Toggle.types';
import CompactSvg from './compact.react.svg';
import GridSvg from './grid.react.svg';
import RowsSvg from './rows.react.svg';

export const TOGGLE_OPTIONS: Option[] = [
  {
    content: <GridSvg />,
    value: 'grid',
  },
  {
    content:  <RowsSvg />,
    value: 'rows',
  },
  {
    content:  <CompactSvg />,
    value: 'compact',
  }
];

export const SEARCH_ANIMATE_CONFIG = {
  placeholder: true,
};
