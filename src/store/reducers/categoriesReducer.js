const LOAD_ALL_CATEGORIES = 'LOAD_ALL_CATEGORIES_PRODUCTS'



export const loadAllCategories = payload => ({ type: LOAD_ALL_CATEGORIES, payload })

export const categoriesReducer = (state = [], action) => {
    if (action.type === LOAD_ALL_CATEGORIES) {
        return action.payload
    }  else {
        return state
    }
}