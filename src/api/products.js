export const getProducts =(page, sortby)=>{
    const headers = new Headers()
    // do not cache
    headers.append('cache-control', 'no-cache');

    // if the request has a sort param
    if(sortby){
        return fetch(`/products?_page=${page}&_limit=12&_sort=${sortby}`, {headers})
    }
    return fetch(`/products?_page=${page}&_limit=12`, {headers})
}