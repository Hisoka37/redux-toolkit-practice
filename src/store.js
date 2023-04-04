import { configureStore } from "@reduxjs/toolkit";
import carteReducer from './features/cart/cartSlice'

export const store = configureStore({
    reducer: {
        cart: carteReducer,
    }
})