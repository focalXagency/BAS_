import { createAsyncThunk} from '@reduxjs/toolkit';
import { axiosPublic } from '../../utils/api/axios';

export const fetchCaseStuies = createAsyncThunk("main/fetchCaseStuies", async() =>{


        const res = await axiosPublic(`/api/case/categories`,{
            method:"Get",
        });

        const data= res.data.data;


        return data;

});





