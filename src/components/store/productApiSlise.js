

// FIRST ------------ METHOD 111111111111111111111 ----------------- FIRST METHOD

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     data: [],
//     loading: false,
//     error: null
// };

// const productApiSlice = createSlice({
//     name: "productsApi",
//     initialState,
//     reducers: {
//         fetchProductsStart(state) {
//             state.loading = true;
//             state.error = null;
//         },
//         fetchProductsSuccess(state, action) {
//             state.loading = false;
//             state.data = action.payload;
//         },
//         fetchProductsFailure(state, action) {
//             state.loading = false;
//             state.error = action.payload;
//         }
//     }
// });

// export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productApiSlice.actions;

// export default productApiSlice.reducer;

// export const fetchProducts = () => async (dispatch) => { // es ko call karna hai product page me useEffect me 
//     dispatch(fetchProductsStart());
    
//     try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
        
//         dispatch(fetchProductsSuccess(data));
//     } catch (error) {
//         console.log(error)
//         dispatch(fetchProductsFailure(error.message));
//     }
// };








// SECOND METHOD --------- 22222222222222222222222222 ------------- SECOND METHOD

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     data: [],
// };

// const productApiSlice = createSlice({
//     name: "productsApi",
//     initialState,
//     reducers: {
//         fetchProductsSuccess(state, action) {
//             state.data = action.payload;
//     },
// }
// });

// export const { fetchProductsSuccess } = productApiSlice.actions;

// export default productApiSlice.reducer;

// export function fetchProducts(){  // // es ko call karna hai product page me useEffect me 

//     return async function getProductsThunk(dispatch , getState){
//         const data = await fetch("https://fakestoreapi.com/products");
//         const result = await data.json();
//         dispatch(fetchProductsSuccess(result));
//     }
// } 
        
        



// createAsyncThunk use midalwere  

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    statuas:'idle',
    loading:false,
    error:false,
};

const productApiSlice = createSlice({
    name: "productsApi",
    initialState,
    reducers: {
    //     fetchProductsSuccess(state, action) {
    //         state.data = action.payload;
    // },
},
extraReducers: (builder)=>{
    builder
    .addCase(fetchProducts.pending,(state,action)=>{
        state.statuas = "Loading..";
        state.loading = true;
        state.error = false;
    })
    .addCase(fetchProducts.fulfilled,(state , action )=>{ 
        state.data = action.payload;
        state.statuas = "idle";
        state.loading = false;
        state.error = false;
    })
    .addCase(fetchProducts.rejected,(state,action)=>{
        state.statuas = "error";
        state.loading = false;
        state.error = true;
    })
}

});

export const { fetchProductsSuccess } = productApiSlice.actions;

export default productApiSlice.reducer;

export const fetchProducts = createAsyncThunk('productsApi/get' , async () =>{ //  autometic handal state "pending" , "fulfilled" "rejected" 
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    return result ;
})
