import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.event = this.route.snapshot.data['resolvedEvent'];
  }

  event;

  navLinks: any[];
  activeLinkIndex = -1;
  ngOnInit(): void {

    this.navLinks = [
      {
          label: 'players',
          link: './players',
          index: 0
      }, {
          label: 'race-list',
          link: './race-list',
          index: 1
      }, 
      {
          label: 'set result',
          link: './result',
          index: 3
      }, 
      {
          label: 'payout',
          link: './payout',
          index: 4
      },
      {
          label: 'top up requests',
          link: './top-ups',
          index: 5
      }
  ];
}


}
