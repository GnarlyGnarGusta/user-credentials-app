import React from 'react';

import styles from './Button.module.scss';

export const BUTTON_STYLES = {
    DEFAULT: 'default',
    PRIMARY: 'primary'
}

const Button = ({
    buttonStyle,
    type = 'button',
    children,
    disabled,
    ...restProps
}) => (
    <button
        className={styles.Button}
        type={type}
        disabled={disabled}
        {...restProps}
    >
        {children}
    </button>
);

export default Button;