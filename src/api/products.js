export const getProducts =(page, sortby)=>{
    console.log(sortby)
    const headers = new Headers()
    const opts = {

    }
    headers.append('cache-control', 'no-cache');
    if(sortby){
        return fetch(`/products?_page=${page}&_limit=8&_sort=${sortby}`, {headers})
    }
    return fetch(`/products?_page=${page}&_limit=8`, {headers})
}