import { configureStore } from '@reduxjs/toolkit' ;
import cartSlise from './cartSlise';


const store = configureStore({
    reducer:{
        cart:cartSlise // yha par jo cart likah hai wo redux devtoolkit me dekhne par jo cart:[] dikharha hai wo yhi hai 
    }
})

export default store ;

