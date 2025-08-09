import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from './tabSlice'

export const store = configureStore({
    reducer: {
        tabs: tabsReducer
    }
})