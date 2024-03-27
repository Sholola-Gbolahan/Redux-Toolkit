import { createSlice } from "@reduxjs/toolkit"
import cartItems
 from "../../cartItems"
 
const initialState = {
    cartItems:cartItems,
    amount:2,
    total:0,
    isLoading:true

}

const cartSplice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart:(state) => {
            state.cartItems = [];
        },
        removeItem : (state, action)=> {
            const itemID= action.payload
            state.cartItems = state.cartItems.filter( (item) => 
            item.id !== itemID
            )
        },

        increase: (state, {payload}) => {
            const cartItem = state.cartItems.find((item) =>
            item.id === payload.id);
            cartItem.amount = cartItem.amount +1;
        },
        decrease: (state, {payload}) => {
            const cartItem = state.cartItems.find((item) =>
            item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals:(state) =>{
            let amount = 0;
            let total = 0;

            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount *item.price
            })

            state.total = total;
            state.amount = amount
        }
    }

})

console.log(cartSplice)


export const { clearCart, removeItem,increase,decrease, calculateTotals} = cartSplice.actions
export default cartSplice.reducer