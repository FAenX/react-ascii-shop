import {getProducts} from '../api/products'
import "regenerator-runtime/runtime.js";
import _ from 'lodash'


// product queries and store update functions
export const getProductsQ= async (dispatch, state, sortby=null)=>{
    if(sortby){
        state.reducer['sortby'] = sortby
    }

    state.reducer['loading']=true
    dispatch({type:'SET_STATE', state: {...state.reducer}})

    state.reducer['page'] = 0
    let res = await getProducts(state.reducer['page'], sortby)
    let data = await res.json()
    state.reducer['data']=data
    state.reducer['loading']=false
    console.log(state)
    dispatch({type:'SET_STATE', state: {...state.reducer}})
}


export const observerCallBack=async (dispatch, state, sortby=null)=>{

    if(sortby){
        state.reducer['sortby'] = sortby
    }

    state.reducer['loading']=true
    dispatch({type:'SET_STATE', state: {...state.reducer}})

    state.reducer['page'] += 1
    const response = await getProducts(state.reducer['page'], sortby)
    const res=await response.json()
    let data =  state.reducer['data']
    console.log(data)
    data=_.concat([...data], [...res]) 
    console.log(data)

    state.reducer['data'] = data
    dispatch({type:'SET_STATE', state: {...state.reducer}})

    state.reducer['loading']=false
    dispatch({type:'SET_STATE', state: {...state.reducer}})
    console.log('scrolled')
}
