
import { useCallback, useEffect, useMemo } from 'react';
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

  const poke = useMemo( () => {
    return pokemon
  }, [pokemon.name])

  const pokeSpecies = useMemo( () => {
    return species
  }, [species.id])

  const savePokemon = useCallback(() => {
    const changePoke = { name: pokemon.name, url: pokemon.url as string}
    dispatch(setMyList({ list: [changePoke], type: verifyIfIsSave ? 'REMOVE' : 'ADD' }))
  }, [pokemon.name, pokemon.url, pokedex.myList])

  const verifyIfIsSave = useMemo(() => { 
    return pokedex?.myList?.find( my => my.name === pokemon.name) ? true : false
  }, [pokedex.myList, pokemon.name])

  useEffect( () => {
    url && dispatch(getInfosPokemon({ url: url || '' }))
  }, [url])

  useEffect( () => {
    if (pokemon.species.url)
      dispatch(getInfosSpecies({ url: pokemon.species.url }));
  }, [pokemon.species.url])
  
  return {
    pokemon: poke,
    species: pokeSpecies,
    navigation: nav,
    savePokemon,
    verifyIfIsSave
  };
};

export default useInfoPokemonViewModel;