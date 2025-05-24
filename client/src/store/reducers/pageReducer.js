import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPageOptions(state, action) {
            state = action.payload;
        },
    },
});

export const { setPageOptions } = pageSlice.actions;
export default pageSlice.reducer;
