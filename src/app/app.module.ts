import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { UpvoteHighlightDirective } from './upvote-highlight.directive';
import { QuoteDatePipe } from './quote-date.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { VoteComponent } from './vote/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    UpvoteHighlightDirective,
    QuoteDatePipe,
    QuoteFormComponent,
    VoteComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // VoteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
