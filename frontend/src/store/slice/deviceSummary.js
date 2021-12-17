import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    pending:false,
    success:false,
    failed:false,
    data: [],
};
const deviceSummary = createSlice({
    name: "deviceSummary",
    initialState,
    reducers: {
        FETCH_DEVICE_SUMMARY: (state) => {
            state.pending=true;
        },
        FETCH_DEVICE_SUMMARY_SUCCESS: (state, action) => {
            state.success=true;
            state.pending=false;
            state.data = action.payload;
        },
        FETCH_DEVICE_SUMMARY_FAILED: (state,action) => {
            state.pending=false;
            state.failed=action.payload;
        }
    },

});
export default deviceSummary.reducer;
export const {FETCH_DEVICE_SUMMARY, FETCH_DEVICE_SUMMARY_SUCCESS, FETCH_DEVICE_SUMMARY_FAILED} = deviceSummary.actions;
