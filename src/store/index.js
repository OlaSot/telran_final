import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './reducers/categoriesReducer'
import { productByCategoryReducer } from './reducers/productsByCategoryReducer'
import { singleProductReducer } from './reducers/singleProductReducer'
import { allProductsReducer } from './reducers/allProductsReducer'
import { cartReducer } from './reducers/cartReducer'



const rootReducer = combineReducers({
    categories: categoriesReducer,
    productsByCategory: productByCategoryReducer,
    singleProduct: singleProductReducer ,
    allProducts: allProductsReducer,
    cart: cartReducer,

})
export const store = createStore(rootReducer,applyMiddleware(thunk))

