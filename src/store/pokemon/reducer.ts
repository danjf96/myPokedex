import { createSlice } from "@reduxjs/toolkit"
import { getInfosPokemon, setPokemonAction } from "./action"
import { Alert } from "react-native"


const initialState: POKEMONREDUX = {
    loading: false,
    abilities: [],
    base_experience: 0,
    cries: {
        latest: "",
        legacy: ""
    },
    game_indices: [],
    height: 0,
    held_items: undefined,
    id: 0,
    is_default: false,
    location_area_encounters: "",
    moves: [],
    name: "",
    order: 0,
    past_abilities: undefined,
    past_types: undefined,
    species: {
        name: "",
        url: ""
    },
    sprites: undefined,
    stats: [],
    weight: 0,
    types: []
}

const pokemon = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
       setPokemon: setPokemonAction
    },
    extraReducers: builder =>  {
        builder
        .addCase(getInfosPokemon.pending, (state) => { state.loading = true })
        .addCase(getInfosPokemon.fulfilled, (state, action) => {
            state.abilities = action.payload.abilities;
            state.base_experience = action.payload.base_experience;
            state.height = action.payload.height;
            state.moves = action.payload.moves;
            state.name = action.payload.name;
            state.stats = action.payload.stats;
            state.weight = action.payload.weight;
            state.types = action.payload.types;
            state.species = action.payload.species;
            state.id = action.payload.id;
            state.loading = false
        })
        .addCase(getInfosPokemon.rejected, (state, action) => { Alert.alert(`${action.error}`, action.error.message)} )

    },
})


export const { setPokemon } = pokemon.actions
export  default pokemon.reducer