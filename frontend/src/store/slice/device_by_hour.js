import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deviceByHour } from '../../api/device_by_hour';

const _ = require('lodash');
const initialState = {
    pending: false,
    success: false,
    failed: false,
    message: '',
    data: [],
};
export const getDeviceByHour = createAsyncThunk('device_by_hour', async (params) => {
    const res = await deviceByHour.getData(params);
    const data = res.data.map(value => {
        return {
            day: value.day,
            hours: _.map(value.hours, hour => {
                if (hour.value <= 10) {
                    return {
                        ...hour,
                        color: '#ecbdfa',
                        x: hour.time,
                        y: 50,
                    };
                } else {
                    if (hour.value <= 20) {
                        return {
                            ...hour,
                            color: '#eba4fd',
                            x: hour.time,
                            y: 50,
                        };
                    } else {
                        if (hour.value <= 30) {
                            return {
                                ...hour,
                                color: '#dc89f8',
                                x: hour.time,
                                y: 50,
                            };
                        } else {
                            if (hour.value <= 40) {
                                return {
                                    ...hour,
                                    color: '#d877fc',
                                    x: hour.time,
                                    y: 50,
                                };
                            }
                        }
                    }
                }
                return {
                    ...hour,
                    color: '#d26afd',
                    x: hour.time,
                    y: 50,
                };

            }),
        };
    });
    return data;
});
const deviceByHourSlice = createSlice({
    name: 'device_by_hour',
    initialState,
    extraReducers: {
        [getDeviceByHour.pending]: (state) => {
            state.pending = true;
        },
        [getDeviceByHour.fulfilled]: (state, action) => {
            state.pending = false;
            state.success = true;

            state.data = action.payload;
        },
        [getDeviceByHour.rejected]: (state, action) => {
            state.pending = false;
            state.failed = true;
            state.message = action.error.message;
        },
    },
});
export default deviceByHourSlice.reducer;
