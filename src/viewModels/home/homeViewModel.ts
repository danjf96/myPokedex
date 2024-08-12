import useAppSelector from '../../hooks/store/useAppSelector';
import useAppDispatch from '../../hooks/store/useAppDispatch';
import { useEffect, useMemo } from 'react';
import { getListOfPokemons } from '../../store/pokedex/action';

const useHomeViewModel = () => {
  const { listOfPokemons, loading, next } = useAppSelector( state => state.pokedex);
  const dispatch = useAppDispatch();

  const getList = () => {
    dispatch(getListOfPokemons({ limit: 20, offset: 0 }))
  }
  const pokeList = useMemo( () => {    
    return listOfPokemons;
  }, [listOfPokemons])

  const isLoading = useMemo( () => { return loading}, [loading])

  const seeDetails = (url: string) => {
    console.log(url)
  }

  const capturePokemon = (url: string) => {
    console.log(url)
  }

  const pagination = () => {
    dispatch(getListOfPokemons({ limit: 20, offset: 0, next }))
  }

  useEffect( () => {
    getList();
  }, [])
  
  return {
    pokeList,
    isLoading,
    seeDetails,
    capturePokemon,
    pagination
  };
};

export default useHomeViewModel;