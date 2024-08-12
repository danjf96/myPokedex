import React from 'react'
import { HeaderContainer, HeaderMain, HeaderTitle, ImageCenter } from './styles'
import { HEADERPROPS } from './types'
import { TouchableOpacity } from 'react-native'

const Header: React.FC<HEADERPROPS> = ({
    title = 'Pokedex',
    children,
    onPress,
    icon,
    img
}) => {

    return (
        <HeaderMain>
            <HeaderContainer>
                <HeaderTitle testID='header-title'>{title}</HeaderTitle>
                
                <ImageCenter source={img} testID='header-img'/>
                
                <TouchableOpacity onPress={onPress} testID='header-btn'>
                    {icon}
                </TouchableOpacity>
            </HeaderContainer>
            {children}
        </HeaderMain>
    )
    
}

export default Header