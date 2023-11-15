import { createSlice } from "@reduxjs/toolkit"
import { getAllCategories } from "../../requests/categories_req"


const initialState = 
{    status: 'idle', 
    list: []
}


const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        
        },
        extraReducers: (builder) => {
            builder
            .addCase(getAllCategories.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.status = 'ready'
                state.list = action.payload
            })
            .addCase(getAllCategories.rejected, (state) => {
                state.status = 'error'
            })
        }
    })

    export default categorySlice.reducer



