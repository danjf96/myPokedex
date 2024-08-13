import useAppSelector from '../../hooks/store/useAppSelector';
import useAppDispatch from '../../hooks/store/useAppDispatch';
import { getInfosPokemon } from '../../store/pokemon/action';
import { getInfosSpecies } from '../../store/species/action';
import { useNavigation } from '@react-navigation/native';
import useInfoPokemonViewModel from './infoPokemonViewModel';
import { renderHook } from '@testing-library/react-native';

jest.mock('../../hooks/store/useAppSelector');
jest.mock('../../hooks/store/useAppDispatch');
jest.mock('../../store/pokemon/action');
jest.mock('../../store/species/action');
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));

const useSelectorMock = useAppSelector as jest.Mock;
const useDispatchMock = useAppDispatch as unknown as jest.Mock;
const navigation = useNavigation as jest.Mock;

describe('Info Pokemon ViewModel', () => {
  let dispatchMock: jest.Mock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatchMock.mockReturnValue(dispatchMock);

    useSelectorMock.mockReturnValue({
      pokemon: {
        url: 'pokemon-url',
        species: {
          url: 'species-url',
        },
      },
      species: {},
    });

    navigation.mockReturnValue({
      navigate: jest.fn(),
    });
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
    });

    rerender({});

    expect(dispatchMock).toHaveBeenCalledWith(getInfosSpecies({ url: 'new-species-url' }));
  });

  it('should return correct pokemon and species data', () => {
    const { result } = renderHook(() => useInfoPokemonViewModel());

    expect(result.current.pokemon).toEqual({
      url: 'pokemon-url',
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
});