import {differenceInDays, format} from 'date-fns'


export function handleObserver(entities, observer) {


    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      const lastPhoto = this.state.photos[this.state.photos.length - 1];
      const curPage = lastPhoto.albumId;
      this.getPhotos(curPage);
      this.setState({ page: curPage });
    }
    this.setState({ prevY: y });
  }

export function getRelativeDateOrNot(date){
  const today=new Date()
  const difference = differenceInDays(today, new Date(date))
  console.log(difference)

  return difference == 1 ? `${difference} day ago`:difference > 7? format(new Date(date), 'MMM dd yyyy') : `${difference} days ago`

}
