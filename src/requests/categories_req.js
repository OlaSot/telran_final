import { loadAllCategories } from "../store/reducers/categoriesReducer"

export const getAllCategories = (dispatch) => {
    fetch('https://telran-final-server.onrender.com/categories/all')
    .then(res => res.json())
    .then(json => dispatch(loadAllCategories(json)))
}



