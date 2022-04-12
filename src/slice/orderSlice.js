import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllOrderProducts } from '../api/order'

export const getAllOrder = createAsyncThunk(
    "order/getAllOrder",
    async () => {
        const {data} = await getAllOrderProducts()
        return data
    }
)

const orderSlice = createSlice({
    name: "order",
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(getAllOrder.fulfilled, (state, action) => {
            state.value = action.payload
        })


    }
})

export default orderSlice.reducer