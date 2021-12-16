import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: "",
    data: [],
};
const deviceSummary = createSlice({
    name: "deviceSummary",
    initialState,
    reducers: {
        FETCH_DEVICE_SUMMARY: (state) => {
            state.status = "LOADING";
        },
        FETCH_DEVICE_SUMMARY_SUCCESS: (state, action) => {
            state.status = "SUCCESS";
            state.data = action.payload;
        },
        FETCH_DEVICE_SUMMARY_FAILED: (state,action) => {
            state.status = action.payload;
        }
    },

});
export default deviceSummary.reducer;
export const {FETCH_DEVICE_SUMMARY, FETCH_DEVICE_SUMMARY_SUCCESS, FETCH_DEVICE_SUMMARY_FAILED} = deviceSummary.actions;
