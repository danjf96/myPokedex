import React from 'react';
import { InputProps } from './types';
import { TextInputLayout } from './styles';

const Input: React.FC<InputProps> = (props) => {
    return (
            <TextInputLayout {...props}/>
    )
}

export default Input