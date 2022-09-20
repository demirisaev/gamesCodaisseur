import axios from "axios";
import { apiUrl } from "../../config/constants";

import { storePlayerScore, storeAllScores } from "./slice";

export const getPlayerScore = () => async (dispatch, getState) => {
    try {
        const response = await axios.get(`${apiUrl}/`) //NOT YET MADE ROUTE

        dispatch(storePlayerScore(response.data));
    } catch (e) {
        console.log(e);
    }
} 

export const getAllScores = () => async (dispatch, getState) => {
    try {
        const response = await axios.get(`${apiUrl}/scores`);

        dispatch(storeAllScores(response.data));
    } catch (e) {
        console.log(e);
    }
} 