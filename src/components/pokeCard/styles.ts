import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width } = Dimensions.get('screen')

export const PokecardContainer = styled.View`
    width: 100%;
    min-height: 60px;
    padding: ${({ theme }) => theme.padding.card};
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px;
    margin-bottom: 15px;
    border-radius: 10px;
    border-color: ${({ theme }) => theme.colors.border};
    justify-content: space-between
`
export const PokeBtn = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    width: 85%;
`

export const PokecardContainerText = styled.View`
    flex-direction: column;
    margin-left: 5px;
`

export const PokeName = styled.Text`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    text-transform: capitalize;
    margin-bottom: 1px;
`
export const PokeNumber = styled.Text`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    opacity: 0.5;
`

export const PokeImage =styled.Image`
    width: 96px;
    height: 96px;
    resize-mode: contain;
`