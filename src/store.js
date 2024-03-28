import { configureStore } from "@reduxjs/toolkit";
import cartReducer  from'./features/cart/cartSplice'
import modalReducer from "./features/modal/modalSlice";


export const store = configureStore({
    
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
    },
});