import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loader: false,
    errorMessage: {
        statusCode: false,
        message: '',
    },
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setLoader: (state) => {
            state.loader = !state.loader;
        },

        setErrorMessage: (state, action) => {
            console.log(action);
            state.errorMessage.statusCode = action.payload.statusCode;
            state.errorMessage.message = action.payload.message;
        }
    },
})

export const { setLoader, setErrorMessage } = generalSlice.actions

export default generalSlice.reducer