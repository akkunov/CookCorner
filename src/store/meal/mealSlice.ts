import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { MealService } from './mealService';
import {IMeal} from './types';
import {IAuthor} from "../user/types";

export const fetchMeals = createAsyncThunk<IMeal[],undefined, {rejectValue:string}>(
    'meals/fetchMeals',
    async (_, {rejectWithValue}) => {
        const response = await MealService.fetchMeals();
        if(response.status !== 200) {
            return rejectWithValue('Meals not found')
        }
        return response.data as IMeal[];
    }
);

export const searchMeals = createAsyncThunk<IMeal[],string, {rejectValue:string}>(
    'meals/searchMeals',
    async (query,{rejectWithValue}) => {
        const response = await MealService.searchMeals(query);
        if(response.status !== 200) {
            return rejectWithValue('Meals not found')
        }
        return response.data;
    }
);

export const searchByAuthor = createAsyncThunk<IAuthor, string, {rejectValue:string}>(
    'meals/searchMeals',
    async (author, {rejectWithValue}) => {
        const response  = await  MealService.searchByAuthor(author);
        if(response.status !== 200) {
            return rejectWithValue('Author not found')
        }
        return  response.data;
    }
);

interface MealState {
    meals: IMeal[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: MealState = {
    meals: null,
    loading: false,
    error: null,
};

const mealSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMeals.pending, (state) =>{
                state.loading = true;
                state.error = null;
            } )
    },
});


export default mealSlice.reducer;