import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../service/api"

export const getListOfPokemons = createAsyncThunk<GETLISTOFPOKEMONSRESULT, GETLISTOFPOKEMONSPROPS>(
    'pokedex/getListOfPokemons',
    async ({ offset, limit }: GETLISTOFPOKEMONSPROPS) => {
        const { data } = await api.get<GETLISTOFPOKEMONSRESULT>(`pokemon?offset=${offset}&limit=${limit}`)
        return data
    }
)