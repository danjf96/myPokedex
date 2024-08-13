import React from 'react'
import { HeaderContainer, HeaderMain, HeaderTitle, ImageCenter } from './styles'
import { HEADERPROPS } from './types'
import { TouchableOpacity } from 'react-native'

const Header: React.FC<HEADERPROPS> = ({
    title = 'Pokedex',
    children,
    onPress,
    onPressLeft,
    icon,
    iconLeft,
    img,
    styleTitle,
    styleContainer
}) => {

    return (
        <HeaderMain style={styleContainer}>
            <HeaderContainer>
                {iconLeft && <TouchableOpacity onPress={onPressLeft} testID='header-left-btn'>
                    {(iconLeft)}
                </TouchableOpacity>}
                <HeaderTitle testID='header-title' style={styleTitle}>{title}</HeaderTitle>
                
                {img && <ImageCenter source={img} testID='header-img'/>}
                
                <TouchableOpacity onPress={onPress} testID='header-btn'>
                    {(icon)}
                </TouchableOpacity>
            </HeaderContainer>
            {children}
        </HeaderMain>
    )
    
}

export default Header