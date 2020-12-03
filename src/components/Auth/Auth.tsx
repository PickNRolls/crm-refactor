import React, { FC, useCallback, useState } from 'react';
import cx from 'classnames';
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

const Auth: FC<AuthProps> = (props) => {
  const { onSignUp } = props;

  const [tab, setTab] = useState<TabState>('signUp');

  const handleChange = useCallback((value: TabState) => {
    setTab(value);
  }, [setTab]);

  const content: Content = {
    signIn: <SignIn />,
    signUp: <SignUp onSubmit={onSignUp} />,
  };

  const className = cx('Auth', props.className);

  return (
    <div className={className}>
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
