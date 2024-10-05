import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
};

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },

        logOut: (state) => {
            state.user = null;
        },
    },
});

export const { login, logOut } = authSlice.actions;

export default authSlice.reducer;
