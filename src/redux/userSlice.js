import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    surname: '',
    email: '',
    password: '',
    rpassword: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserValidationInput: (state, action) => {
            const { type, value } = action.payload;
            state[type] = value;
        },

        signinWithEmailAndPassword: (state, action) => {
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUserValidationInput, signinWithEmailAndPassword } = userSlice.actions

export default userSlice.reducer