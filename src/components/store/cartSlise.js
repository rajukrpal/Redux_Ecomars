import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlise = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCard(state,action){
            state.push(action.payload)
        },

        deleteToCart(state, action) {
            
            return state.filter(item=>item.id !== action.payload)
        }
        
    }
})

export const {addToCard , deleteToCart} = cartSlise.actions;
export default cartSlise.reducer; 