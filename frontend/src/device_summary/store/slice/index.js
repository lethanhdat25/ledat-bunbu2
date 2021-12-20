import {combineReducers} from "redux";
import deviceSummary from "./deviceSummary";

const rootReducer=combineReducers({
    deviceSummary:deviceSummary
});
export default rootReducer;
