import { createSlice } from '@reduxjs/toolkit';
import { fetchCarusalImages  , fetchCarusalTexts ,fetchAboutTexts , fetchNewsTexts} from './main.action';


const initialState = {

    carusalImages:[],
    carusalText:{
    },
    aboutText:{
    },

    news:{
    },

    loadingImages :false,
    loadingTexts :false,

}

const mainSlice = createSlice({
    name: "main",
    initialState ,

    reducers:{

    },

    extraReducers: (builder)=> {

        builder.addCase(fetchCarusalImages.pending, (state)=>{
            state.loadingImages =true;

        });

        builder.addCase(fetchCarusalImages.fulfilled, (state,action)=>{

            state.carusalImages=  action.payload;
                
            state.loadingImages =false;
        });

        builder.addCase(fetchCarusalImages.rejected, (state)=>{
            state.loadingImages =false;
            state.carusalImages = []
        });

        builder.addCase(fetchCarusalTexts.pending, (state)=>{
            state.loadingTexts =true;

        });

        builder.addCase(fetchCarusalTexts.fulfilled, (state,action)=>{
            
            // state.carusalText=  {...action.payload};
            state.carusalText= {...state.carusalText ,[action.meta.arg]:action.payload};



            state.loadingTexts =false;
        });

        builder.addCase(fetchCarusalTexts.rejected, (state)=>{
            state.loadingTexts =false;
            state.carusalText = {}
        });

        builder.addCase(fetchAboutTexts.fulfilled, (state,action)=>{
            
            // state.carusalText=  {...action.payload};
            state.aboutText= {...state.aboutText ,[action.meta.arg]:action.payload};
        });

        builder.addCase(fetchAboutTexts.rejected, (state)=>{
            state.aboutText = {}
        });

        builder.addCase(fetchNewsTexts.fulfilled, (state,action)=>{
            
            state.news= {...state.news ,[action.meta.arg]:action.payload};
        });

        builder.addCase(fetchNewsTexts.rejected, (state)=>{
            state.news = {}
        });

    }



});

// export const {storeImages} = mainSlice.actions;

export default mainSlice.reducer;