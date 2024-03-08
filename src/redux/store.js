import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import generalReducer from './generalSlice';
import { thunk } from 'redux-thunk';

export const store = configureStore({
    reducer: {
        user: userReducer,
        general: generalReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})