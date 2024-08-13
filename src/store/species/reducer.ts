import { createSlice } from "@reduxjs/toolkit"
import { getInfosSpecies } from "./action"
import { Alert } from "react-native"


const initialState: SPECIESREDUX = {
    loading: false,
}

const species = createSlice({
    name: 'species',
    initialState,
    reducers: {
       
    },
    extraReducers: builder =>  {
        builder
            .addCase(getInfosSpecies.pending, (state) => { state.loading = true })
            .addCase(getInfosSpecies.fulfilled, (state, action) => {
            
            })
            .addCase(getInfosSpecies.rejected, (state, action) => { Alert.alert(`${action.error}`, action.error.message)} )
    },
})


export const {  } = species.actions
export  default species.reducer