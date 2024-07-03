import React, {useEffect, useState} from 'react';
import './style.css'

export const Display = ({inputString}) => {

    const [displayState, setDisplayState] = useState('0');

    useEffect(() => {
        setDisplayState(inputString);
    }, [inputString])

    return (
        <div className='displayContainer'>
            <p>
                {displayState}
            </p>
        </div>
    );
};