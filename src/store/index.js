import { configureStore } from "@reduxjs/toolkit";
import scoreSliceReducer from "./score/slice";


const store = configureStore({
    reducer: {
        score: scoreSliceReducer,
    },
});

export default store;