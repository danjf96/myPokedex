import useAppSelector from '../../hooks/store/useAppSelector';
import useAppDispatch from '../../hooks/store/useAppDispatch';
import { useEffect, useMemo } from 'react';
import { getListOfPokemons } from '../../store/pokedex/action';
import { changeSearchInput } from '../../store/pokedex/reducer';
import { useNavigation } from '@react-navigation/native';

const useHomeViewModel = () => {
  const { listOfPokemons, loading, next, search } = useAppSelector( state => state.pokedex);
  const dispatch = useAppDispatch();
  const nav = useNavigation()

  const getList = () => {
    dispatch(getListOfPokemons({ limit: 20, offset: 0 }))
  }
  const pokeList = useMemo( () => {    
    return listOfPokemons;
  }, [listOfPokemons])

  const isLoading = useMemo( () => { return loading}, [loading])

  const seeDetails = (url: string) => {
    nav.navigate('InfoPokemon' as never)
  }

  const capturePokemon = (url: string) => {
    console.log(url)
  }

  const pagination = () => {
    if(next)
      dispatch(getListOfPokemons({ limit: 20, offset: 0, next }))
  }

  const filter = () => {
    dispatch(getListOfPokemons({ limit: search ? 10000 : 20, offset: 0, search }))
  }
  
  const changeSearchValue = (text: string) => { dispatch(changeSearchInput(text))  }

  useEffect( () => {
    getList();
  }, [])
  
  return {
    pokeList,
    isLoading,
    seeDetails,
    capturePokemon,
    pagination,
    filter,
    changeSearchValue
  };
};

export default useHomeViewModel;