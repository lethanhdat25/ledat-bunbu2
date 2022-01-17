import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deviceApi } from '../../api/device';

const initialState = {
    pending: false,
    success: false,
    failed: false,
    message: '',
    data: [],
};
export const getDevice = createAsyncThunk('device', async (params) => {
    const res = await deviceApi.getData(params);
    return res.data;
});

const device = createSlice({
    name: 'device',
    initialState,
    extraReducers: {
        [getDevice.pending]: (state) => {
            state.pending = true;
            state.success= false;
            state.failed=false;
        },
        [getDevice.fulfilled]: (state, action) => {
            state.pending = false;
            state.success = true;
            state.data = action.payload;
        },
        [getDevice.rejected]: (state, action) => {
            state.pending = false;
            state.failed = true;
            state.message = action.error.message;
        },
    },
});
export default device.reducer;
