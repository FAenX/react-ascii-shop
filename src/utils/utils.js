import {differenceInDays, format} from 'date-fns';
import "regenerator-runtime/runtime.js";
import {updateProductsQ, updateProductsOnIdle} from '../queries/products'
import {store} from '../store/root-reducer'

// function that returns relative date eg '1 day ago' if date is less than a week
// or actual date if date is more than a week
export const getRelativeDateOrNot=(date)=>{
  const today=new Date()
  const difference = differenceInDays(today, new Date(date))
  return difference == 1 ? `${difference} day ago`:difference > 7? format(new Date(date), 'MMM dd yyyy') : `${difference} days ago`

}

// function  to watch for end of page in order to update data
export const handleObserver=()=> { 
  const observer = new IntersectionObserver((entries, observer)=>observerCallBack(entries, observer));

  let target = document.querySelector('#loading-area');
  observer.observe(target);
}

// observe end of page to load more data
export const observerCallBack=async (entries, observer)=>{
  console.log(entries[0].isIntersecting)
  const isIntersecting  = entries[0].isIntersecting
  if(isIntersecting){
      updateProductsQ(store.dispatch, store.getState())
  }
}


// function to handle inactivity time and load next batch
export const handleInactivityTime = () => {

  const state = store.getState()
  const timer =()=> setInterval(() => {
      updateProductsOnIdle(store.dispatch, store.getState())
    }, 7000,
  );

  let timerInst = timer()

  const resetTimer=()=> {     
      clearInterval(timerInst);
      timerInst = timer()
  };
    
  window.addEventListener('load', ()=>{
    resetTimer()
  });// DOM Events
  window.addEventListener('mousemove', ()=>{
    resetTimer()
  });// DOM Events

  window.addEventListener('keypress', ()=>{
    resetTimer()
  });// DOM Events

};





