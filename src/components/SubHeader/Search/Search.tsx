import React, { FC, useState } from 'react';
import Textinput from 'components/Textinput';
import SearchSvg from './search.react.svg';
import { SearchProps } from './Search.types';
import { SEARCH_ANIMATE_CONFIG } from '../SubHeader.constants';

const Search: FC<SearchProps> = props => {
  const [value, setValue] = useState('');

  return (
    <Textinput
      name="search"
      value={value}
      onChange={event => setValue(event.target.value)}
      className={props.className}
      prepend={<SearchSvg className="SubHeader__SearchSvg" />}
      placeholder="Введите название для поиска"
      animate={SEARCH_ANIMATE_CONFIG}
    />
  );
};

export default Search;
