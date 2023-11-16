import { createSlice } from '@reduxjs/toolkit'
import { getAllProducts } from '../../requests/products_req'

const initialState = {
    list: [],

}

const allProductsSlice = createSlice({
    name: "allProducts",
    initialState,
    reducers: {
        sort_products(state, action) {
            if (action.payload === 'title') {
                state.list.sort((a, b) => a.title.localeCompare(b.title))
            } else if (action.payload === 'price_asc') {
                state.list.sort((a, b) => a.price - b.price)
            } else if (action.payload === 'price_desc') {
                state.list.sort((a, b) => b.price - a.price)
            } else {
                return state.list.sort((a, b) => a.id - b.id)
            }
        },
        filter_products(state, action) {
            const { minValue, maxValue } = action.payload
            state.list.map(el => {
                let actualPrice = el.discont_price || el.price;
                if (actualPrice >= minValue && actualPrice <= maxValue) {
                    el.show_product = true
                } else {
                    el.show_product = false
                } return el
            })
        },
        discounted_products(state, action) {
            if (action.payload) {
                state.list.map(el => {
                    if (el.discont_price === null) {
                        el.show_product_by_sale = false
                    } return el
                })
            } else {
                state.list.map(el => {
                    el.show_product_by_sale = true
                    return el
                })
            }
        }

    },

    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.status = 'ready'
                // console.log(action.payload)
                state.list = action.payload.map(el => ({ ...el, show_product: true, show_product_by_sale: true }))
            })
            .addCase(getAllProducts.rejected, (state) => {
                state.status = 'error'
            })
    }
})

export const { sort_products, filter_products, discounted_products } = allProductsSlice.actions
export default allProductsSlice.reducer

