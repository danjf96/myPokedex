import React from 'react'
import { CONTAINERPROPS } from './types'
import { SafeAreaViewContainer, ViewContainer, ScrollviewContainer } from './styles'


const Container: React.FC<CONTAINERPROPS> = (props) => {
    return (
        <SafeAreaViewContainer >
            <ViewContainer style={props?.style}>
                <ScrollviewContainer scrollEnabled={props?.enabledScroll ?? false}  testID='container-component'>
                    {props?.children}
                </ScrollviewContainer>
            </ViewContainer>
        </SafeAreaViewContainer>
    )
    
}

export default Container