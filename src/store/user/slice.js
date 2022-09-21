import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
    allUsers: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        storeUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        storeAllUsers: (state, action) => {
            state.allUsers = action.payload;
        },
        clearUserInfo: (state, action) => {
            state.userInfo = null;
        },
        clearAllUsers: (state, action) => {
            state.allUsers = null;
        },
    },
});

export const {storeAllUsers, storeUserInfo, clearAllUsers, clearUserInfo} = userSlice.actions;

export default userSlice.reducer;