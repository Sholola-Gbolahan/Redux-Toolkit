import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems:[],
    amount:7,
    total:0,
    isLoading:true

}

const cartSplice = createSlice({
    name: 'cart',
    initialState,

})



export default cartSplice.reducer