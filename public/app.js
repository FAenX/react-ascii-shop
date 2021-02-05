import React, { useState } from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'

import { createStore } from "redux";
import rootReducer from '../store/root-reducer'


const store = createStore(rootReducer);

function getRandomInRange (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function Index(){
    const [products, setProducts] = useState([])

    React.useEffect(()=>{
        fetch('/products').then(res=>{
            const response = res.json().then(data=>{
                setProducts(data)
            }).catch(err=>err)
            
        }).catch(err=>err)
    }, [])
            
    return(
        <Provider store={store}>
            <div className="is-flex is-flex-wrap-wrap is-justify-content-center">
                {
                    products.map(face=>{
                        return (
                            <div key={face.id} className="is-flex is-flex-direction-column is-justify-content-center product p-4 m-2">
                                <div></div>
                                <div className="p-2" style={{fontSize: face.size}}>{face.face}</div>
                                <div className="is-size-4"> Price: ${face.price}</div>
                                
                            </div>)
                    })
                }
            </div>
        </Provider>
    )
}

ReactDOM.render(<Index store={store}/>, document.getElementById("products"));

