import {configureStore} from "@reduxjs/toolkit";
import userReducer from './user/userSlice';
import mealReducer from './meal/mealSlice';


export  const store = configureStore({
    reducer:{
        user: userReducer,
        meal: mealReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch