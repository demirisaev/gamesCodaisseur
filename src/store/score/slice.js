import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerScore: null,
  allScores: null,
  timerBool: false,
};

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
    storeAllScores: (state, action) => {
      state.allScores = action.payload;
    },
    clearAllScores: (state, action) => {
      state.allScores = action.payload;
    },
    storeTimerBool: (state, action) => {
      state.timerBool = action.payload;
    },
  },
});

export const {
  storeAllScores,
  storePlayerScore,
  clearAllScores,
  clearPlayerScore,
  storeTimerBool,
} = scoreSlice.actions;

export default scoreSlice.reducer;
