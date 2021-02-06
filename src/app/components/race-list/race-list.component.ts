import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { v1 as uuid } from 'uuid';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.css']
})
export class RaceListComponent implements OnInit {

  
  constructor( private route: ActivatedRoute, private router: Router, private api: APIService) {
    this.event = this.route.parent.snapshot.data['resolvedEvent'];
  }

  event;

  ngOnInit(): void {
  }

  sortRaceList(prop: number) {
    return  this.event.Races.sort((a, b) =>
    a['number'] > b['number'] ? 1 : a['number'] === b['number'] ? 0 : -1);
  }
}
