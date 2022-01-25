import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deviceTypeApi } from '../../api/device_type';

const initialState = {
    pending: false,
    success: false,
    failed: false,
    message: '',
    data: [],
};

export const getDeviceType = createAsyncThunk('deviceType', async (params) => {
    const res = await deviceTypeApi.getData(params);
    return res.data;
});

const deviceType = createSlice({
    name: 'deviceType',
    initialState,
    extraReducers: {
        [getDeviceType.pending]: (state) => {
            state.pending = true;
        },
        [getDeviceType.fulfilled]: (state, action) => {
            state.pending = false;
            state.success = true;
            state.data = action.payload;
        },
        [getDeviceType.rejected]: (state, action) => {
            state.pending = false;
            state.failed = true;
            state.message = action.error.message;
        },
    },
});

export default deviceType.reducer;
