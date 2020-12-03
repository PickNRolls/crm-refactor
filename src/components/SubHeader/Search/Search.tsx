import React, { FC, useState } from 'react';
import Textinput from 'components/Textinput';
import { SearchProps } from './Search.types';

const Search: FC<SearchProps> = props => {
  const [value, setValue] = useState('');

  return (
    <Textinput
      name="search"
      value={value}
      onChange={event => setValue(event.target.value)}
      className={props.className}
      placeholder="Введите название для поиска"
    />
  );
};

export default Search;
