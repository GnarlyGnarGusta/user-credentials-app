import React, { useState } from 'react';
import Input from 'components/atoms/Input';
import {
    ShowIcon,
    HideIcon,
    SuccessIcon,
    AlertIcon
} from 'components/atoms/Icons';

import classNames from 'classnames';

import styles from './Field.module.scss';

const FieldMessage = ({
    fieldState,
    children
}) => children ? (
    <p className={styles.FieldMessage}>
        {fieldState === 'success' ? <SuccessIcon /> : <AlertIcon />}
        {children}
    </p>
) : null;

const FieldToggle = ({
    isActive,
    isEnabled,
    toggle
}) => isEnabled ?
    (
        <button
            type='button'
            className={styles.Toggle}
            onClick={toggle}
            tabIndex={-1}
        >
            {isActive ? <HideIcon /> : <ShowIcon />}
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
    onChange,
    toggleProtection = false,
    ...restProps
}) => {
    const [ fieldToggle, setFieldToggle ] = useState('password');
    const [ touched, setTouched ] = useState(!!fieldValue);
    
    const _handleFocus = () => setTouched(true);

    const _handleBlur = (event) => setTouched(() => {
        if (event.currentTarget.value) {
            return true;
        }

        return false;
    });

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
            <label
                className={classNames(
                    styles.Label,
                    { [styles.Touched]: touched }
                )}
                htmlFor={fieldId}
            >
                {fieldLabel}
            </label>
            <Input
                id={fieldId}
                type={!toggleProtection ? fieldType : fieldToggle}
                name={fieldName}
                value={fieldValue}
                onChange={onChange}
                onFocus={_handleFocus}
                onBlur={_handleBlur}
                {...restProps}
            />
            <FieldToggle
                isEnabled={toggleProtection}
                isActive={fieldToggle !== 'password'}
                toggle={_handleToggle}
            />
            <FieldMessage fieldState={fieldState}>
                {message}
            </FieldMessage>
        </div>
    )
};

export default Field;