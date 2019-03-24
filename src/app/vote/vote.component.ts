import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  numberOfUpVotes: number = 0;
  numberofDownVotes:number = 0;

  upvoteButtonClicks(){
    this.numberOfUpVotes++;
  }

  downvoteButtonClicks(){
    this.numberofDownVotes++;
  }

  constructor() { }

  ngOnInit() {
  }

}
