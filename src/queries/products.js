import {getProducts} from '../api/products'

export async function getProductsQ(dispatch, state){
    state.reducer['loading']=true
    dispatch({type:'SET_STATE', state: {...state.reducer}})

    state.reducer['page'] += 1
    let res = await getProducts(state.reducer['page'])
    let data = await res.json()
    state.reducer['data']=data
    state.reducer['page']=0
    state.reducer['loading']=false
    console.log(state)
    dispatch({type:'SET_STATE', state: {...state.reducer}})
}