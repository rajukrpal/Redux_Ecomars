import { configureStore } from '@reduxjs/toolkit' ;
import cartSlise from './cartSlise';
import productApiReducer from './productApiSlise'


const store = configureStore({
    reducer:{
        cart:cartSlise, // yha par jo cart likah hai wo redux devtoolkit me dekhne par jo cart:[] dikharha hai wo yhi hai 
        productsApi: productApiReducer
    }
})

export default store ;

