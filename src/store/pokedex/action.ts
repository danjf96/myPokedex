import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../service/api"
import { URL_IMG_POKEMON } from "../../constants";

export const getListOfPokemons = createAsyncThunk<GETLISTOFPOKEMONSRESULT, GETLISTOFPOKEMONSPROPS>(
    'pokedex/getListOfPokemons',
    async ({ offset, limit, next, search }: GETLISTOFPOKEMONSPROPS) => {
        let url = next || `pokemon?offset=${offset}&limit=${limit}`;
        
        const { data } = await api.get<GETLISTOFPOKEMONSRESULT>(url)
        if(data?.results?.length > 0)
            data.results = data.results.map( (d,index) =>  {
                const number = d?.url?.replace('https://pokeapi.co/api/v2/pokemon/','')?.replace('/','')
                return { ...d, img: `${URL_IMG_POKEMON}${number}.png`, number: number ? parseInt(number) : 0 }
            })
        return data
    }
)

export const changeSearch = (state: POKEDEXREDUX, action: {
    payload: string;
    type: string;
}) => {
    state.search = action.payload 
}