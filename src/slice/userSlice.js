import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { signinAPI, signupAPI } from '../api/user';


const initialState = {
    isAuthenticate : false,
    value: [],
    settings: {}
};

export const getAllUser = createAsyncThunk(
    
)

export const regist = createAsyncThunk(
    "user/regist",
    async (dataUser) => {
        const { data } = await signupAPI(dataUser);
        return data
    }
)

export const login = createAsyncThunk(
    "user/login",
    async (dataUser) => {
        const {data} = await signinAPI(dataUser);
        return data;
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(regist.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(login.fulfilled, (state, action) => {
            localStorage.setItem('userToken', JSON.stringify(action.payload));
            state.isAuthenticate = true;
        })
    }
    
})

export default userSlice.reducer