import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slice/productSlice';
import userReducer from '../slice/userSlice';
import categoryReducer from '../slice/categorySlice'

export const store = configureStore({
  reducer: {  //data
    product: productReducer,
    user: userReducer,
    category: categoryReducer,
  },
});
