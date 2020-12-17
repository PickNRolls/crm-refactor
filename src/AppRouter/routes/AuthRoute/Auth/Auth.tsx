import React, { FC, useCallback } from 'react';
import Auth from 'components/Auth';
import { AuthProps, SignUpErrorResponse, SignUpResponse } from './Auth.types';
import { SignUpValues } from 'components/Auth/SignUp/SignUp.types';
import { SubmissionErrors, FORM_ERROR } from 'final-form';
import { fetch } from 'utils/fetch';

const LocalAuth: FC<AuthProps> = (props) => {
  const handleSignUp = useCallback(async (values: SignUpValues): Promise<null | SubmissionErrors> => {
    return fetch<SignUpResponse>('/users', {
      method: 'POST',
      data: {
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      },
    })
    .then((response) => {
      sessionStorage.setItem('jwt', response.data.token);
      return null;
    })
    .catch((response: SignUpErrorResponse) => {
      return response;
    });
  }, []);

  return (
    <Auth {...props} onSignUp={handleSignUp} />
  );
};

export default LocalAuth;
