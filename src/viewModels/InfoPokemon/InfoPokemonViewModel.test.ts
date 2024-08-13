import useAppSelector from '../../hooks/store/useAppSelector';
import useAppDispatch from '../../hooks/store/useAppDispatch';
import { getInfosPokemon } from '../../store/pokemon/action';
import { getInfosSpecies } from '../../store/species/action';
import { useNavigation } from '@react-navigation/native';
import useInfoPokemonViewModel from './infoPokemonViewModel';
import { renderHook, waitFor } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialState as initialStatePokedex, setMyList } from '../../store/pokedex/reducer';

jest.mock('../../hooks/store/useAppSelector');
jest.mock('../../hooks/store/useAppDispatch');
jest.mock('../../store/pokemon/action');
jest.mock('../../store/species/action');
jest.mock('../../store/pokedex/reducer', () => ({
  setMyList: jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));

const useSelectorMock = useAppSelector as jest.Mock;
const useDispatchMock = useAppDispatch as unknown as jest.Mock;
const navigation = useNavigation as jest.Mock;

const setItemMock = AsyncStorage.setItem as jest.Mock;
const setMyListMock = setMyList as unknown as jest.Mock;

describe('Info Pokemon ViewModel', () => {
  let dispatchMock: jest.Mock;
  let getInfosPokemonMock: jest.Mock;
  let getInfosSpeciesMock: jest.Mock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    getInfosPokemonMock = jest.fn();
    getInfosSpeciesMock = jest.fn();

    setMyListMock.mockImplementation(() => {});

    useDispatchMock.mockReturnValue(dispatchMock);

    useSelectorMock.mockReturnValue({
      pokemon: {
        url: 'pokemon-url',
        name: 'pokemon',
        species: {
          url: 'species-url',
        },
      },
      species: {},
      pokedex: { myList: []}
    });

    navigation.mockReturnValue({
      navigate: jest.fn(),
    });

    setItemMock.mockClear();
    setMyListMock.mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch getInfosPokemon on mount when url is available', () => {
    renderHook(() => useInfoPokemonViewModel());

    expect(dispatchMock).toHaveBeenCalledWith(getInfosPokemon({ url: 'pokemon-url' }));
  });

  it('should dispatch getInfosSpecies when pokemon species changes', () => {
    const { rerender } = renderHook(() => useInfoPokemonViewModel());

    expect(dispatchMock).toHaveBeenCalledWith(getInfosSpecies({ url: 'species-url' }));

    useSelectorMock.mockReturnValueOnce({
      pokemon: {
        url: 'new-pokemon-url',
        species: {
          url: 'new-species-url',
        },
      },
      species: {},
      pokedex: { ...initialStatePokedex }
    });

    rerender({});

    expect(dispatchMock).toHaveBeenCalledWith(getInfosSpecies({ url: 'new-species-url' }));
  });

  it('should return correct pokemon and species data', () => {
    const { result } = renderHook(() => useInfoPokemonViewModel());

    expect(result.current.pokemon).toEqual({
      url: 'pokemon-url',
      name: 'pokemon',
      species: {
        url: 'species-url',
      },
    });
    expect(result.current.species).toEqual({});
  });

  it('should return navigation object', () => {
    const { result } = renderHook(() => useInfoPokemonViewModel());

    expect(result.current.navigation).toBeDefined();
  });

  it('should correctly update savePokemon function and interact with AsyncStorage', async () => {
    const { result } = renderHook(() => useInfoPokemonViewModel());

    result.current.savePokemon();

    await waitFor(() => {

      expect(setMyListMock).toHaveBeenCalledWith({
        list: [{ name: 'pokemon', url: 'pokemon-url' }],
        type: 'ADD',
      });
  
      // expect(setItemMock).toHaveBeenCalledWith(
      //   'MY_LIST',
      //   JSON.stringify([{ name: 'pokemon', url: 'pokemon-url' }])
      // );
    })
    
  });

  it('should correctly verify if a Pokémon is saved', () => {
    const { result } = renderHook(() => useInfoPokemonViewModel());

    const isSaved = result.current.verifyIfIsSave;

    expect(isSaved).toBe(false);
  });
});