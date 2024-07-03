import React from 'react';
import {Button} from "../Button/Button";
import './style.css'

const ButtonGroup = () => {

    const signArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const operatorArray = ['=', '+', '-']

    const signClickHandler = (sign) => {
        console.log(sign);
    }

    return (
        <div className='buttonGroup'>
            <div className='grid'>
                {signArray.map((sign) => {
                    return <Button
                        key={sign}
                        sign={sign}
                        clickHandler={() => signClickHandler(sign)}
                    />
                })}
            </div>
            <div className='flex'>
                {operatorArray.map((sign) => {
                    return <Button
                        key={sign}
                        sign={sign}
                        clickHandler={() => signClickHandler(sign)}
                        isOperator
                    />
                })}
            </div>
        </div>
    );
};

export default ButtonGroup;