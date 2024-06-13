
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "productsSlice/fetchProducts",
    async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        return data;
    }
);

export const productSlice = createSlice({
    name: "productsSlice",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            // Update the state with the action payload
            return (state = action.payload);
        });
    },
});

export default productSlice.reducer;
