import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [{
        PizzaId:12,
        name: 'mediterranean',
        quantity: 2,
        unitprice: 16,
        totalPrice: 32,
    }],
    
}


const cartSlice = createSlice({
 name:'cart',
 initialState,
 reducers:{
    addItem(state, action){
        state.cart.push(action.payload)

    },
    deleteItem(state, action){
        state.cart = state.cart.filter((item) => item.PizzaId !== action.payload);
    },
    increaseItemQuantity(state, action){
        const item = state.cart.find((item) => item.PizzaId === action.payload);
        item.quantity++;
        item.totalPrice = item.quantity * item.unitprice;

    },
    decreaseItemQuantity(state, action){
        const item = state.cart.find((item) => item.PizzaId === action.payload);
        item.quantity--;
        item.totalPrice = item.quantity * item.unitprice;

    },
    clearCart(state){
        state.cart = []
    }
 }
}) 


export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
