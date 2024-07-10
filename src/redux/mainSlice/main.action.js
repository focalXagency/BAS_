import { createAsyncThunk} from '@reduxjs/toolkit';
import { axiosPublic } from '../../utils/api/axios';

export const fetchCarusalImages = createAsyncThunk("main/fetchCarusalImages", async() =>{


        const res = await axiosPublic(`/api/carouselsim`,{
            method:"Get",
        });

        const data= res.data.data;

        return data;

});

export const fetchCarusalTexts= createAsyncThunk("main/fetchCarusalTexts", async(lang) =>{

    let last ;

    if(lang==='en'){

        last="carouselsen";

    }else
    {
        last = "carouselsar"
    }

    const res = await axiosPublic(`/api/${lang}/${last}`,{
        method:"Get",
    });

    const data= res.data.data;

    return data;

});

export const fetchAboutTexts= createAsyncThunk("main/fetchAboutTexts", async(lang) =>{



    const res = await axiosPublic(`/api/${lang}/abouts`,{
        method:"Get",
    });

    const data= res.data.data;

    return data;

});

export const fetchNewsTexts= createAsyncThunk("main/fetchNewsTexts", async(lang) =>{

    const res = await axiosPublic(`/api/${lang}/postslast`,{
        method:"Get",
    });

    const data= res.data.data;

    return data;

});

