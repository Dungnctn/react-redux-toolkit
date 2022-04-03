import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartProducts") ? JSON.parse(localStorage.getItem("cartProducts")) : [],
    cartTotalQuantity: 0,
    cartTotalAmout: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);
            if(itemIndex >=0){
                state.cartItems[itemIndex].quantity += 1;
                toast.info(`Thêm số lượng ${state.cartItems[itemIndex].name} vào giỏ hàng`, {
                    position: "top-right"
                })

            } else{
                const tempProduct = {...action.payload, quantity: 1};
                state.cartItems.push(tempProduct);
                toast.success(`Thêm ${action.payload.name} vào giỏ hàng`, {
                    position: "top-right"
                })
            }

            localStorage.setItem("cartProducts", JSON.stringify(state.cartItems))
        },
        removeCart(state, action){
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
            localStorage.setItem("cartProducts", JSON.stringify(state.cartItems));
            toast.error(`Xóa ${action.payload.name} khỏi giỏ hàng`, {
                position: "top-right"
            });
        },
        decreaseCart(state, action){
            const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);
            if(state.cartItems[itemIndex].quantity > 1){
                state.cartItems[itemIndex].quantity -= 1
            } else if (state.cartItems[itemIndex].quantity === 1){
                state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
                toast.error(`Xóa ${action.payload.name} khỏi giỏ hàng`, {
                    position: "top-right"
                })
            }
            localStorage.setItem("cartProducts", JSON.stringify(state.cartItems));
        },
        increaseCart(state, action){
            const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);
            if(state.cartItems[itemIndex].quantity < 10) {
                state.cartItems[itemIndex].quantity += 1
            }
            localStorage.setItem("cartProducts", JSON.stringify(state.cartItems));
        },
        clearCart(state){
            state.cartItems = [];
            toast.error(`Đã xóa toàn bộ giỏ hàng`, {
                position: "top-right"
            })
            localStorage.removeItem("cartProducts", JSON.stringify(state.cartItems));
        },
        getTotal(state){
            let {total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, quantity } = cartItem
                const itemTotal = price * quantity

                cartTotal.total += itemTotal
                cartTotal.quantity += quantity

                return cartTotal
            }, {
                total: 0,
                quantity: 0
            });
            state.cartTotalQuantity = quantity;
            state.cartTotalAmout = total
        }
    }
})

export const { addToCart, removeCart, decreaseCart, increaseCart, clearCart, getTotal } = cartSlice.actions;

export default cartSlice.reducer