import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import generalReducer from './generalSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        general: generalReducer,
    },
})