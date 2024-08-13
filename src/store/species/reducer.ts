import { createSlice } from "@reduxjs/toolkit"
import { getInfosSpecies } from "./action"
import { Alert } from "react-native"


const initialState: SPECIESREDUX = {
    loading: false,
    base_happiness: 0,
    capture_rate: 0,
    color: {
        name: "",
        url: ""
    },
    egg_groups: [],
    id: 0
}

// some colors are too light for the layout, so I change them here
const customColor: any = {
    yellow: '#b78b02',
    white: '#d0cfcf'
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
                state.color = (customColor?.[action.payload.color.name]) ? { ...action.payload.color, name: customColor[action.payload.color.name]} : action.payload.color ;
                state.egg_groups = action.payload.egg_groups;
                state.id = action.payload.id;
                state.loading = false;
            })
            .addCase(getInfosSpecies.rejected, (state, action) => { Alert.alert(`${action.error}`, action.error.message)} )
    },
})


export const {  } = species.actions
export  default species.reducer