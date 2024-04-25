import { configureStore } from "@reduxjs/toolkit";
import productHandlingReducer from './slices/productHandlingSlice'

export const store = configureStore({
    reducer: {
        productHandling: productHandlingReducer
    }
})