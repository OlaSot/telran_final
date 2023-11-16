import { createSlice } from "@reduxjs/toolkit";
import { getProductsByCategory } from "../../requests/products_req";

const initialState = {
    list: {
        data: []
    }
}

const productByCategorySlice = createSlice({
    name: 'productsByCategory',
    initialState,
    reducers: {
        sort_prods_cat(state, action) {
        if (action.payload === 'title') {
         state.list.data.sort((a, b) => a.title.localeCompare(b.title));
        } else if (action.payload === 'price_asc') {
            state.list.data.sort((a, b) => a.price - b.price);
        } else if (action.payload === 'price_desc') {
            state.list.data.sort((a, b) => b.price - a.price);
        } else {
            state.list.data.sort((a, b) => a.id - b.id)
        }
    },
    filter_products_cat(state, action){
        const {minValue, maxValue} = action.payload
                
    state.list.data.map(el => {
            let actualPrice = el.discont_price || el.price;
            if (actualPrice >= minValue && actualPrice <= maxValue) {
                el.show_product = true;
            } else {
                el.show_product = false;
            }
            return el
        });

    },
    discounted_products_cat(state, action){

            action.payload

            ? state.list.data.map(el => {
                if (!el.discont_price) {
                    el.show_product_by_sale = false
                }
                return el
            })
            : state.list.data.map(el => {
                el.show_product_by_sale = true
                return el
            });
        }
         
},
    extraReducers: (builder) => {
        builder
        .addCase(getProductsByCategory.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getProductsByCategory.fulfilled, (state, action) => {
            state.status = 'ready'
            state.list = action.payload
            const { data, category } = action.payload;
            state.list.data = data.map(el => ({ ...el, show_product: true, show_product_by_sale: true }));
            state.list.category = category;
        })
        .addCase(getProductsByCategory.rejected, (state) => {
            state.status = 'error'
        })
    }
})
export const { sort_prods_cat, filter_products_cat, discounted_products_cat } = productByCategorySlice.actions
export default productByCategorySlice.reducer
