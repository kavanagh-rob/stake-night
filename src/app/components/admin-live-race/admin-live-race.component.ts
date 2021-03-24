import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-live-race',
  templateUrl: './admin-live-race.component.html',
  styleUrls: ['./admin-live-race.component.css']
})
export class AdminLiveRaceComponent implements OnInit {

  constructor() { }

  event;

  navLinks: any[];
  activeLinkIndex = -1;
  ngOnInit(): void {

    this.navLinks = [
      {
          label: 'set result',
          link: './result',
          index: 0
      }, {
          label: 'set payout',
          link: './payout',
          index: 1
      }
  ];
}

}
