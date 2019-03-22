import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Buy Cookies'),
    new Quote(2,'Another great quote'),
    new Quote(3,'One more big quote'),

  ]
  constructor() { }

  ngOnInit() {
  }

}
