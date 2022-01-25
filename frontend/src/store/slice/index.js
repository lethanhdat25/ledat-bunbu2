import { combineReducers } from 'redux';
import ranking from './ranking';
import deviceByHour from './device_by_hour';
import deviceType from './device_type';
import device from './device';

export const rootReducer = combineReducers({
    ranking: ranking,
    deviceByHour: deviceByHour,
    deviceType: deviceType,
    device:device
});
