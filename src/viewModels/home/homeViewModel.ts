import useAppSelector from '../../hooks/store/useAppSelector';
import useAppDispatch from '../../hooks/store/useAppDispatch';
import { useEffect, useMemo } from 'react';
import { getListOfPokemons } from '../../store/pokedex/action';

const useHomeViewModel = () => {
  const { listOfPokemons, loading } = useAppSelector( state => state.pokedex);
  const dispatch = useAppDispatch();

  const getList = () => {
    dispatch(getListOfPokemons({ limit: 20, offset: 0 }))
  }
  const pokeList = useMemo( () => {    
    return listOfPokemons;
  }, [listOfPokemons])

  const seeDetails = (url: string) => {
    console.log(url)
  }

  const capturePokemon = (url: string) => {
    console.log(url)
  }

  useEffect( () => {

    getList();
  }, [])
  
  return {
    pokeList,
    loading,
    getList,
    seeDetails,
    capturePokemon
  };
};

export default useHomeViewModel;