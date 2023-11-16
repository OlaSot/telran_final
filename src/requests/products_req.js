import { createAsyncThunk } from "@reduxjs/toolkit"




export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async() => {
        const resp = await fetch('https://telran-final-server.onrender.com/products/all')
        const data = await resp.json()
        return data
    }
)

export const getProductsByCategory = createAsyncThunk(
    'productsByCategory/getProductsByCategory',
    async(id) => {
        const resp = await fetch(`https://telran-final-server.onrender.com/categories/${id}`)
        const data = await resp.json()
        return data

    }
)

export const getSingleProduct = createAsyncThunk(
    'singleProduct/getSingleProduct',
    async(id) => {
        const resp = await fetch(`https://telran-final-server.onrender.com/products/${id}`)
        const data = await resp.json()
        return data[0]
    }
)



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
