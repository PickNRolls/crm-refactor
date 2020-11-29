import React, { FC } from 'react';
import Auth from 'components/Auth';
import { AuthProps } from './Auth.types';

const LocalAuth: FC<AuthProps> = (props) => {
    return (
        <Auth />
    );
};

export default LocalAuth;
