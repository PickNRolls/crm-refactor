import React, { FC, useState } from 'react';
import Button from 'components/Button';
import Toggle from '../Toggle';
import Search from './Search';
import { SEARCH_ANIMATE_CONFIG, TOGGLE_OPTIONS } from './SubHeader.constants';
import './SubHeader.css';

const SubHeader: FC = props => {
  const [layout, setLayout] = useState('grid');

  return (
    <header className="SubHeader">
      <div className="container flex">
        <Button className="SubHeader__AddButton" view="action">
          Добавить предмет
        </Button>

        <Toggle className="SubHeader__Toggle" options={TOGGLE_OPTIONS} value={layout} onChange={setLayout}/>

        <Search className="SubHeader__Search" />
      </div>
    </header>
  );
};

export default SubHeader;
