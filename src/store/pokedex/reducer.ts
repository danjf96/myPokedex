import { createSlice } from "@reduxjs/toolkit"
import { getListOfPokemons } from "./action"
import { Alert } from "react-native"

const initialState: POKEDEXREDUX = {
    loading: false,
    listOfPokemons: [],
    count: 0
}

const pokedex = createSlice({
    name: 'pokedex',
    initialState,
    reducers: {},
    extraReducers: builder =>  {
        builder
            .addCase(getListOfPokemons.pending, (state) => { state.loading = true })
            .addCase(getListOfPokemons.fulfilled, (state, action) => {
                const { count, results, next, previous } = action.payload
                state.listOfPokemons = next != state.next ? [...state.listOfPokemons, ...results] : results ;
                state.count = count;
                state.next = next;
                state.previous = previous;
                state.loading = false;
            })
            .addCase(getListOfPokemons.rejected, (state, action) => { Alert.alert(`${action.error}`, action.error.message)} )

    },
})

export  default pokedex.reducer