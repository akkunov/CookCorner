import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { UserService } from './userService';
import {ILogin, ILoginResponse} from './types';


export const loginUser = createAsyncThunk<ILoginResponse, ILogin, {rejectValue:string}>(
    'users/loginUser',
    async (data, {rejectWithValue}) => {
            const response = await UserService.login(data);
            if (response.status !==200){
                return rejectWithValue('error response')
            }
            return response.data as ILoginResponse;
    }
)


interface userState {
    user: ILoginResponse | null;
    loading: boolean;
    error: string | null;
}

const initialState: userState = {
    user: null,
    loading: false,
    error: null,
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to login';
            });
    },

})

export default userSlice.reducer