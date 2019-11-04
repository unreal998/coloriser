import { combineReducers } from 'redux';
import {fastEditorReducer} from '../reducers/fastEditiongReducer'
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    fastEditorReducer,
    userReducer
});
