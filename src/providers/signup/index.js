import React, {
    createContext,
    useContext,
    useReducer
} from 'react';

const SignupContext = createContext();

const useSignup = () => useContext(SignupContext);

const fields = ['username', 'password', 'confirmPassword'];

const initialState = () => fields.reduce((obj, field) => ({
    ...obj,
    [field]: {
        id: field,
        value: ''
    }
}), {});

const reducer = (state, { type, payload }) => {
    const actions = {
        UPDATE: () => ({
            ...state,
            [payload.id]: {
                ...state[payload.id],
                value: payload.value
            }
        }),
        RESET: () => initialState()
    };

    return actions[type]();
}

const SignupProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(reducer, initialState());

    return (
        <SignupContext.Provider value={{ state, dispatch }}>
            {children}
        </SignupContext.Provider>
    )
}

export { SignupProvider, useSignup }