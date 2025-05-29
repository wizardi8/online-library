import { combineReducers } from '@reduxjs/toolkit';

import pageReducer from './pageReducer';
import modalReducer from './modalReducer';
import booksReducer from './booksReducer';

const rootReducer = combineReducers({
    page: pageReducer,
    modal: modalReducer,
    books: booksReducer,
});

export default rootReducer;