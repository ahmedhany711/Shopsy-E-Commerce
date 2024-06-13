import { createSlice } from '@reduxjs/toolkit';

export const CheckSlice = createSlice({
    name: "CheckSlice",
    initialState: [],
    reducers: {
        addToCheckOut: (state, action) => {
            const duplicateProducts = state.find((product) => product.id === action.payload.id);
            if (duplicateProducts) {
                duplicateProducts.quantity += 1;
            } else {
                const productClone = { ...action.payload, quantity: 1 }
                state.push(productClone);
            }
        },
        submitOrder: (state, action) => {
            // Handle the submitted order data, such as storing it in state or sending it to the server
            console.log('Submitted Order Data:', action.payload.formData);
            console.log('Cart Items:', action.payload.cart);
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
        DeleteFromCheckOut: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id)
        },
        Clear: (state, action) => {
            return []
        },
    },

});

export const { addToCheckOut, DeleteFromCheckOut, submitOrder, Details, increment, Decrement, Clear } = CheckSlice.actions;
export default CheckSlice.reducer;