import { Dimensions, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native'

const { width } = Dimensions.get('window')

export const ViewContainer = styled.View<{ padding?: string }>`
    width: ${width}px;
    height: 100%;
    padding: ${(props) => props.padding ? props.padding : props.theme.padding.container}
`

export const SafeAreaViewContainer = styled(SafeAreaView)`
    backgroundColor: ${({ theme }) => theme.colors.background }
`

export const ScrollviewContainer = styled.ScrollView`
    flex: 1;
    display: flex;
`