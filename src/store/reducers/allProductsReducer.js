const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS'
const SORT_PRODUCTS = 'SORT_PRODUCTS'
const FILTER_PRODUCTS = 'FILTER_PRODUCTS'
const DISCOUNTED_PRODUCTS = 'DISCOUNTED_PRODUCTS'

export const loadAllProductsAction = payload => ({ type: LOAD_ALL_PRODUCTS, payload })
export const sortProductsAction = payload => ({ type: SORT_PRODUCTS, payload })
export const filterProductAction = payload => ({type: FILTER_PRODUCTS, payload})
export const discountedProductsAction = payload => ({type: DISCOUNTED_PRODUCTS, payload})



export const allProductsReducer = (state = [], action) => {
    if (action.type === LOAD_ALL_PRODUCTS) {
        return action.payload.map(el => ({...el, show_product: true, show_product_by_sale: true}))
    } else if (action.type === SORT_PRODUCTS) {
        if (action.payload === 'title') {
            return [...state].sort((a, b) => a.title.localeCompare(b.title))
        }
        else if (action.payload === 'price_asc') {
            return [...state].sort((a, b) => a.price - b.price)
        } else if (action.payload === 'price_desc') {
            return [...state].sort((a, b) => b.price - a.price)
        } else {
            return [...state].sort((a, b) => a.id - b.id)
        }
    } else if(action.type === FILTER_PRODUCTS){
        const {minValue, maxValue} = action.payload
        return state.map(el => {
            let actualPrice = el.discont_price || el.price;
            if(actualPrice >= minValue && actualPrice <= maxValue){
                el.show_product = true
            } else {
                el.show_product = false
            } return el
        }) 
    } else if (action.type === DISCOUNTED_PRODUCTS) {
        if(action.payload){
         return state.map(el => {
            if (el.discont_price === null){
                el.show_product_by_sale = false
            } return el})
        } else {
            return state.map(el => {
                el.show_product_by_sale = true
                return el
            })
        }
    }
    else { 
        return state
     }
}

