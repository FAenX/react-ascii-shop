export const getProducts =(page, sortby=null)=>{
    if(sortby){
        return fetch(`/products?_page=${page}&_limit=8&_sort=${sortby}`)
    }
    return fetch(`/products?_page=${page}&_limit=8`)
}