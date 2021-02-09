import React from 'react'
import {connect} from 'react-redux'

// ad component
const Ad =({state, dispatch})=>{
    return (                              
        <div className="container a-wrapper m-8 d">               
            <div className="ad p-2">            
                <img className="ad" src={"/ads/?r=" + Math.floor(Math.random()*1000)}/>
            </div>
            <div className="p-2">A word form our sponsers</div>
        </div>
    )
}

export default connect((state, dispatch)=>({state, dispatch}))(Ad) 