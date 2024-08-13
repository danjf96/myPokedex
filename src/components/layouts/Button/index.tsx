import React from 'react';
import { ButtonProps } from './types';
import { ButtonLayout, Text } from './styles';

const Button: React.FC<ButtonProps> = (props) => {
    return (
            <ButtonLayout {...props} />
    )
}

export default Button