import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  navLinks: any[];
  activeLinkIndex = -1;
  ngOnInit(): void {
    
  this.navLinks = [
    {
        label: 'users',
        link: './users',
        index: 0
    }, {
        label: 'event',
        link: './event',
        index: 1
    }, {
        label: 'live race',
        link: './live-race',
        index: 2
    }
];
  }


}
