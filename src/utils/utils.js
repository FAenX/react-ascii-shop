import {differenceInDays, format} from 'date-fns'
import {getProducts} from '../api/products'
import "regenerator-runtime/runtime.js";



export function getRelativeDateOrNot(date){
  const today=new Date()
  const difference = differenceInDays(today, new Date(date))
  return difference == 1 ? `${difference} day ago`:difference > 7? format(new Date(date), 'MMM dd yyyy') : `${difference} days ago`

}
