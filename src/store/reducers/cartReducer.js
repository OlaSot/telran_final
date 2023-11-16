import { createSlice } from "@reduxjs/toolkit";



let initialState = JSON.parse(localStorage.getItem('prod_in_Cart')) ?? []
console.log(initialState);


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add_to_cart(state, action) {
      const productInCart = state.find(el => el.id === +action.payload.id);
      if (!productInCart) {
        state.push({ ...action.payload, count: 1 });
      } else {
        productInCart.count++;
      }
    },
    incr_count(state, action) {
      state.find(el => el.id === action.payload).count++
    },

    decr_count(state, action) {
      const product = state.find(el => el.id === action.payload);
      if (product && product.count > 1) {
        product.count--;
      } else {
        const index = state.findIndex(el => el.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1); // Удаление элемента
        }
      }
    },
    clear_cart(){
        return []
    }

  }
})

export const { add_to_cart, clear_cart, decr_count, incr_count, delete_from_cart } = cartSlice.actions
export default cartSlice.reducer

