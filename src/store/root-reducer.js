import { combineReducers } from 'redux';
import { createStore } from "redux";

import reducer from './reducer'

// combine reducers
const rootReducer = combineReducers({
        reducer
    });

export const store = createStore(rootReducer);