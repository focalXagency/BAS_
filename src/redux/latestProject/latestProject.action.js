import { createAsyncThunk} from '@reduxjs/toolkit';
import { axiosPublic } from '../../utils/api/axios';

export const fetchProjects  = createAsyncThunk("main/fetchProjects ", async() =>{


        const res = await axiosPublic(`/api/home/projects`,{
            method:"Get",
        });

        const data= res.data.data;


        return data;

});


export const fetchProjectsId  = createAsyncThunk("main/fetchProjectsId ", async(id) =>{


    const res = await axiosPublic(`/api/home/project/${id}`,{
        method:"Get",
    });

    const data= res.data.data;


    return data;

});



