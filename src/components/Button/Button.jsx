import React from 'react';
import styles from './Button.module.css'

export const Button = ({sign, isOperator, clickHandler}) => {

    return (
        <div
            className={`${styles.buttonContainer} ${isOperator && styles.operator}`}
            onClick={clickHandler}
        >
            <p>
                {sign}
            </p>
        </div>
    );
};