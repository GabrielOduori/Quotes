import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    // new Quote(1,'This application allows users to add in their favourite quote and let people upvote or down-vote. The Quote with the hightsts upvotes stays at the top.'),
    // new Quote(2,'Another great quote'),
    // new Quote(3,'One more big quote'),
    // new Quote(4,'This application allows users to add in their favourite quote and let people upvote or down-vote. The Quote with the hightsts upvotes stays at the top.'),


  ]
  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete)
  }

  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quoteBody}`)

      if(toDelete){
        this.quotes.splice(index,1)
      }

    }
  }
  constructor() { }

  ngOnInit() {
  }

}
