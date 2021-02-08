import {differenceInDays, format} from 'date-fns';
import "regenerator-runtime/runtime.js";
import {updateProductsQ} from '../queries/products'
import {store} from '../store/root-reducer'


export const getRelativeDateOrNot=(date)=>{
  const today=new Date()
  const difference = differenceInDays(today, new Date(date))
  return difference == 1 ? `${difference} day ago`:difference > 7? format(new Date(date), 'MMM dd yyyy') : `${difference} days ago`

}

export const handleObserver=()=> { 
  const observer = new IntersectionObserver((entries, observer)=>observerCallBack(entries, observer));

  let target = document.querySelector('#loading-area');
  observer.observe(target);
  // observer.unobserve(target)
}

export const observerCallBack=async (entries, observer)=>{
  console.log(entries[0].isIntersecting)
  const isIntersecting  = entries[0].isIntersecting
  if(isIntersecting){
      updateProductsQ(store.dispatch, store.getState())
  }
}




