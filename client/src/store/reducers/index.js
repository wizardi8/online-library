import { combineReducers } from '@reduxjs/toolkit';

import pageReducer from './pageReducer';

const rootReducer = combineReducers({
    page: pageReducer,
});

export default rootReducer;