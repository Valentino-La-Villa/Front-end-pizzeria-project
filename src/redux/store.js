import { configureStore } from "@reduxjs/toolkit";
import productHandlingReducer from './slices/productHandlingSlice'
import branchesReducer from "./slices/branches";

export const store = configureStore({
    reducer: {
        productHandling: productHandlingReducer,
        branches: branchesReducer
    }
})

