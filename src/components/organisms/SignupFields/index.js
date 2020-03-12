import React from 'react';
import { useSignup } from 'providers/signup';
import Field from 'components/molecules/Field';

const _handleChange = (event, dispatch) => dispatch({
    type: 'UPDATE',
    payload: {
        id: event.currentTarget.id,
        value: event.currentTarget.value
    }
});

export const UsernameField = () => {
    const { state, dispatch } = useSignup();
    const { username } = state;
    

    return (
        <Field
            fieldId={username.id}
            fieldLabel='Username'
            fieldName='Username'
            fieldType='text'
            fieldValue={username.value}
            onChange={(event) => _handleChange(event, dispatch)}
        />
    );
};

export const PasswordField = () => {
    const { state, dispatch } = useSignup();
    const { password } = state;
    
    return (
        <Field
            fieldId={password.id}
            fieldLabel='Password'
            fieldName='Password'
            fieldValue={password.value}
            toggleProtection={true}
            onChange={(event) => _handleChange(event, dispatch)}
        />
    );
};

export const ConfirmPasswordField = () => {
    const { state, dispatch } = useSignup();
    const { confirmPassword, password } = state;
    const schema = () => {
        const defaultSchema = {
            fieldState: null,
            message: ''
        };

        if(!confirmPassword.value) {
            return defaultSchema;
        } else if (confirmPassword.value !== password.value) {
            return {
                fieldState: 'error',
                message: 'Passwords do not match.'
            }
        } else if (confirmPassword.value === password.value) {
            return {
                fieldState: 'success',
                message: 'Passwords match.'
            }
        }

        return defaultSchema;
    };

    return (
        <Field
            fieldId={confirmPassword.id}
            fieldLabel='Confirm Password'
            fieldName='ConfirmPassword'
            fieldValue={confirmPassword.value}
            fieldType='password'
            onChange={(event) => _handleChange(event, dispatch)}
            {...schema()}
        />
    );
};