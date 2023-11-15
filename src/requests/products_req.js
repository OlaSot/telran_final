import { createAsyncThunk } from "@reduxjs/toolkit"
import { loadAllProductsAction } from "../store/reducers/allProductsReducer"
import { loadProductsByCategory } from "../store/reducers/productsByCategoryReducer"
import { loadOneProductAction } from "../store/reducers/singleProductReducer"

// export const getAllCategories = createAsyncThunk(
//     'categories/getAllCategories',
//     async () => {
//       try {
//         const resp = await fetch('https://telran-final-server.onrender.com/categories/all');
//         const data = await resp.json();
//         console.log('Data received:', data); // Log the data
//         return data;
//       } catch (error) {
//         console.error('Error:', error); // Log any errors
//         throw error;
//       }
//     }
//   );


export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async() => {
        const resp = await fetch('https://telran-final-server.onrender.com/products/all')
        const data = await resp.json()
        return data
    }
)



// export const getAllProducts = dispatch => {
//     fetch('https://telran-final-server.onrender.com/products/all')
//     .then(res => res.json())
//     .then(json => { dispatch(loadAllProductsAction(json));
//     })
// }


export const getProductsByCategory = (id) => {
    return dispatch => {
        fetch(`https://telran-final-server.onrender.com/categories/${id}`)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            dispatch(loadProductsByCategory(json))})
    }
}



export const getOneProduct = (id) => {
    return dispatch => {
        fetch(`https://telran-final-server.onrender.com/products/${id}`)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            dispatch(loadOneProductAction(json[0])
            )
        })
    }
}



    
export  function getSale(obj){
        fetch('https://telran-final-server.onrender.com/sale/send', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(function(res){
            return res.json()
        })
        .then(function(json){
            console.log(json);
        })
    }


    export  function sendOrder(obj){
        fetch('https://telran-final-server.onrender.com/order/send', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(function(res){
            return res.json()
        })
        .then(function(json){
            console.log(json);
        })
    }
