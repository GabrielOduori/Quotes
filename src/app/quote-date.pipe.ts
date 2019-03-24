import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteDate'
})
export class QuoteDatePipe implements PipeTransform {

  transform(value:any): number {
    //get the current date
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    //returns value in milliseconds
    var dateDifference  =Math.abs(todayWithNoTime-value)
    //60 seconds*60 minutes in an hour *24 hours
    const secondsInADay = 86400;
    //converts to seconds
    var dateDifferenceSeconds = dateDifference*0.001;

    var dateCounter = dateDifferenceSeconds/secondsInADay;

    if(dateCounter>=1&& value> todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
