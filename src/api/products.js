export const getProducts =()=>{
    return fetch('/products?_page=0&_limit=18')
}