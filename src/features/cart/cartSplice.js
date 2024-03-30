import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
// import cartItems from "../../cartItems"

 const url ='https://course-api.com/react-useReducer-cart-project';

 
const initialState = {
    cartItems: [],
    amount:2,
    total:0,
    isLoading:true

};

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
    return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err))
})

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
    },

    //  The Three Life Cycle Items are 
    // Pending, Fulfiled, rejected
    extraReducers: {
        [getCartItems.pending]:(state) => {
            state.isLoading = true
        },

        [getCartItems.fulfilled]:(state,action) => {
            console.log(action.payload)
            state.isLoading = false;
            state.cartItems = action.payload 
        },

        // Rejected is only for the network
        [getCartItems.rejected]:(state) => {
            state.isLoading = false
        }
    }

})

// console.log(cartSplice)


export const { clearCart, removeItem,increase,decrease, calculateTotals} = cartSplice.actions
export default cartSplice.reducer