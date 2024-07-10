import { createSlice } from '@reduxjs/toolkit';
import { fetchProjects ,fetchProjectsId} from './latestProject.action';


const initialState = {

    latestProject:[],
    loadingLatestProject:false,
    projectId:{},
}

const latestProjectSlice = createSlice({
    name: "latestProjectSlice",
    initialState ,
    reducers:{
    },

    extraReducers: (builder)=> {

        builder.addCase(fetchProjects.pending, (state)=>{
            state.loadingLatestProject =true;

        });

        builder.addCase(fetchProjects.fulfilled, (state,action)=>{

            state.latestProject=  action.payload;
                
            state.loadingLatestProject =false;
        });

        builder.addCase(fetchProjects.rejected, (state)=>{
            state.loadingLatestProject =false;
            state.latestProject = []
        });

        builder.addCase(fetchProjectsId.pending, (state)=>{
            state.loadingLatestProject =true;

        });

        builder.addCase(fetchProjectsId.fulfilled, (state,action)=>{

            state.projectId=  action.payload;
                
            state.loadingLatestProject =false;
        });

        builder.addCase(fetchProjectsId.rejected, (state)=>{
            state.loadingLatestProject =false;
            state.projectId = []
        });



    }



});


export default latestProjectSlice.reducer;