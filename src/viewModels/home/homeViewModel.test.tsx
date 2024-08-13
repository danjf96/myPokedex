import useHomeViewModel from './homeViewModel';
import useAppSelector from '../../hooks/store/useAppSelector';
import useAppDispatch from '../../hooks/store/useAppDispatch';
import { getListOfPokemons } from '../../store/pokedex/action';
import { renderHook, waitFor } from '@testing-library/react-native';

jest.mock('../../hooks/store/useAppSelector');
jest.mock('../../hooks/store/useAppDispatch');
jest.mock('../../store/pokedex/action');

const useSelector = useAppSelector as unknown as jest.Mock
const dispatch = useAppDispatch as unknown as jest.Mock

describe('useHomeViewModel', () => {
  let dispatchMock: jest.Mock<any, any, any>;

  beforeEach(() => {
    dispatchMock = jest.fn();
    dispatch.mockReturnValue(dispatchMock );
    useSelector.mockReturnValue({
      listOfPokemons: [],
      loading: false,
      next: null,
      search: '',
    });
  });

  it('should dispatch getListOfPokemons on mount', () => {
    renderHook(() => useHomeViewModel());

    expect(dispatchMock).toHaveBeenCalledWith(getListOfPokemons({ limit: 20, offset: 0 }));
  });

  it('should return initial values correctly', () => {
    const { result } = renderHook(() => useHomeViewModel());

    expect(result.current.pokeList).toEqual([]);
    expect(result.current.isLoading).toBe(false);
  });

  it('should return updated pokeList when listOfPokemons changes', async () => {
    const mockData = [{ url: 'testee', name: 'name' }];
    
    useSelector.mockReturnValueOnce({
      listOfPokemons: mockData,
      loading: false,
      next: null,
      search: '',
    });

    const { result } = renderHook(() => useHomeViewModel());

    expect(result.current.pokeList).toEqual(mockData);
  });

  it('should handle pagination', () => {
    useSelector.mockReturnValueOnce({
      listOfPokemons: [],
      loading: false,
      next: 'next-url',
      search: '',
    });

    const { result } = renderHook(() => useHomeViewModel());

    result.current.pagination();

    expect(dispatchMock).toHaveBeenCalledWith(getListOfPokemons({ limit: 20, offset: 0, next: 'next-url' }));
  });

  it('should handle filter', async () => {
    const search = 'charmander'

    useSelector.mockReturnValueOnce({
      listOfPokemons: [{
        url: '',
        name: 'charmander'
      }],
      loading: false,
      next: null,
      search
    });

    const { result } = renderHook(() => useHomeViewModel());

    result.current.filter();

    expect(dispatchMock).toHaveBeenCalledWith(getListOfPokemons({ limit: 10000, offset: 0, search }));
    await waitFor( () => {
        expect(result.current.pokeList.find( l => l.name === search)).not.toBeUndefined()
    })
  });

  it('should handle filter not return result', async () => {
    const search = 'charmander'

    useSelector.mockReturnValueOnce({
      listOfPokemons: [{
        url: '',
        name: 'pikachu'
      }],
      loading: false,
      next: null,
      search
    });

    const { result } = renderHook(() => useHomeViewModel());

    result.current.filter();

    expect(dispatchMock).toHaveBeenCalledWith(getListOfPokemons({ limit: 10000, offset: 0, search }));
    await waitFor( () => {
        expect(result.current.pokeList.find( l => l.name === search)).toBeUndefined()
    })
  });
});
