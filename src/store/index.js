import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './reducers/categoriesReducer'
import allProductsReducer from './reducers/allProductsReducer'
import productsByCategoryReducer from './reducers/productsByCategoryReducer'
import singleProductReducer from './reducers/singleProductReducer'
import cartReducer from './reducers/cartReducer'



export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        allProducts: allProductsReducer,
        productsByCategory: productsByCategoryReducer,
        singleProduct: singleProductReducer,
        cart: cartReducer
    }
})

store.subscribe(() => {
    const state = store.getState()
    localStorage.setItem('prod_in_cart', JSON.stringify(state.cart))
})

export default store