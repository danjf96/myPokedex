import useAppSelector from '../../hooks/store/useAppSelector';
import useAppDispatch from '../../hooks/store/useAppDispatch';
import { useEffect, useMemo } from 'react';
import { getListOfPokemons } from '../../store/pokedex/action';
import { changeSearchInput, setMyList } from '../../store/pokedex/reducer';
import { useNavigation } from '@react-navigation/native';
import { setPokemon } from '../../store/pokemon/reducer';

const useHomeViewModel = () => {
  const { listOfPokemons, loading, next, search, myList } = useAppSelector( state => state.pokedex);
  const dispatch = useAppDispatch();
  const nav = useNavigation()

  const getList = () => {
    dispatch(getListOfPokemons({ limit: 20, offset: 0 }))
  }
  const pokeList = useMemo( () => {    
    return listOfPokemons;
  }, [listOfPokemons])

  const myPokeList = useMemo( () => {    
    return myList;
  }, [myList])

  const isLoading = useMemo( () => { return loading}, [loading])

  const seeDetails = (url: string) => {
    dispatch(setPokemon(url))
    nav.navigate('InfoPokemon' as never)
  }

  const capturePokemon = (poke: LISTPOKES) => {
    dispatch(setMyList({ list: [poke], type: verifyIfIsSave(poke.name) ? 'REMOVE' : 'ADD' }))
  }

  const pagination = () => {
    if(next)
      dispatch(getListOfPokemons({ limit: 20, offset: 0, next }))
  }

  const filter = () => {
    dispatch(getListOfPokemons({ limit: search ? 10000 : 20, offset: 0, search }))
  }
  
  const changeSearchValue = (text: string) => { dispatch(changeSearchInput(text))  }

  const verifyIfIsSave = (name: string) => {
    return myList.find( my => my.name === name) ? true : false
  }

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
    changeSearchValue,
    verifyIfIsSave,
    myPokeList
  };
};

export default useHomeViewModel;