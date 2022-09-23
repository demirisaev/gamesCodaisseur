export const selectPlayerScore = () => (reduxState) =>
  reduxState.score.playerScore;
export const selectAllScores = () => (reduxState) => reduxState.score.allScores;
export const selectTimerBool = () => (reduxState) => reduxState.score.timerBool;
