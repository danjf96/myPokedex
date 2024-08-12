import styled from 'styled-components/native'


export const HeaderMain = styled.View`
    width: 100%;
    min-height: 60px;
    flex-direction: column;
    padding: ${({ theme }) => theme.padding.container};
    padding-bottom: 12px;
    backgroundColor: ${({ theme }) => theme.colors.background};
`

export const HeaderContainer = styled.View`
    width: 100%;
    flex-direction: row;
    margin-bottom: 12px;
    align-items: center;
    justify-content: between;
`

export const HeaderTitle = styled.Text`
    font-size: 26px;
    font-family: ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 12px;
    font-weight: bold;
`
export const ImageCenter = styled.Image`
    width: 32px;
    height: 32px;
`