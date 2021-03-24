import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-home',
  templateUrl: './player-home.component.html',
  styleUrls: ['./player-home.component.css']
})
export class PlayerHomeComponent implements OnInit {

  constructor() { }

  navLinks: any[];

 
  ngOnInit(): void {
    this.navLinks = [
     {
          label: 'event-list',
          link: './player',
          index: 0
      }
  ];
}


}
