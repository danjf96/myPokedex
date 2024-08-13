import styled from 'styled-components/native'

export const ViewContainer = styled.View`
    width: 100%;
    height: 40px;
    padding: 2px;
    border-radius: 12px;
`

export const TextInputLayout = styled.TextInput`
    min-width: 240px;
    min-height: 40px;
    padding: 2px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 12px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text };
`