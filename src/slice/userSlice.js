import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllUser, signinAPI, signupAPI } from '../api/user';


const initialState = {
    isAuthenticate : false,
    value: [],
    settings: {}
};

export const getAllUserAdmin = createAsyncThunk(
    "user/getAllUserAdmin",
    async () => {
        const {data} = await getAllUser();
        const checkRole = data.user.filter(item => item.role === 1)
        return checkRole
    }
)

export const getAllUserMember = createAsyncThunk(
    "user/getAllUserMember",
    async () => {
        const {data} = await getAllUser();
        const checkMember = data.user.filter(item => item.role === 0)
        return checkMember
    }
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
        builder.addCase(getAllUserAdmin.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(getAllUserMember.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
    
})

export default userSlice.reducer