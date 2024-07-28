import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import { MealService } from './mealService';
import {errorResponse, IMeal} from './types';
import {IAuthor} from "../user/types";

export const fetchMeals = createAsyncThunk(
    'meals/fetchMeals',
    async () => {
        const response = await MealService.fetchMeals();
        return response.data;
    }
);

export const searchMeals = createAsyncThunk(
    'meals/searchMeals',
    async (query: string) => {
        const response = await MealService.searchMeals(query);
        return response.data;
    }
);

export const searchByAuthor = createAsyncThunk(
    'meals/searchByAuthor',
    async (author: string) => {
        const response = await MealService.searchByAuthor(author);
        return response.data;
    }
);

interface MealState {
    meals: IMeal[];
    loading: boolean;
    error: string | null;
}

const initialState: MealState = {
    meals: [],
    loading: false,
    error: null,
};

const mealSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMeals.pending, (state:MealState) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMeals.fulfilled, (state:MealState, action:PayloadAction<IMeal[]>) => {
                state.loading = false;
                state.meals = action.payload;
            })
            .addCase(fetchMeals.rejected, (state:MealState, action:PayloadAction<errorResponse>) => {
                state.loading = false;
                state.error = action.payload.message || 'Failed to fetch meals';
            })
            .addCase(searchMeals.pending, (state:MealState) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchMeals.fulfilled, (state:MealState, action:PayloadAction<IMeal[]>) => {
                state.loading = false;
                state.meals = action.payload;
            })
            .addCase(searchMeals.rejected, (state:MealState, action:PayloadAction<errorResponse>) => {
                state.loading = false;
                state.error = action.payload.message || 'Failed to search meals';
            })
            .addCase(searchByAuthor.pending, (state:MealState) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchByAuthor.fulfilled, (state:MealState, action:PayloadAction<IAuthor>) => {
                state.loading = false;
                state.meals = action.payload;
            })
            .addCase(searchByAuthor.rejected, (state:MealState, action:PayloadAction<errorResponse>) => {
                state.loading = false;
                state.error = action.payload.message || 'Failed to search by author';
            });
    },
});

export default mealSlice.reducer;