import { createSlice } from "@reduxjs/toolkit"
import { changeSearch, getListOfPokemons, setMyListPoke } from "./action"
import { Alert } from "react-native"

const initialState: POKEDEXREDUX = {
    loading: false,
    listOfPokemons: [],
    count: 0,
    search: '',
    myList: []
}

const pokedex = createSlice({
    name: 'pokedex',
    initialState,
    reducers: {
        changeSearchInput: changeSearch,
        setMyList: setMyListPoke
    },
    extraReducers: builder =>  {
        builder
            .addCase(getListOfPokemons.pending, (state) => { state.loading = true })
            .addCase(getListOfPokemons.fulfilled, (state, action) => {
                const { count, results, next, previous } = action.payload
                console.log('aqui', next, previous)
                state.listOfPokemons = next != state.next && (next && previous)? [...state.listOfPokemons, ...results] : results ;
                if(state.search)
                    state.listOfPokemons =  state.listOfPokemons.filter( s => s.name.includes(state.search?.toLocaleLowerCase() ?? ''))
                state.count = count;
                state.next = next;
                state.previous = previous;
                state.loading = false;
            })
            .addCase(getListOfPokemons.rejected, (state, action) => { Alert.alert(`${action.error}`, action.error.message)} )

    },
})


export const { changeSearchInput, setMyList } = pokedex.actions
export  default pokedex.reducer