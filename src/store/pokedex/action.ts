import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../service/api"
import { URL_IMG_POKEMON } from "../../constants";
import { setDataStorage } from "../../hooks/storage";

export const getListOfPokemons = createAsyncThunk<GETLISTOFPOKEMONSRESULT, GETLISTOFPOKEMONSPROPS>(
    'pokedex/getListOfPokemons',
    async ({ offset, limit, next, search }: GETLISTOFPOKEMONSPROPS) => {
        let url = next || `pokemon?offset=${offset}&limit=${limit}`;
        
        const { data } = await api.get<GETLISTOFPOKEMONSRESULT>(url)
        if(data?.results?.length > 0)
            data.results = data.results.map( (d,index) =>  {
                const number = d?.url?.replace('https://pokeapi.co/api/v2/pokemon/','')?.replace('/','')
                return { ...d, img: `${URL_IMG_POKEMON}${number}.png`, number: number ? parseInt(number) : 0 }
            })
        return data
    }
)

export const changeSearch = (state: POKEDEXREDUX, action: {
    payload: string;
    type: string;
}) => {
    state.search = action.payload 
}

export const setMyListPoke = (state: POKEDEXREDUX, action: {
    payload: { list: LISTPOKES[], type: 'ADD' | 'REMOVE' };
    type: string;
}) => {
    let list: LISTPOKES[] = []
    switch(action.payload.type){
        case 'ADD':
            action.payload.list.map( l =>  {
                if(state.myList.find( sl => sl.name === l.name))
                    list.push(l)
            })
            list = [...list,...state.myList]
            state.myList = list
            break;
        case 'REMOVE':
            list = state.myList.filter( l => action.payload.list.find( al => al.name != l.name))
            state.myList = list
            break;
    }

    setDataStorage('MY_LIST', state)
}