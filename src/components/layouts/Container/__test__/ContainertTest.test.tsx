/**
 * @format
 */

import 'react-native';
import { render, screen } from '@testing-library/react-native';
import Container from '..';
import 'jest-styled-components'
import { ThemeProvider } from 'styled-components/native';
import { ThemeApp } from '../../../../assets/Theme';
import { Text } from 'react-native';

const TestContainer = (props:any) => (<ThemeProvider theme={ThemeApp(false)}><Container {...props}/></ThemeProvider>)

describe('Container Test', () => {
    const labelTest = 'TESTE';

    test('Render Container with children ', () => {
        render(<TestContainer>
            <Text>{labelTest}</Text>
        </TestContainer>);

        expect(screen.getByText(labelTest)).toBeTruthy();
        expect(screen.getByTestId('container-component').children.length).toBe(1);
        expect(screen.getByTestId('container-component').props.scrollEnabled).toBeFalsy();

    });

    test('Render Container with scroll true ', () => {
        render(<TestContainer enabledScroll={true} />);

        expect(screen.getByTestId('container-component').props.scrollEnabled).toBeTruthy();

    });
})
