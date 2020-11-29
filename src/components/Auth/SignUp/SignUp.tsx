import React, { FC } from 'react';
import Textinput from 'components/Textinput';
import Button from 'components/Button';
import { SignUpProps } from './SignUp.types';
import './SignUp.css';

const SignUp: FC<SignUpProps> = (props) => {
  return (
    <div className="SignUp">
      <form>
        <div className="SignUp__Inputs">
          <Textinput
            className="SignUp__Textinput"
            name="email"
            radius={5}
            label="e-mail"
            placeholder="Введите e-mail"
          />
          <Textinput
            className="SignUp__Textinput"
            name="password"
            radius={5}
            label="Пароль"
            placeholder="Введите пароль"
          />
          <Textinput
            className="SignUp__Textinput"
            name="confirmPassword"
            radius={5}
            label="Пароль еще раз"
            placeholder="Введите пароль"
          />
        </div>

        <Button view="action" block>
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
