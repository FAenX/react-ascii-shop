import { combineReducers } from 'redux';
import { createStore } from "redux";

import reducer from './reducer'

// combine reducers
const rootReducer = combineReducers({
        reducer
    });

// create redux store
export const store = createStore(rootReducer);