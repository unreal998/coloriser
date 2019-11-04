import {AUTH_USER, USER_LOG_OUT} from "../constants/userDataConstants";

export const userReducer = (state,  action) => {
    switch (action.type) {
        case AUTH_USER:
            return {...state, userData: action.payload };
        case USER_LOG_OUT:
            return {...state, userData: {}};
        default:
            return {...state, userData: {}}
    }
};