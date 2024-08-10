import { createSlice } from "@reduxjs/toolkit"

const initialState: POKEDEXREDUX = {
    loading: false,
    listOfPokemons: []
}

const pokedex = createSlice({
    name: 'todos',
    initialState,
    reducers: {}
})

export  default pokedex.reducer