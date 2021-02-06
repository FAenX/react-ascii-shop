export const getProducts =(page)=>{
    return fetch(`/products?_page=${page}&_limit=8`)
}