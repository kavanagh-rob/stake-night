
  import { Component, OnInit } from '@angular/core';
  import {Router, ActivatedRoute} from '@angular/router';
  import { APIService } from 'src/app/API.service';
import { PlayerProfileService } from 'src/app/shared/services/player-profile.service';

@Component({
  selector: 'app-player-event-list',
  templateUrl: './player-event-list.component.html',
  styleUrls: ['./player-event-list.component.css']
})
export class PlayerEventListComponent implements OnInit {  
    constructor(private route: ActivatedRoute, private router: Router, private api: APIService, private playerProfileService: PlayerProfileService) {
      // this.events = this.route.snapshot.data['resolvedEvents'].items;
     }
     events:any[];
     playerProfiles:any[];
  
    ngOnInit(): void {
      this.loadUsers();
   }

    loadUsers() {
      this.playerProfileService.listPlayerProfilesForCurrentUser().then(res => { // Success
        this.playerProfiles = res.items;
        this.getEventInfo();
      });
    }
    getEventInfo(){
      this.events = [];
      this.playerProfiles.forEach(async playerProfile => {
        const event = await this.api.GetEvent(playerProfile.eventId);
        if(event){
          this.events.push(event);
        }
      });

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
      this.router.navigateByUrl('/player/event/' + eventId);
    }
  
  }
  