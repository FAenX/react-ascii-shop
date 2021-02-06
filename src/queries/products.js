import {getProducts} from '../api/products'

export async function getProductsQ(dispatch, state){
    state.reducer['loading']=true
    dispatch({type:'SET_STATE', state: {...state.reducer}})
    let res = await getProducts()
    let data = await res.json()
    state.reducer['data']=data
    state.reducer['page']=1
    state.reducer['loading']=false
    console.log(state)
    dispatch({type:'SET_STATE', state: {...state.reducer}})
}