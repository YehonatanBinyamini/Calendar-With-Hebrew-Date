import { configureStore } from '@reduxjs/toolkit'
import { monthsReducer } from './months'

export const store = configureStore({
    reducer: { months: monthsReducer }
})