import { SubmissionErrors } from 'final-form';

export interface SignUpValues {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface SignUpProps {
    onSubmit: (values: SignUpValues) => Promise<null | SubmissionErrors>;
}
