import React, { FC } from 'react';
import { Form, Field } from 'react-final-form';
import Textinput from 'components/final-form/Textinput';
import Button from 'components/Button';
import { SignUpProps } from './SignUp.types';
import './SignUp.css';

const SignUp: FC<SignUpProps> = (props) => {
  return (
    <div className="SignUp">
      <Form
        onSubmit={props.onSubmit}
        render={(renderProps) => (
          <form onSubmit={renderProps.handleSubmit}>
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
                type="password"
                name="password"
                radius={5}
                label="Пароль"
                placeholder="Введите пароль"
              />
              <Textinput
                className="SignUp__Textinput"
                type="password"
                name="confirmPassword"
                radius={5}
                label="Пароль еще раз"
                placeholder="Введите пароль"
              />
            </div>

            <Button view="action" type="submit" block>
              Зарегистрироваться
            </Button>
          </form>
        )}
      />
    </div>
  );
};

export default SignUp;
