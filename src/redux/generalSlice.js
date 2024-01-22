import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loader: false,
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setLoader: (state) => {
            state.loader = !state.loader;
        },
    },
})

export const { setLoader } = generalSlice.actions

export default generalSlice.reducer