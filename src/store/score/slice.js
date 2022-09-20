import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    playerScore: null,
    allScores: null,
}

const scoreSlice = createSlice({
    name: "score",
    initialState,
    reducers: {
        storePlayerScore: (state, action) => {
            state.playerScore = action.payload;
        },
        clearPlayerScore: (state, action) => {
            state.playerScore = null;
        },
        storeAllScores:  (state, action) => {
            state.allScores = action.payload;
        },
        clearAllScores: (state, action) => {
            state.allScores = action.payload;
        },
    }
});

export const {storeAllScores, storePlayerScore, clearAllScores, clearPlayerScore} = scoreSlice.actions;

export default scoreSlice.reducer;