import {combineReducers} from "redux";
import deviceType from "./device_type";
import device from "./device";
import ranking from "./ranking";
import deviceSummary from "./device_summary";
import label_pie_chart from "./label_pie_chart";
import device_by_hour from "./device_by_hour";

export const rootReducer=combineReducers({
    deviceType:deviceType,
    device:device,
    deviceSummary:deviceSummary,
    ranking:ranking,
    label_pie_chart:label_pie_chart,
    device_by_hour:device_by_hour
});
