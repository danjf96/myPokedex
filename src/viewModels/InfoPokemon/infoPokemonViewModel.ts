
import { useEffect } from 'react';
import useAppSelector from '../../hooks/store/useAppSelector';
import useAppDispatch from '../../hooks/store/useAppDispatch';
import { getInfosPokemon } from '../../store/pokemon/action';
import { getInfosSpecies } from '../../store/species/action';

const useInfoPokemonViewModel = () => {
  const dispatch = useAppDispatch();
  const { pokemon, species } = useAppSelector( ({ pokemon, species }) => ({ pokemon, species }) )
  const { url } = pokemon

  useEffect( () => {
    url && dispatch(getInfosPokemon({ url: url || '' }))
  }, [])

  useEffect( () => {
    dispatch(getInfosSpecies({ url: pokemon.species.url }))
  }, [pokemon.species])
  
  return {
    pokemon,
    species
  };
};

export default useInfoPokemonViewModel;