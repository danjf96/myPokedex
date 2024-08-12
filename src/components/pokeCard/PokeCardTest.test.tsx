/**
 * @format
 */

import 'react-native';
import { fireEvent, render, screen } from '@testing-library/react-native';
import 'jest-styled-components'
import { ThemeProvider } from 'styled-components/native';
import { ThemeApp } from '../../assets/Theme';
import PokeCard from '.';
import { POKECARDPROPS } from './types';

const TestPokecard = (props:any) => (<ThemeProvider theme={ThemeApp(false)}><PokeCard {...props}/></ThemeProvider>)
const statePokecard: POKECARDPROPS = {
    url: 'url',
    name: 'name',
    number: 1,
    captureAction: jest.fn(),
    onPress: jest.fn(),
    img: { uri: 'imgurl'}
}


describe('Pokecard', () => {
    test('Render pokecard', () => {
        render(<TestPokecard {...statePokecard} />);

        expect(screen.getByText(statePokecard.name)).toBeTruthy()
        expect(screen.getByTestId('pokecard-img').props.source).toBe(statePokecard.img)
        expect(screen.getByText('#001')).toBeTruthy()
    });

    test('Call captureAction', () => {
        render(<TestPokecard {...statePokecard} />);
        const btn = screen.getByTestId('pokecard-btn-capture')
        fireEvent.press(btn)        
        expect(statePokecard.captureAction).toHaveBeenCalled()
    })

    test('Call press card', () => {
        render(<TestPokecard {...statePokecard} />);
        const btn = screen.getByTestId('pokecard-card-btn')
        fireEvent.press(btn)        
        expect(statePokecard.onPress).toHaveBeenCalled()
    })
})