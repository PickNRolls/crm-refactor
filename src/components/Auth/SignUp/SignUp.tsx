import React, { FC } from 'react';
import Textinput from 'components/Textinput';
import { SignUpProps } from './SignUp.types';
import './SignUp.css';
import { AnimateConfig } from 'components/Textinput/Textinput.types';

const animateConfig: AnimateConfig = {
  placeholder: true,
};

const SignUp: FC<SignUpProps> = (props) => {
  return (
    <div className="SignUp">
      <form>
        <Textinput
          className="SignUp__Textinput"
          name="email"
          radius={5}
          placeholder="Введите e-mail"
          animate={animateConfig}
        />
        <Textinput
          className="SignUp__Textinput"
          name="password"
          radius={5}
          placeholder="Введите пароль"
          animate={animateConfig}
        />
        <Textinput
          className="SignUp__Textinput"
          name="confirmPassword"
          radius={5}
          placeholder="Введите пароль"
          animate={animateConfig}
        />
      </form>
    </div>
  );
};

export default SignUp;
