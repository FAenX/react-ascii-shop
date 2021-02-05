import React from 'react'
import {connect} from 'react-redux'
import {getProductsQ} from '../queries/products'
import {handleObserver, getRelativeDateOrNot} from '../utils/utils'


function Main({dispatch, state}){
    React.useEffect(()=>{
        getProductsQ(dispatch, state)
    }, [])
    return(
        <div className="is-flex is-flex-wrap-wrap is-justify-content-center">
               {state.reducer.data && state.reducer.data.length > 0 ? 
                    state.reducer.data.map(face=>{
                        return (
                            <div key={face.id} className="is-flex is-flex-direction-column is-justify-content-center p-4 m-2">
                                
                                <div className="product p-2 is-flex is-justify-content-center is-align-items-center" style={{fontSize: face.size}}>{face.face}</div>
                                <div className="p-2">{getRelativeDateOrNot(face.date)}</div>
                                <div className="p-2 is-size-4"> Price: ${face.price}</div>
                                
                            </div>)
                    })
                : "loading"}
            </div>
    )
}

export default connect((state, dispatch)=>({state, dispatch}))(Main)