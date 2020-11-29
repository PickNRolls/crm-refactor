import React, { FC, useCallback, useState } from 'react';
import { AuthProps, TabState } from './Auth.types';
import Tabs from './Tabs';
import { Option, Content } from 'components/Tabs';
import SignUp from './SignUp';
import SignIn from './SignIn';
import './Auth.css';

const options: Option[] = [
  {
    value: 'signIn',
    content: 'Вход',
  },
  {
    value: 'signUp',
    content: 'Регистрация',
  },
];

const content: Content = {
  signIn: <SignIn />,
  signUp: <SignUp />,
};

const Auth: FC<AuthProps> = (props) => {
  const [tab, setTab] = useState<TabState>('signUp');

  const handleChange = useCallback((value: TabState) => {
    setTab(value);
  }, [setTab]);

  return (
    <div className="Auth">
      <Tabs
        className="Auth__Tabs"
        options={options}
        value={tab}
        content={content}
        onChange={handleChange} 
      />
    </div>
  );
};

export default Auth;
