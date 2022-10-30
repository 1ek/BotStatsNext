import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../slices/apiSlice'
import filters from '../slices/filterSlice'

export const store = configureStore({
  reducer: {filters, [apiSlice.reducerPath]: apiSlice.reducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production'
})

