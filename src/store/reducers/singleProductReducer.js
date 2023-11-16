import { createSlice } from "@reduxjs/toolkit"
import { getSingleProduct } from "../../requests/products_req"


const initialState = {
    list: []
}

const singleProductSlice = createSlice({
    name: 'singleProduct',
    initialState,

    extraReducers: (builder) => {
        builder
        .addCase(getSingleProduct.pending,(state) => {
            state.status = 'loading'
        })
        .addCase(getSingleProduct.fulfilled, (state, action) =>{
            state.status = 'ready'
            state.list = action.payload
        })
        .addCase(getSingleProduct.rejected,(state) => {
            state.status = 'error'
        })
    }
})

export default singleProductSlice.reducer
// const LOAD_ONE_PRODUCT = 'LOAD_ONE_PRODUCT'

// export const loadOneProductAction = payload => ({type: LOAD_ONE_PRODUCT, payload})

// export const singleProductReducer = (state=[], action) => {
//     if(action.type === LOAD_ONE_PRODUCT){
//         return action.payload
//     }
//     return state
// }




