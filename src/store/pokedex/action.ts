import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../service/api"

export const getListOfPokemons = createAsyncThunk<GETLISTOFPOKEMONSRESULT, GETLISTOFPOKEMONSPROPS>(
    'pokedex/getListOfPokemons',
    async ({ offset, limit, next }: GETLISTOFPOKEMONSPROPS) => {
        let url = next || `pokemon?offset=${offset}&limit=${limit}`;
        
        const { data } = await api.get<GETLISTOFPOKEMONSRESULT>(url)
        return data
    }
)