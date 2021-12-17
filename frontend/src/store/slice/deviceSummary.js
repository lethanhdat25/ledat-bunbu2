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
        fetchDeviceSummary: (state) => {
            state.pending=true;
        },
        fetchDeviceSummarySuccess: (state, action) => {
            state.success=true;
            state.pending=false;
            state.data = action.payload;
        },
        fetchDeviceSummaryFailed: (state,action) => {
            state.pending=false;
            state.failed=action.payload;
        }
    },

});
export default deviceSummary.reducer;
export const {fetchDeviceSummary,fetchDeviceSummarySuccess,fetchDeviceSummaryFailed} = deviceSummary.actions;
