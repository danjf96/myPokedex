import styled from 'styled-components/native'

export const ViewContainer = styled.View`
    height: 40px;
    padding: 2px;
    border-radius: 12px;
`

export const ButtonLayout = styled.TouchableOpacity`
    padding: ${({ theme }) => theme.padding.container};
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.primary};
`
export const Text = styled.Text`
    color: white;
`