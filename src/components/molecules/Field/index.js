import React, { useState } from 'react';
import Input from 'components/atoms/Input';

import classNames from 'classnames';

import styles from './Field.module.scss';

const FieldMessage = ({
    children
}) => children ? (
    <p className={styles.FieldMessage}>{children}</p>
) : null;

const FieldToggle = ({
    isActive,
    isEnabled,
    toggle
}) => isEnabled ?
    (
        <button
            type='button'
            onClick={toggle}
            tabIndex={-1}
        >
            {isActive ? 'Hide' : 'Show'}
        </button>
    ) : null;

const Field = ({
    fieldId,
    fieldLabel,
    fieldName,
    fieldState,
    fieldType,
    fieldValue,
    message,
    toggleProtection = false,
    ...restProps
}) => {
    const [ fieldToggle, setFieldToggle ] = useState('password');
    const _handleToggle = () => setFieldToggle((state) => {
        if(state === 'password') {
            return 'text';
        }
        return 'password'
    });

    return(
        <div className={classNames(
            styles.FieldWrapper,
            {
                [styles.HasError]: fieldState === 'error',
                [styles.HasSuccess]: fieldState === 'success'
            }
        )}>
            <label htmlFor={fieldId}>{fieldLabel}</label>
            <Input
                id={fieldId}
                type={!toggleProtection ? fieldType : fieldToggle}
                name={fieldName}
                value={fieldValue}
                {...restProps}
            />
            <FieldToggle
                isEnabled={toggleProtection}
                isActive={fieldToggle !== 'password'}
                toggle={_handleToggle}
            />
            <FieldMessage>{message}</FieldMessage>
        </div>
    )
};

export default Field;