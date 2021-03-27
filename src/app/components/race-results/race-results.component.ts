import { Component, Input, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-race-results',
  templateUrl: './race-results.component.html',
  styleUrls: ['./race-results.component.css']
})
export class RaceResultsComponent implements OnInit {

  constructor(private api: APIService) { }

  @Input()
  event;

  eventResults

  ngOnInit(): void {
    this.api.ListResults({ eventId: { eq: this.event.id } }).then(res => {
      this.eventResults = res.items
    })
  }

  sortResultsByRace(prop: any) {
    const raceNumber = 'raceNumber';
    if (! this.eventResults){
      return;
    }
    return this.eventResults.sort((a, b) =>
    a[raceNumber] < b[raceNumber] ? 1 : a[raceNumber] === b[raceNumber] ? 0 : -1);
  }

}
