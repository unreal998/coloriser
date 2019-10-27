import {BODY_COLOR, HEADER_COLOR, TEXT_COLOR} from "../constants/fastEditiongConstants";

let defaultState = {
    headerColor: "#000",
    textColor: "#000",
    backgroundColor: "#000"
};

export const fastEditorReducer = (state = Object.assign({}, defaultState), action) => {
    switch (action.type) {
        case HEADER_COLOR:
            return {...state, headerColor: action.newColor};
        case BODY_COLOR:
            return {...state, bodyColor: action.newColor};
        case TEXT_COLOR:
            return {...state, textColor: action.newColor};
        default:
            return state
    }
};