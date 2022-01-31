import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modal: false,
};

const label_pie_chart = createSlice({
    name: 'label_pie_chart',
    initialState,
    reducers: {
        toggle: (state, action) => {
            state.modal = !state.modal;
        },
    },
});

export default label_pie_chart.reducer;
export const { toggle } = label_pie_chart.actions;