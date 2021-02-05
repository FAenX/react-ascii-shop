import React, { useState } from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'

import { createStore } from "redux";
import rootReducer from '../src/store/root-reducer'

import Main from '../src/components/main'
import "regenerator-runtime/runtime.js";


const store = createStore(rootReducer);



function Index(){
            
    return(
        <Provider store={store}>
            <Main />
        </Provider>
    )
}

ReactDOM.render(<Index/>, document.getElementById("products"));

