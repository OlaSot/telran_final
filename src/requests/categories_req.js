import { createAsyncThunk } from "@reduxjs/toolkit"


export const getAllCategories = createAsyncThunk(
    'categories/getAllCategories',
    async () => {

        const resp = await fetch('https://telran-final-server.onrender.com/categories/all');
        const data = await resp.json();
        console.log('Data received:', data); // Log the data
        return data;
      } 
  );