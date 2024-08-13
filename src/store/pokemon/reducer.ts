import { createSlice } from "@reduxjs/toolkit"
import { getInfosPokemon } from "./action"
import { Alert } from "react-native"


const initialState: POEKMONREDUX = {
    loading: false
}

const pokemon = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
       
    },
    extraReducers: builder =>  {
        builder
        .addCase(getInfosPokemon.pending, (state) => { state.loading = true })
        .addCase(getInfosPokemon.fulfilled, (state, action) => {
           
        })
        .addCase(getInfosPokemon.rejected, (state, action) => { Alert.alert(`${action.error}`, action.error.message)} )

    },
})


export const {  } = pokemon.actions
export  default pokemon.reducer