import {combineReducers} from "redux";
import deviceType from "./device_type";
import device from "./device";
import ranking from "./ranking";
import deviceSummary from "./device_summary";

export const rootReducer=combineReducers({
    deviceType:deviceType,
    device:device,
    deviceSummary:deviceSummary,
    ranking:ranking
});
