import React, { useMemo } from 'react'
import { CONTAINERPROPS } from './types'
import { SafeAreaViewContainer, ViewContainer, ScrollviewContainer } from './styles'


const Container: React.FC<CONTAINERPROPS> = (props) => {
    const renderScroll = (!props?.enabledScroll)
    ? 
        <ViewContainer style={props?.style} testID='container-component' padding={props?.padding}>{props?.children}</ViewContainer> 
    : 
        <ViewContainer style={props?.style} padding={props?.padding}>
            <ScrollviewContainer scrollEnabled={props.enabledScroll} testID='container-component'>{props?.children}</ScrollviewContainer>
        </ViewContainer>

    return (
        <>
            {renderScroll}            
        </>
    )
    
}

export default Container