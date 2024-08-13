import React from 'react';
import styled from 'styled-components/native';
import { ThemeApp } from '../../../assets/Theme';

const IS_LOADING = styled.ActivityIndicator`
    margin: 10px;
`

const Loading: React.FC<{ visible: boolean, color?: string }> = ({visible, color = ThemeApp().customColors.loading }) => {
    return visible ? <IS_LOADING size={'large'}  color={color}/> : null
}

export default Loading