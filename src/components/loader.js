import React from 'react'
import { connect } from 'react-redux'

function Loader(){
    return(
        <div className="loader-wrapper">
          <div id="loader" className="loader is-loading"></div>
        </div>  
    )
}

export default connect((state, dispatch)=>({state, dispatch}))(Loader)