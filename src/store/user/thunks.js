import axios from "axios";
import { apiUrl } from "../../config/constants";
import { storeAllUsers, storeUserInfo } from "./slice";


export const getUserInfo = () => async (dispatch, getState) => {
    try {
        const response = await axios.get(`${apiUrl}/`) //NOT YET MADE ROUTE

        dispatch(storeUserInfo(response.data));
    } catch (e) {
        console.log(e);
    }
} ;

export const getAllUsers = () => async (dispatch, getState) => {
    try {
        const response = await axios.get(`${apiUrl}/`) //not yet made route

        dispatch(storeAllUsers(response.data));
    } catch (e) {
        console.log(e.message);
    }
}