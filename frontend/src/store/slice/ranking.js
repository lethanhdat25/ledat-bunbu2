import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { rankingApi } from '../../api/ranking';

const initialState = {
    pending: false,
    success: false,
    failed: false,
    message: '',
    data: [],
};

export const getRanking = createAsyncThunk('ranking', async (params) => {
    const res = await rankingApi.getData(params);
    return res.data;
});

const ranking = createSlice({
    name: 'ranking',
    initialState,
    extraReducers: {
        [getRanking.pending]: (state) => {
            state.pending = true;
            state.success= false;
            state.failed=false;
        },
        [getRanking.fulfilled]: (state, action) => {
            state.pending = false;
            state.success = true;
            state.data = action.payload;
        },
        [getRanking.rejected]: (state, action) => {
            state.pending = false;
            state.failed = true;
            state.message = action.error.message;
        },
    },
});

export default ranking.reducer;
