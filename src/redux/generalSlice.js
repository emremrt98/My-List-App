import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loader: false,
    errorMessage: {
        statusCode: false,
        message: '',
    },
    auth: {
        user: null,
        isLogin: false,
        token: '',
    }
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setLoader: (state) => {
            state.loader = !state.loader;
        },

        setErrorMessage: (state, action) => {
            state.errorMessage.statusCode = action.payload.statusCode;
            state.errorMessage.message = action.payload.message;
        },

        setAuth: (state, action) => {
            state.auth.user = action.payload.user;
            state.auth.isLogin = action.payload.isLogin;
            state.auth.token = action.payload.token;
            console.log(action)
        }
    },
})

export const { setLoader, setErrorMessage, setAuth } = generalSlice.actions

export default generalSlice.reducer