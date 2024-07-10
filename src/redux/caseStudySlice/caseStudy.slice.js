import { createSlice } from '@reduxjs/toolkit';
import { fetchCaseStuies } from './caseStudy.action';


const initialState = {


    caseStudy:[],
    loadingCaseStudy:false,


}

const caseStudySlice = createSlice({
    name: "caseStudySlice",
    initialState ,

    reducers:{

    },

    extraReducers: (builder)=> {

        builder.addCase(fetchCaseStuies.pending, (state)=>{
            state.loadingCaseStudy =true;

        });

        builder.addCase(fetchCaseStuies.fulfilled, (state,action)=>{

            state.caseStudy=  action.payload;
                
            state.loadingCaseStudy =false;
        });

        builder.addCase(fetchCaseStuies.rejected, (state)=>{
            state.loadingCaseStudy =false;
            state.caseStudy = []
        });



    }



});


export default caseStudySlice.reducer;