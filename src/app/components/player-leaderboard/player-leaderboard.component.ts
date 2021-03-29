import { Component, Input, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { PlayerProfile } from 'src/models';

@Component({
  selector: 'app-player-leaderboard',
  templateUrl: './player-leaderboard.component.html',
  styleUrls: ['./player-leaderboard.component.css']
})
export class PlayerLeaderboardComponent implements OnInit {
  
  @Input()
  event;

  playerProfiles : PlayerProfile[];
  
  constructor( private api: APIService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.api.ListPlayerProfiles({ eventId: { eq: this.event.id } }).then(res => { // Success
        this.playerProfiles = res.items;
    });
  }

  sortProfilesByBalance(prop: any) {
    if(!this.playerProfiles){
      return;
    }
    return this.playerProfiles.sort((a, b) => {
      const propA = a['balance'] ?  a['balance'] : 0;
      const propB = b['balance'] ?  b['balance'] : 0;
      return propB - propA}
      );
  }
}

