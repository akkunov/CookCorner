import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import { UserService } from './userService';
import {errorResponse, ILogin, ILoginResponse} from './types';



export const loginUser = createAsyncThunk(
    'users/loginUser',
    async (data:ILogin, {rejectWithValue}) => {
        try {
            const response = await UserService.login(data);
            if (response.status !==200){
                throw new Error('error response')
            }
            return response.data
            
        }catch (e:any) {
            return rejectWithValue(e)
        }
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
    reducers: {
        start: () => {
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state:userState) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state:userState, action:PayloadAction<ILoginResponse>) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state:userState, action:PayloadAction<errorResponse>) => {
                state.loading = false;
                state.error = action.payload.message || 'Failed to login';
            });
    },

})

export default userSlice.reducer