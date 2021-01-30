
  import { Component, OnInit } from '@angular/core';
  import {Router, ActivatedRoute} from '@angular/router';
  import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-player-home',
  templateUrl: './player-home.component.html',
  styleUrls: ['./player-home.component.css']
})
export class PlayerHomeComponent implements OnInit {  
    constructor(private route: ActivatedRoute, private router: Router, private api: APIService) {
      this.events = this.route.snapshot.data['resolvedEvents'].items;
     }
     events:any[];
  
    ngOnInit(): void {
    }
  
    sortEvents(prop: string) {
      const dateProp = 'date';
      return this.events.sort((a, b) => {
        return this.getTime(a[dateProp]) - this.getTime(b[dateProp]);
      });
    }
  
    private getTime(date?: Date) {
      return date != null ? date.getTime() : 0;
    }
  
    navigateToEvent(eventId) {
      this.router.navigateByUrl('/event-home/' + eventId);
    }
  
  }
  