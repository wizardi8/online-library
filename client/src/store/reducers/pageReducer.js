import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userHasAccess: false,
};

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setUserHasAccess(state, action) {
            state.userHasAccess = action.payload;
        },
    },
});

export const { setUserHasAccess } = pageSlice.actions;
export default pageSlice.reducer;
