import { configureStore } from '@reduxjs/toolkit';
import mainSlice from './mainSlice/main.slice';



const store = configureStore({
    reducer:{
        mainSlice,
    }
});

export default store;