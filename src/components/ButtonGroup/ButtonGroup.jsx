import React from 'react';
import {Button} from "../Button/Button";
import './style.css'

const ButtonGroup = ({inputHandler}) => {

    const signArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const operatorArray = ['⇽', '=', '+', '-']

    return (
        <div className='buttonGroup'>
            <div className='grid'>
                {signArray.map((sign) => {
                    return <Button
                        key={sign}
                        sign={sign}
                        clickHandler={() => inputHandler(sign)}
                    />
                })}
            </div>
            <div className='flex'>
                {operatorArray.map((sign) => {
                    return <Button
                        key={sign}
                        sign={sign}
                        clickHandler={() => inputHandler(sign)}
                        isOperator
                    />
                })}
            </div>
        </div>
    );
};

export default ButtonGroup;