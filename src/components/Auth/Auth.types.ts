import { SubmissionErrors } from 'final-form';
import { SignUpValues } from './SignUp/SignUp.types';

export type TabState = "signUp" | "signIn";

export interface AuthProps {
    className?: string;

    onSignUp?: (values: SignUpValues) => Promise<null | SubmissionErrors>;
    onSignIn?: (values: any) => void;
}
