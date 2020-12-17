export interface AuthProps {
    className?: string;
}

export interface SignUpResponse {
    data: {
        token: string;
    };
}

export interface ExistingMailError {
    title: string;
}

export interface NotMatchingPasswordsError {
    title: string;
}

export interface RequiredFieldError {
    title: string;
}

export type SignUpError = ExistingMailError | NotMatchingPasswordsError | RequiredFieldError;

export interface SignUpErrorResponse {
    errors: SignUpError[];
}
