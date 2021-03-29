import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { v1 as uuid } from 'uuid';

import { APIService } from 'src/app/API.service';
import { Bet, Event, PlayerProfile} from '../../../models';
import { RaceService } from 'src/app/shared/services/race.service';
import { BetService } from 'src/app/shared/services/bet.service';
import { HorseBetInfo } from 'src/app/shared/interfaces/horse-bet-info-interface';


@Component({
  selector: 'app-player-game-home',
  templateUrl: './player-game-home.component.html',
  styleUrls: ['./player-game-home.component.css']
})
export class PlayerGameHomeComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private router: Router, private api: APIService, private raceService: RaceService, private betService: BetService) {
      this.event = this.route.snapshot.data['resolvedEvent'] || this.route.parent.snapshot.data['resolvedEvent']
      this.playerProfile = this.route.snapshot.data['resolvedPlayer'] ||  this.route.snapshot.data['resolvedPlayerProfile'].items[0];
  }
     
  event: any;

  playerProfile: PlayerProfile;

  totalBetValue :number;

  currentRace: any = null;

  pageInitialized = false;

  interval: any;

  ngOnInit(): void {
    this.refreshData();
    this.interval = setInterval(() => {
        this.refreshData();
    }, 5000);
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }
     
  async refreshData() {
      if (this.event){
        this.setCurrentRace();
      }
      this.playerProfile = await this.api.GetPlayerProfile(this.playerProfile.id);
  }

  setCurrentRace(){
    this.raceService.getCurrentRace(this.event.id).then(raceResponse => {
      if (raceResponse.items.length === 1){
        this.currentRace = raceResponse.items[0];
        this.setBetInfo();
       
      }else{
        this.currentRace = null;
        this.pageInitialized = true;
      }
    })
    .finally(() => {
      this.pageInitialized = true;
    })
   }
  
  setBetInfo(){
    this.betService.getTotalPotForRace(this.currentRace).subscribe(res => {
      this.totalBetValue = res;
    })
  }

  getEventStartCardImage() {
    return this.event && this.event.eventImage ? this.event.eventImage : '';
  }

  setTwoDecimals(input){
    return Number((Math.round(Number(input) * 100) / 100).toFixed(2));
  }
    

}
