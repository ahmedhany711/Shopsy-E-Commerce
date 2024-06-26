
import { createSlice } from '@reduxjs/toolkit';

export const CartSLice = createSlice({
    name: "CartSLice",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const duplicateProducts = state.find((product) => product.id === action.payload.id);
            if (duplicateProducts) {
                duplicateProducts.quantity += 1;
            } else {
                const productClone = { ...action.payload, quantity: 1 }
                state.push(productClone);
            }
        },
        increment: (state, action) => {
            const duplicateProducts = state.find((product) => product.id === action.payload.id);
            if (duplicateProducts)
                duplicateProducts.quantity += 1;
        },
        Decrement: (state, action) => {
            const duplicateProducts = state.find((product) => product.id === action.payload.id);
            if (duplicateProducts) {
                if (duplicateProducts.quantity >= 2) {
                    duplicateProducts.quantity -= 1;
                }
            }
        },
        Details: (state, action) => {
            state.push(action.payload);
        },
        DeleteFromCart: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id)
        },
        Clear: () => {
            return []
        },
    },

});

export const { addToCart, DeleteFromCart, Details, increment, Decrement, Clear } = CartSLice.actions;
export default CartSLice.reducer;