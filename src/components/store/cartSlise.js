import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlise = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCard(state,action){
            state.push(action.payload)
        },

        delete(){
            // todo
        }
    }
})

export const {addToCard} = cartSlise.actions;

export default cartSlise.reducer; 