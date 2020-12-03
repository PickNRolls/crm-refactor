import React, { FC, useCallback } from 'react';
import Auth from 'components/Auth';
import { AuthProps } from './Auth.types';
import { SignUpValues } from 'components/Auth/SignUp/SignUp.types';
import { SubmissionErrors, FORM_ERROR } from 'final-form';
import { fetch } from 'utils/fetch';

const LocalAuth: FC<AuthProps> = (props) => {
  const handleSignUp = useCallback(async (values: SignUpValues): Promise<null | SubmissionErrors> => {
    return fetch<string>('/auth/signup', {
      method: 'POST',
      data: {
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      },
    })
    .then((token) => {
      sessionStorage.setItem('jwt', token);
      return null;
    })
    .catch((errors) => {
      return errors;
    });
  }, []);

  return (
    <Auth {...props} onSignUp={handleSignUp} />
  );
};

export default LocalAuth;
