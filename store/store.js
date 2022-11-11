import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../slices/apiSlice'
import filters from '../slices/filterSlice'
import botChat from '../slices/botChatSlice'

export const store = configureStore({
  reducer: {botChat, filters, [apiSlice.reducerPath]: apiSlice.reducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production'
})

