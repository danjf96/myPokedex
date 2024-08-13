import { Dimensions, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native'
const { width } = Dimensions.get('window')

export const ContainerInfo = styled.ScrollView`
    width: 100%;
    flex-direction: column;
    padding: ${({ theme }) => theme.padding.container};
    backgroundColor: ${({ theme }) => theme.colors.background};
    flex: 1;
    z-index: 2;
`

export const HeaderContainerInfo = styled(LinearGradient)<{ background: string }>`
    width: 100%;
    height: 250px;
    align-self: center;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    background-color:${(props: any) => props.background};
    opacity: 0.5;
    margin-bottom: 36px;
`
export const PokeImg = styled.Image`
    width: ${parseInt((width/2).toString())}px;
    height: ${parseInt((width/2).toString())}px;
`

export const Card = styled.View<{ color?: string}>`
    width: 100%;
    align-items: center;
    flex-direction: column;
    border-width: 1px;
    border-color:  ${ (props) => props.color };
    min-height: 80px;
    border-radius: 12px;
    margin-bottom: 36px;
    padding: ${({ theme }) => theme.padding.container};
    padding-top: 20px;
`
export const TitleCard = styled.View<{ color?: string}>`
    position: absolute;
    z-index: 99;
    align-self: center;
    margin-top: -17px;
    border-radius: 10px;
    padding: 5px;
    border-width: 1px;
    background-color: white;
    border-color: ${ (props) => props.color };
`

export const Title = styled.Text<{ color?: string}>`
    font-size: 16px;
    font-family: ${ ({ theme }) => theme.font };
    color: ${ (props) => props.color };
    font-weight: 500;
`

export const Column = styled.View`
    width: 100%;
    flex: 1;
    flex-direction: column;
`
export const Row = styled.View`
    width: 100%;
    flex: 1;
    flex-direction: row;
`

export const StatInfo = styled.Text`
    font-size: 16px;
    font-family: ${ ({ theme }) => theme.font };
    color: ${ ({ theme }) => theme.colors.text };
    font-weight: bold;
    text-transform: capitalize;
`
export const StatDescription = styled.Text`
    font-size: 16px;
    font-family: ${ ({ theme }) => theme.font };
    color:  ${ ({ theme }) => theme.colors.text };
    margin-left: 5px;
`

export const CardType = styled.View<{ color?: string, index?: number }>`
    border-radius: 10px;
    padding: 5px;
    border-width: 1px;
    background-color: white;
    border-color: ${ (props) => props.color || 'white' };
    margin-bottom: 6px;
    margin-left: 0px;
    margin-right: 6px;
`

export const CardTypeText = styled.Text`
    font-size: 16px;
    font-family: ${ ({ theme }) => theme.font };
    color:  ${ ({ theme }) => theme.colors.text };
    font-weight: 500;
`
