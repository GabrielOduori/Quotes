import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    // new Quote(1,'This application allows users to add in their favourite quote and let people upvote or down-vote. The Quote with the hightsts upvotes stays at the top.', 'Gabriel', 'Oduori', new Date(2016,3,14)),
    // new Quote(2,'Another great quote', 'Mike', 'Otani', new Date(2017,12,14)),
    // new Quote(3,'One more big quote', 'Abiero', 'Mgele', new Date(2017,3,24)),
    // new Quote(4,'This application allows users to add in their favourite quote and let people upvote or down-vote. The Quote with the hightsts upvotes stays at the top.', 'Kenya', 'Nairobi', new Date(2015,10,20)),


  ]
  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete)
  }

  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete=confirm(`Are you sure you want to delete: ${this.quotes[index].quoteBody}`)

      if(toDelete){
        this.quotes.splice(index,1)
      }

    }
  }

  toggleDetails(index){
    this.quotes[index].showDetails =!this.quotes[index].showDetails;
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id  = quoteLength+1;
    quote.creationDate = new Date(quote.creationDate);
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
