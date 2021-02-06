import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { v1 as uuid } from 'uuid';

import { APIService } from 'src/app/API.service';
import { Event, User } from '../../../models';

@Component({
  selector: 'app-player-event',
  templateUrl: './player-event.component.html',
  styleUrls: ['./player-event.component.css']
})
export class PlayerEventComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private api: APIService) {
      this.event = this.route.snapshot.data['resolvedEvent'];
      this.user = this.route.snapshot.data['resolvedPlayer'];
  }
     
  event: any;
  user: User;

  // user: User;
  interval: any;
  // eventInfo: EventInfo;

  totalBetValue = 100;

  currentRace: any = null;
  nextRouletteGameInfo: any = null;


  ngOnInit(): void {
    this.setCurrentGameInfo();

    if (this.user === undefined){
      this.router.navigate(['/pageNotFound']);
    }
    this.refreshData();
    // this.interval = setInterval(() => {
    //     this.refreshData();
    // }, 12000);
  }

  
  setTestData(){
    this.event.type = 'race';
    this.event.Races = [];
    this.event.Races.push({isCurrentRace: true, time: 'soon', number: '0', isActive: true, id: '001',
      Horses: [{name: 'horse1', number: 1, liveOdds: 5, raceId: '001', id: '1215'}, {name: 'horse2', number: 2, liveOdds: 0.0, raceId: '001', id: '1215'}]});     
  }

  setCurrentGameInfo() {
    if (this.event  && this.event.type === 'race'){
        this.currentRace =  this.getCurrentRace();
    }
  }

  getCurrentRace(){
    if(this.event.Races){
      const currentRaces: any[] = this.event.Races.filter(
            race => race.isCurrentRace);
      if (currentRaces.length === 1){
        	return currentRaces[0];
      }
    }
  }

    
  refreshData() {
    this.api.GetEvent(this.event.id).then(eventResponse => {
      this.event = eventResponse;
      this.setTestData();
      this.setCurrentGameInfo();
      if (this.currentRace) {
        // this.getCurrentBetsForRace();
      }
    });
  }


    
  getWinPot() {
    if (this.currentRace.payoutFactor && this.currentRace.payoutFactor > 0 && this.currentRace.payoutFactor < 1) {
      return this.setTwoDecimals(Number(this.currentRace.payoutFactor) * Number(this.totalBetValue));
     }
    return this.totalBetValue;
  }

  getPoolPayoutFactor(){
    if (this.currentRace.payoutFactor && this.currentRace.payoutFactor > 0 && this.currentRace.payoutFactor < 1) {
     return Number(this.currentRace.payoutFactor) * 100;
    }
    return 100;
  }

  getUserImage(){
    let avator = 'https://www.disneyclips.com/images/images/donald-duck25.png';
    if (this.user.avatorUrl){
      avator = this.user.avatorUrl;
    }
    return { 'background-image': 'url(' + avator + ')' };
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

  // getCurrentBetsForRace() {
  //   const betsQueryData: any = {};
  //   betsQueryData.table_name = this.eventInfo.dbBetTableName;
  //   this.dataService.queryBets(betsQueryData).then(res => {
  //     this.calculateCurrentOdds(res.Items);
  //     this.getUserBets(res.Items);
  //   });
  // }

  // calculateCurrentOdds(betList){
  //   this.totalBetValue = 0;
  //   const raceBets = this.filterBetsForRace(betList);
  //   this.calculateBetTotals(raceBets);
  // }

  // getUserBets(betList){
  //   this.userBetsList = betList.filter(
  //     bets => bets.userId === this.user.userId);
  // }

  // requestBet() {
  //   this.balanceError = false;
  //   this.stakeError = false;
  //   this.raceExpiredError = false;
  //   this.betslip.result = 'PENDING';
  //   this.betslip.eventId = this.eventInfo.eventInfoId;
  //   this.betslip.raceNumber = this.currentRace.raceNumber;
  //   this.betslip.userId = this.user.userId;
  //   this.betslip.userName = this.user.name;
  //   this.betslip.userBalance = this.setTwoDecimals(this.user.balance);

  //   const stake = Number(this.betslip.stake);
  //   if (!stake || isNaN(stake) || stake < 1) {
  //     this.stakeError = true;
  //     return;
  //   }

  //   this.dataService.getUserById(this.user.userId).then(res => {
  //     this.user = res.Item;
  //     if ( Number(this.user.balance) < Number(this.betslip.stake)) {
  //       this.balanceError = true;
  //       return;
  //     }
  //     this.dataService.getEventInfo(this.user.eventId).then(eventInfoData => {
  //       this.currentRace = eventInfoData.Item.currentRace;
  //       if (this.currentRace.isActive){
  //         this.placeBet();
  //       }else{
  //         this.raceExpiredError = true;
  //       }
  //     });
  //   });
  // }

  // calculateBetTotals(raceBets) {
  //   this.currentRace.horses.forEach(horse => {
  //     let betTotalForHorse = 0;
  //     const betsForHorse = raceBets.filter(
  //       bets => bets.horseNumber === horse.horseNumber);
  //     betsForHorse.forEach(betForHorse => {
  //         betTotalForHorse = betTotalForHorse + Number(betForHorse.stake);
  //       });
  //     horse.totalBetsForHorse = betTotalForHorse;
  //     this.totalBetValue = Number(this.totalBetValue) + Number(betTotalForHorse);
  //   });
  //   this.totalBetValue = this.setTwoDecimals(this.totalBetValue);
  //   this.getLiveToteOdds();
  // }

  // getLiveToteOdds() {
  //   const currentHorse = this.currentRace.horses.forEach(
  //     horse => {
  //       let factoredHorseOdds = horse.totalBetsForHorse === 0 ?
  //       this.setTwoDecimals(this.totalBetValue) : this.setTwoDecimals(Number(this.totalBetValue) / Number(horse.totalBetsForHorse));
  //       if (this.currentRace.payoutFactor && this.currentRace.payoutFactor > 0 && this.currentRace.payoutFactor < 1) {
  //         factoredHorseOdds =   this.setTwoDecimals(factoredHorseOdds * Number(this.currentRace.payoutFactor));
  //       }
  //       horse.liveOdds = factoredHorseOdds;
  //       });
  // }

  // setSelectedHorse(horse){
  //   this.placingbet = false;
  //   this.buttonClicked = false;
  //   this.balanceError = false;
  //   this.raceExpiredError = false;
  //   this.stakeError = false;
  //   this.betslip.horseNumber = horse.horseNumber;
  //   this.betslip.horseName = horse.name;
  // }

  // placeBet() {
  //   if (this.placingbet){
  //     return;
  //   }
  //   this.placingbet = true;
  //   const userData: any = {};
  //   this.user.balance = Number(this.user.balance) - Number(this.betslip.stake);
  //   this.user.balance = this.setTwoDecimals(this.user.balance);
  //   userData.item = this.user;
  //   userData.table_name = 'RN_Users';

  //   // update user balance
  //   this.dataService.putTableInfo(userData).then(res => {
  //     const betData: any = {};
  //     betData.table_name = this.eventInfo.dbBetTableName;
  //     this.betslip.stake = this.setTwoDecimals(this.betslip.stake);
  //     betData.item = this.betslip;
  //     this.betslip.betId = uuid();
  //     this.betslip.eventId = this.eventInfo.eventInfoId ;
  //     // submit bet
  //     this.dataService.putTableInfo(betData).then(resp => {
  //       document.getElementById('closeBetFormButton').click();
  //       location.reload();
  //     });
  //   });
  // }

  // filterBetsForRace(betList) {
  //   return betList.filter(
  //     betData => {
  //       if (betData.eventId !== this.eventInfo.eventInfoId || betData.raceNumber !== this.currentRace.raceNumber) {
  //         return false;
  //       }
  //       return true;
  //   });
  // }



  // getRaceCardImage(){
  //   return this.currentRace && this.currentRace.raceCardImageUrl && this.currentRace.raceCardImageUrl !== 'N/A' ?
  //   this.currentRace.raceCardImageUrl : 'https://i.pinimg.com/originals/42/3c/37/423c375c2e12c1a708ecc1694e472ff1.gif';
  // }

  // getEventStartCardImage() {
  //   return this.eventInfo && this.eventInfo.eventImage ? this.eventInfo.eventImage : '';
  // }

  // getRaceCardTitle(){
  //   return this.currentRace && this.currentRace.raceCardImageUrl ? 'Race Card' :
  //     'Wating On Next Race';
  // }

  
  // getBetColor(bet){
  //   let color = '';
  //   if (bet.paymentStatus === 'COMPLETE'){
  //     color = 'green';
  //   }
  //   else if (bet.paymentStatus === 'PROCESSING'){
  //     color = 'grey';
  //   }
  //   else if (bet.result === 'WIN'){
  //     color = 'lightgreen';
  //   }
  //   else if (bet.result === 'LOSE'){
  //     color = 'lightcoral';
  //   }
  //   else {
  //     color = 'orange';
  //   }
  //   return { 'background-color': color };
  // }

  // sortBetByRace(prop: string) {
  //   if (! this.userBetsList){
  //     return;
  //   }
  //   const raceNumberProp = 'raceNumber';
  //   const horseNumberProp = 'horseNumber';
  //   const sortByHorse = this.userBetsList.sort((a, b) =>
  //     a[horseNumberProp] > b[horseNumberProp] ? 1 : a[horseNumberProp] === b[horseNumberProp] ? 0 : -1);

  //   return  sortByHorse.sort((a, b) =>
  //     b[raceNumberProp] - a[raceNumberProp]);
  // }




  setTwoDecimals(input){
    return Number((Math.round(Number(input) * 100) / 100).toFixed(2));
  }
}
