const LOAD_PRODUCTS_BY_CATEGORY = 'LOAD_PRODUCTS_BY_CATEGORY'
const SORT_PRODUCTS = 'SORT_PRODUCTS_CAT'
const FILTER_PRODUCTS = 'FILTER_PRODUCTS_CAT'
const DISCOUNTED_PRODUCTS = 'DISCOUNTED_PRODUCTS_CAT'

export const loadProductsByCategory = payload => ({ type: LOAD_PRODUCTS_BY_CATEGORY, payload })
export const sortProductsCatAction = payload => ({ type: SORT_PRODUCTS, payload })
export const filterProductCatAction = payload => ({ type: FILTER_PRODUCTS, payload })
export const discountedProductsCatAction = payload => ({ type: DISCOUNTED_PRODUCTS, payload })



export const productByCategoryReducer = (state = { data:[]}, action) => {
    if (action.type === LOAD_PRODUCTS_BY_CATEGORY) {
        const { data, category } = action.payload;
        const data_show_product = data.map(el => ({ ...el, show_product: true, show_product_by_sale: true }));
        return { ...state, category, data: data_show_product }
    } else if (action.type === SORT_PRODUCTS) {
        let sorted_products = [...state.data];
        if (action.payload === 'title') {
            sorted_products.sort((a, b) => a.title.localeCompare(b.title));
        } else if (action.payload === 'price_asc') {
            sorted_products.sort((a, b) => a.price - b.price);
        } else if (action.payload === 'price_desc') {
            sorted_products.sort((a, b) => b.price - a.price);
        } else {
            sorted_products.sort((a, b) => a.id - b.id);
        }
        return { ...state, data: sorted_products };

    } else if(action.type === FILTER_PRODUCTS){
        const {minValue, maxValue} = action.payload
        
        const filterData = state.data.map(el => {
            let actualPrice = el.discont_price || el.price;
            if (actualPrice >= minValue && actualPrice <= maxValue) {
                el.show_product = true;
            } else {
                el.show_product = false;
            }
            return el
        });
        return {...state, data: filterData }
    } 
    else if (action.type === DISCOUNTED_PRODUCTS) {
        const discontData = action.payload

            ? [...state.data].map(el => {
                if (!el.discont_price) {
                    el.show_product_by_sale = false
                }
                return el
            })
            : state.data.map(el => {
                el.show_product_by_sale = true
                return el
            });

        return { ...state, data: discontData }
         }
          else {
        return state
    }
}
/* 
   const filterData = [...state.data].map(el => {
            if (el.price >= min_value && el.price <= max_value) {
                el.show_product = true;
            } else {
                el.show_product = false;
            }
            return el
        });
        return { ...state, data: filterData }
        */