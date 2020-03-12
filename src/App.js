import React from 'react';
import { useSignup } from 'providers/signup';
import Button, { BUTTON_STYLES } from 'components/atoms/Button';
import ButtonGroup from 'components/molecules/ButtonGroup';
import {
    UsernameField,
    PasswordField,
    ConfirmPasswordField
} from 'components/organisms/SignupFields';

import styles from './App.module.scss';

const App = () => {
    const { state, dispatch } = useSignup();

    return (
        <div className={styles.Container}>
            <main className={styles.Card}>
                <h1>User Signup</h1>
                <form
                    autoComplete='off'
                    onSubmit={(event) => {
                        event.preventDefault();
                        console.info(state);
                    }}
                >
                    <legend>Registration</legend>
                    <UsernameField />
                    <PasswordField />
                    <ConfirmPasswordField />
                    <ButtonGroup>
                        <Button
                            type='submit'
                            buttonStyle={BUTTON_STYLES.PRIMARY}
                        >
                            Sign Up
                        </Button>
                        <Button
                            onClick={() => dispatch({
                                type: 'RESET'
                            })}
                        >
                            Reset
                        </Button>
                    </ButtonGroup>
                </form>
            </main>
        </div>
    );
}

export default App;
