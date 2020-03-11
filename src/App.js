import React from 'react';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';

import './App.css';

const App = () => (
    <div>
        <main>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    console.info(event);
                }}
            >
                <Input
                    type='text'
                />
                <Button
                    type='submit'
                >
                    Hello
                </Button>
            </form>
        </main>
    </div>
);

export default App;
