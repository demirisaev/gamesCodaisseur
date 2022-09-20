import { configureStore } from "@reduxjs/toolkit";
import scoreSliceReducer from "./score/slice";
import userSliceReducer from "./user/slice";

const store = configureStore({
    reducer: {
        user: userSliceReducer,
        score: scoreSliceReducer,
    },
});

export default store;