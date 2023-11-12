const LOAD_ONE_PRODUCT = 'LOAD_ONE_PRODUCT'

export const loadOneProductAction = payload => ({type: LOAD_ONE_PRODUCT, payload})

export const singleProductReducer = (state=[], action) => {
    if(action.type === LOAD_ONE_PRODUCT){
        return action.payload
    }
    return state
}




