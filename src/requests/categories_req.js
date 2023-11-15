import { createAsyncThunk } from "@reduxjs/toolkit"

// import { loadAllCategories } from "../store/reducers/categoriesReducer"

// export const getAllCategories = (dispatch) => {
//     fetch('https://telran-final-server.onrender.com/categories/all')
//     .then(res => res.json())
//     .then(json => dispatch(loadAllCategories(json)))
// }

export const getAllCategories = createAsyncThunk(
    'categories/getAllCategories',
    async () => {
      try {
        const resp = await fetch('https://telran-final-server.onrender.com/categories/all');
        const data = await resp.json();
        console.log('Data received:', data); // Log the data
        return data;
      } catch (error) {
        console.error('Error:', error); // Log any errors
        throw error;
      }
    }
  );