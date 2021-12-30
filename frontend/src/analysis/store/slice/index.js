import {combineReducers} from "redux";
import deviceType from "./deviceType";
import device from "./device";
import ranking from "./ranking";

export const rootReducer=combineReducers({
    deviceType:deviceType,
    device:device,
    ranking:ranking
});
