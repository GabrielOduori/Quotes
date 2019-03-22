import { Component } from '@angular/core';
// import { Quote } from '@angular/compiler';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Quotes';
  quotes = [
    new Quote(1,'Buy Cookies'),
    new Quote(2,'Another great quote'),
    new Quote(3,'One more big quote'),


  ]
}
