import 'react-native';
import { fireEvent, render, screen } from '@testing-library/react-native';
import 'jest-styled-components'
import { HEADERPROPS } from './types';
import IconSimplePokebola from '../../assets/icons/IconSimplePokebola';
import Header from '.';
import { ThemeProvider } from 'styled-components/native';
import { ThemeApp } from '../../assets/Theme';
import { Text } from 'react-native';

const TestHeader= (props:any) => (<ThemeProvider theme={ThemeApp(false)}><Header {...props}/></ThemeProvider>)
const propsHeader: HEADERPROPS = {
    title: 'title',
    img: { uri: 'img' },
    icon: IconSimplePokebola ,
    onPress: jest.fn(),
    children: null
}


describe('Header', () => {
    test('Render header with props', () => {
        render(<TestHeader {...propsHeader} />);

        expect(screen.getByTestId('header-title').children[0]).toBe(propsHeader.title)
        expect(screen.getByTestId('header-img').props.source).toBe(propsHeader.img)

    });

    test('Render press icon', () => {
        render(<TestHeader {...propsHeader} />);
        const btn = screen.getByTestId('header-btn')
        fireEvent.press(btn)        
        expect(propsHeader.onPress).toHaveBeenCalled()
    });

    test('Render header with children', () => {
        let text = 'Test'
        render(<TestHeader {...propsHeader}><Text>{text}</Text></TestHeader>);

        expect(screen.getByText(text)).toBeTruthy()        

    });
})