import React from 'react';

import styles from './ButtonGroup.module.scss';

const ButtonGroup = ({children}) => (
    <div className={styles.ButtonGroup}>{children}</div>
);

export default ButtonGroup;