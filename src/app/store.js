import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from '../app/features/cartSlice'

export const store = configureStore({
    reducer: {
        AllCart: cartReducer,
    },
})