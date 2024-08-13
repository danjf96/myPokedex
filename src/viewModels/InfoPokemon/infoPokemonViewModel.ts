
import { useEffect, useMemo } from 'react';
import useAppSelector from '../../hooks/store/useAppSelector';
import useAppDispatch from '../../hooks/store/useAppDispatch';
import { getInfosPokemon } from '../../store/pokemon/action';
import { getInfosSpecies } from '../../store/species/action';
import { useNavigation } from '@react-navigation/native';
import { setMyList } from '../../store/pokedex/reducer';

const useInfoPokemonViewModel = () => {
  const dispatch = useAppDispatch();
  const nav = useNavigation()
  const { pokemon, species, pokedex } = useAppSelector( ({ pokemon, species, pokedex }) => ({ pokemon, species, pokedex }) )
  const { url } = pokemon

  const savePokemon = () => {
    const changePoke = { name: pokemon.name, url: pokemon.url as string}
    dispatch(setMyList({ list: [changePoke], type: verifyIfIsSave ? 'REMOVE' : 'ADD' }))
  }

  const verifyIfIsSave: boolean = useMemo(() => { 
    return pokedex.myList.find( my => my.name === pokemon.name) ? true : false
  }, [pokedex.myList])

  useEffect( () => {
    url && dispatch(getInfosPokemon({ url: url || '' }))
  }, [])

  useEffect( () => {
    dispatch(getInfosSpecies({ url: pokemon.species.url }))
  }, [pokemon.species.url])
  
  return {
    pokemon,
    species,
    navigation: nav,
    savePokemon,
    verifyIfIsSave
  };
};

export default useInfoPokemonViewModel;