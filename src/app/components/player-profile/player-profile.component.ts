import { Component, Input, OnInit } from '@angular/core';
import { BetService } from 'src/app/shared/services/bet.service';
import { PlayerProfile, Race } from 'src/models';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  @Input()
  currentRace: Race;

  @Input()
  playerProfile: PlayerProfile;

  @Input()
  totalBetValue;


  constructor() { }

  ngOnInit(): void {
  }

  // getUserImage(){
  //   let avator = 'https://www.disneyclips.com/images/images/donald-duck25.png';
  //   if (this.playerProfile.avatorUrl){
  //     avator = this.playerProfile.avatorUrl;
  //   }
  //   return { 'background-image': 'url(' + avator + ')' };
  // }

  getUserImage(){
    let avator = 'https://www.disneyclips.com/images/images/donald-duck25.png';
    if (this.playerProfile.avatorUrl){
      avator = this.playerProfile.avatorUrl;
    }
    return avator;
  }
  
  getPoolPayoutFactor(){
    if (this.currentRace.payoutFactor && this.currentRace.payoutFactor > 0 && this.currentRace.payoutFactor < 1) {
     return Number(this.currentRace.payoutFactor) * 100;
    }
    return 100;
  }

  getWinPot() {
    if (this.currentRace.payoutFactor && this.currentRace.payoutFactor > 0 && this.currentRace.payoutFactor < 1) {
      return this.setTwoDecimals(Number(this.currentRace.payoutFactor) * Number(this.totalBetValue));
     }
    return this.totalBetValue;
  }

  getGameStatusStyle(isActive){
    let actColor = '';
    if (isActive){
      actColor = 'blue';
    }
    else {
      actColor = 'red';
    }
    return { color: actColor };

  }

  setTwoDecimals(input){
    return Number((Math.round(Number(input) * 100) / 100).toFixed(2));
  }


}
