import React from 'react'
import {connect} from 'react-redux'
import {getProductsQ} from '../queries/products'
import {getRelativeDateOrNot} from '../utils/utils'
import Loader from '../components/loader'
import {getProducts, updateProducts} from '../api/products'


function Main({dispatch, state}){
    React.useEffect(()=>{
        getProductsQ(dispatch, state)

        const observerCallBack=async ()=>{
            console.log(state)
            state.reducer['loading']=true
            dispatch({type:'SET_STATE', state: {...state.reducer}})

            state.reducer['page'] += 1
            const response = await getProducts(state.reducer['page'])
            dispatch({type:'SET_STATE', state: {...state.reducer}})

            state.reducer['loading']=false
            dispatch({type:'SET_STATE', state: {...state.reducer}})
            console.log(response)
            console.log('scrolled')
        }

        function handleObserver() { 
            let observer = new IntersectionObserver(observerCallBack);
            let target = document.querySelector('#loading-area');
            observer.observe(target);
        }

        handleObserver()
          
    }, [])
    return(
        <div className="is-flex is-flex-direction-column is-justify-content-center is-align-content-center p-4">
            <div className="grid-container">
                {state.reducer.data && state.reducer.data.length > 0 ? 
                        state.reducer.data.map(face=>{
                            return (
                                <div key={face.id} className="grid-item is-flex is-flex-direction-column is-justify-content-center p-4 m-2">
                                    
                                    <div className="product p-2 is-flex is-justify-content-center is-align-items-center" style={{fontSize: face.size, color: 'green'}}>{face.face}</div>
                                    <div className="p-2" >{getRelativeDateOrNot(face.date)}</div>
                                    <div className="p-2" >size: {face.size} px</div>
                                    <div className="p-2 is-size-4"> Price: ${face.price}</div>
                                    
                                </div>)
                        })
                    : <Loader/>}
                </div>
                {state.reducer.loading ? <Loader/> : null}
                <div id="loading-area"></div>
            </div>
    )
}

export default connect((state, dispatch)=>({state, dispatch}))(Main)