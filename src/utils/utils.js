import {differenceInDays, format} from 'date-fns'
import {observerCallBack} from '../queries/products'
import "regenerator-runtime/runtime.js";



export const getRelativeDateOrNot=(date)=>{
  const today=new Date()
  const difference = differenceInDays(today, new Date(date))
  return difference == 1 ? `${difference} day ago`:difference > 7? format(new Date(date), 'MMM dd yyyy') : `${difference} days ago`

}

export const handleObserver=(dispatch, state)=> { 
  let observer = new IntersectionObserver(()=>observerCallBack(dispatch, state));
  let target = document.querySelector('#loading-area');
  observer.observe(target);
}
