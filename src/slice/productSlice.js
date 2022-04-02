import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { useParams } from "react-router-dom"
import { add, get, getAll, removeProduct, updateProduct } from "../api/product"

export const getProduct = createAsyncThunk(
    "product/getProduct",   //tên hành động
    async () => {
        const {data} = await getAll()
        return data
    }
)

export const addProduct = createAsyncThunk(
    "product/addProduct",
    async (dataProduct) => {
        const {data} = await add(dataProduct);
        return data
    }   
)

export const editProduct = createAsyncThunk(
    "product/editProduct",
    async (dataProduct) => {
        const {data} = await updateProduct(dataProduct);
        return data;
    }
)

export const deleteProduct = createAsyncThunk(
    "product/deleteProduct",   //tên hành động
    async (id) => {
        const alert = window.confirm('Ban co muon xoa san pham')
        if(alert){
            const {data} = await removeProduct(id);
            return data
        }
    }
)


const productSlice = createSlice({
    name: 'product',
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        // nếu call api thành công thì chạy hàm
        builder.addCase(getProduct.fulfilled, (state, action) => {  //action sẽ là gtri của data reuturn
            // console.log(action.payload);
            state.value = action.payload    //gán vào state ban đầu
        })

        builder.addCase(deleteProduct.fulfilled, (state, action) => {                   //action sẽ là gtri của data reuturn
            state.value = state.value.filter(item => item._id !== action.payload._id )      //gán vào state ban đầu
        })

        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.value.unshift(action.payload);
        })

        builder.addCase(editProduct.fulfilled, (state, action) => {
            state.value.push(action.payload);
        })
    }
})

// const productDetail = createSlice({
//     name: 'product',
//     initialState: {
//         value: []
//     },
//     extraReducers: (builder) => {
//         // nếu call api thành công thì chạy hàm
//         builder.addCase(getProduct.fulfilled, (state, action) => {  //action sẽ là gtri của data reuturn
//             console.log(action.payload);
//             state.value = action.payload    //gán vào state ban đầu
//         }) 
//     }
// })

// export const { getProduct } = productSlice.actions 
export default productSlice.reducer