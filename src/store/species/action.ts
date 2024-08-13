import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../service/api";

export const getInfosSpecies = createAsyncThunk<GETINFOSSPECIESRESULT, GETINFOSPECIESPROPS>(
    'pokedex/getSpecies',
    async ({ url }: GETINFOSPECIESPROPS) => {
        
        const { data } = await api.get<GETINFOSSPECIESRESULT>(url)
        return data
    }
)