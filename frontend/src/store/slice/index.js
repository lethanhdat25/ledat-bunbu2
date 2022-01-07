import {combineReducers} from "redux";
import ranking from "./ranking";
import device_by_hour from "./device_by_hour";
export const rootReducer=combineReducers({
    ranking:ranking,
    device_by_hour:device_by_hour
});
