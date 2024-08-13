import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../service/api";

export const getInfosPokemon = createAsyncThunk<GETINFOSPOKEMONSRESULT, GETINFOSPOKEMONPROPS>(
    'pokemon/getInfosPokemon',
    async ({ url }: GETINFOSPOKEMONPROPS) => {
        
        const { data } = await api.get<GETINFOSPOKEMONSRESULT>(url)
        return data
    }
)

export const setPokemonAction = (state: POKEMONREDUX, action: {
    payload: string;
    type: string;
}) => {
    state.url = action.payload 
}