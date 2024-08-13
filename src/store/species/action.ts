import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../service/api";

export const getInfosSpecies = createAsyncThunk<GETINFOSSPECIESRESULT, GETINFOSPECIESPROPS>(
    'species/getSpecies',
    async ({ url }: GETINFOSPECIESPROPS) => {
        
        const { data } = await api.get<GETINFOSSPECIESRESULT>(url)
        return data
    }
)