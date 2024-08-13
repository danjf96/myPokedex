import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../service/api";

export const getInfosSpecies = createAsyncThunk<GETINFOSPOKEMONSRESULT, GETINFOSPECIESPROPS>(
    'pokedex/getSpecies',
    async ({ url }: GETINFOSPECIESPROPS) => {
        
        const { data } = await api.get<GETINFOSPOKEMONSRESULT>(url)
        return data
    }
)