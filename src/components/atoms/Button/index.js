import React from 'react';
import classNames from 'classnames';

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
        className={classNames(
            styles.Button,
            { [styles.Primary]: buttonStyle === BUTTON_STYLES.PRIMARY }
        )}
        type={type}
        disabled={disabled}
        {...restProps}
    >
        {children}
    </button>
);

export default Button;