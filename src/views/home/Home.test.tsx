import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import useHomeViewModel from '../../viewModels/home/homeViewModel';
import Home from '.';
import { renderWithTheme } from '../../hooks/test/renderWithTheme';

jest.mock('../../viewModels/home/homeViewModel', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockUseHomeViewModel = useHomeViewModel as jest.Mock;

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading spinner when data is loading', () => {
    mockUseHomeViewModel.mockReturnValue({
      seeDetails: jest.fn(),
      capturePokemon: jest.fn(),
      isLoading: true,
      verifyIfIsSave: jest.fn(),
      pokeList: [],
    });

    const { getByTestId } = renderWithTheme(<Home />);

    expect(getByTestId('loading-testid')).toBeTruthy();
  });

  it('should render a message when there are no captured Pokémon', () => {
    mockUseHomeViewModel.mockReturnValue({
      seeDetails: jest.fn(),
      capturePokemon: jest.fn(),
      isLoading: false,
      verifyIfIsSave: jest.fn(),
      pokeList: [],
    });

    const { getByText } = renderWithTheme(<Home />);

    expect(getByText('Nenhum pokemon encontrado!')).toBeTruthy();
  });

  it('should render a list of Pokémon', () => {
    mockUseHomeViewModel.mockReturnValue({
      seeDetails: jest.fn(),
      capturePokemon: jest.fn(),
      isLoading: false,
      verifyIfIsSave: jest.fn().mockReturnValue(false),
      pokeList: [
        { img: 'http://example.com/pikachu.png', name: 'Pikachu', url: 'pikachu-url', number: 25 },
        { img: 'http://example.com/charmander.png', name: 'Charmander', url: 'charmander-url', number: 4 },
      ],
    });

    const { getAllByTestId } = renderWithTheme(<Home />);

    expect(getAllByTestId('poke-card')).toHaveLength(2);
  });

  it('should call capturePokemon when a PokeCard is pressed', () => {
    const capturePokemonMock = jest.fn();
    mockUseHomeViewModel.mockReturnValue({
      seeDetails: jest.fn(),
      capturePokemon: capturePokemonMock,
      isLoading: false,
      verifyIfIsSave: jest.fn().mockReturnValue(false),
      pokeList: [
        { img: 'http://example.com/pikachu.png', name: 'Pikachu', url: 'pikachu-url', number: 25 },
      ],
    });

    const { getByTestId } = renderWithTheme(<Home />);

    const btn = getByTestId('pokecard-btn-capture');
    fireEvent.press(btn);
    expect(capturePokemonMock).toHaveBeenCalled();
  });

  it('should call seeDetails when a PokeCard is pressed', () => {
    const seeDetailsMock = jest.fn();
    mockUseHomeViewModel.mockReturnValue({
      seeDetails: seeDetailsMock,
      capturePokemon: jest.fn(),
      isLoading: false,
      verifyIfIsSave: jest.fn().mockReturnValue(false),
      pokeList: [
        { img: 'img', name: 'Pikachu', url: 'url', number: 1 },
      ],
    });

    const { getByTestId } = renderWithTheme(<Home />);
    const btn = getByTestId('pokecard-card-btn');
    fireEvent.press(btn);
    expect(seeDetailsMock).toHaveBeenCalled();
  });
});
