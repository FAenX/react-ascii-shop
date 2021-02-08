import {getProducts} from '../api/products'
import "regenerator-runtime/runtime.js";
import _ from 'lodash'


// product queries and store update functions
export const getProductsQ= async (dispatch, state)=>{
    let sortby = null
    if(state.reducer.sortby){
        sortby = state.reducer.sortby
    }

    state.reducer['loading']=true
    dispatch({type:'SET_STATE', state: {...state.reducer}})

    state.reducer['page'] = 1
    let res = await getProducts(state.reducer['page'], sortby)
    let data = await res.json()
    state.reducer['data']=data
    state.reducer['loading']=false
    dispatch({type:'SET_STATE', state: {...state.reducer}})
    
}

export const updateProductsQ=async (dispatch, state)=>{
    // console.log(state)
    let sortby = null
    if(state.reducer.sortby){
        sortby=state.reducer.sortby
    }
    
    state.reducer['loading']=true
    state.reducer['page'] += 1
    dispatch({type:'SET_STATE', state: {...state.reducer}})
    const response = await getProducts(state.reducer['page'], sortby)
    const res=await response.json()

    // each page loads 12 items hardcoded to the fetch request
    // i want to know that this is the last batch
    if (res.length < 12){
        state.reducer['endOfData'] = true
        
    }
    let data =  state.reducer['data']
    data=_.concat([...data], [...res]) 
    state.reducer['data'] = data

    dispatch({type:'SET_STATE', state: {...state.reducer}})

    state.reducer['loading']=false
    dispatch({type:'SET_STATE', state: {...state.reducer}})  
  }



