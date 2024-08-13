import styled from 'styled-components/native'

export const HeaderMain = styled.View`
    width: 100%;
    flex-direction: column;
    margin-bottom: 12px;
    backgroundColor: ${({ theme }) => theme.colors.background};
`
export const HeaderContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const HeaderTitle = styled.Text`
    font-size: 26px;
    font-family: ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    text-transform: capitalize;
`
export const ImageCenter = styled.Image`
    width: 32px;
    height: 32px;
`