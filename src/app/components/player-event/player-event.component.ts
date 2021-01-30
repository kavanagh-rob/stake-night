import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { v1 as uuid } from 'uuid';

import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-player-event',
  templateUrl: './player-event.component.html',
  styleUrls: ['./player-event.component.css']
})
export class PlayerEventComponent implements OnInit {
  faLock = faLock;

  constructor(private route: ActivatedRoute, private router: Router) {
    const resolvedUserKey = 'resolvedPlayer';
    const resolvedUSerEventKey = 'resolvedUserEvent';
    // this.user = this.route.snapshot.data[resolvedUserKey].Item;
    // this.eventInfo = this.route.snapshot.data[resolvedUSerEventKey].Item;
  }

  // user: User;
  interval: any;
  // eventInfo: EventInfo;
  userBetsList;
  betslip: any = {};
  balanceError = false;
  stakeError = false;
  raceExpiredError = false;
  totalBetValue = 0;
  buttonClicked = false;
  placingbet = false;

  liveHorseRaceInfo: any = null;
  nextRouletteGameInfo: any = null;


  ngOnInit(): void {
    // this.setCurrentGameInfo();

    // if (this.user === undefined){
    //   this.router.navigate(['/pageNotFound']);
    // }
    // this.refreshData();
    // this.interval = setInterval(() => {
    //     this.refreshData();
    // }, 12000);
  }

  // setCurrentGameInfo() {
  //   if (this.eventInfo  && this.eventInfo.currentGame && this.eventInfo.currentGame.gameType === 'roulette'){
  //     this.nextRouletteGameInfo = this.eventInfo.currentGame;
  //   }
  //   else {
  //     this.liveHorseRaceInfo =  this.eventInfo ? this.eventInfo.currentRace : null;
  //   }
  // }



  // refreshData() {
  //   this.dataService.getEventInfo(this.user.eventId).then(eventInfoData => {
  //     this.eventInfo = eventInfoData.Item;
  //     this.setCurrentGameInfo();
  //     if (this.liveHorseRaceInfo) {
  //       this.getCurrentBetsForRace();
  //     }
  //   });
  // }

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
  //   this.betslip.raceNumber = this.liveHorseRaceInfo.raceNumber;
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
  //       this.liveHorseRaceInfo = eventInfoData.Item.currentRace;
  //       if (this.liveHorseRaceInfo.isActive){
  //         this.placeBet();
  //       }else{
  //         this.raceExpiredError = true;
  //       }
  //     });
  //   });
  // }

  // calculateBetTotals(raceBets) {
  //   this.liveHorseRaceInfo.horses.forEach(horse => {
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
  //   const currentHorse = this.liveHorseRaceInfo.horses.forEach(
  //     horse => {
  //       let factoredHorseOdds = horse.totalBetsForHorse === 0 ?
  //       this.setTwoDecimals(this.totalBetValue) : this.setTwoDecimals(Number(this.totalBetValue) / Number(horse.totalBetsForHorse));
  //       if (this.liveHorseRaceInfo.payoutFactor && this.liveHorseRaceInfo.payoutFactor > 0 && this.liveHorseRaceInfo.payoutFactor < 1) {
  //         factoredHorseOdds =   this.setTwoDecimals(factoredHorseOdds * Number(this.liveHorseRaceInfo.payoutFactor));
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
  //       if (betData.eventId !== this.eventInfo.eventInfoId || betData.raceNumber !== this.liveHorseRaceInfo.raceNumber) {
  //         return false;
  //       }
  //       return true;
  //   });
  // }

  // getUserImage(){
  //   let avator = 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Donald_Duck.svg/1200px-Donald_Duck.svg.png';
  //   if (this.user.avatorUrl){
  //     avator = this.user.avatorUrl;
  //   }
  //   return { 'background-image': 'url(' + avator + ')' };
  // }

  // getRaceCardImage(){
  //   return this.liveHorseRaceInfo && this.liveHorseRaceInfo.raceCardImageUrl && this.liveHorseRaceInfo.raceCardImageUrl !== 'N/A' ?
  //   this.liveHorseRaceInfo.raceCardImageUrl : 'https://i.pinimg.com/originals/42/3c/37/423c375c2e12c1a708ecc1694e472ff1.gif';
  // }

  // getEventStartCardImage() {
  //   return this.eventInfo && this.eventInfo.eventImage ? this.eventInfo.eventImage : '';
  // }

  // getRaceCardTitle(){
  //   return this.liveHorseRaceInfo && this.liveHorseRaceInfo.raceCardImageUrl ? 'Race Card' :
  //     'Wating On Next Race';
  // }

  // getGameStatusStyle(isActive){
  //   let actColor = '';
  //   if (isActive){
  //     actColor = 'blue';
  //   }
  //   else {
  //     actColor = 'red';
  //   }
  //   return { color: actColor };

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

  // getPoolPayoutFactor(){
  //   if (this.liveHorseRaceInfo.payoutFactor && this.liveHorseRaceInfo.payoutFactor > 0 && this.liveHorseRaceInfo.payoutFactor < 1) {
  //    return Number(this.liveHorseRaceInfo.payoutFactor) * 100;
  //   }
  //   return 100;
  // }

  // getWinPot() {
  //   if (this.liveHorseRaceInfo.payoutFactor && this.liveHorseRaceInfo.payoutFactor > 0 && this.liveHorseRaceInfo.payoutFactor < 1) {
  //     return this.setTwoDecimals(Number(this.liveHorseRaceInfo.payoutFactor) * Number(this.totalBetValue));
  //    }
  //   return this.totalBetValue;
  // }

  // setTwoDecimals(input){
  //   return Number((Math.round(Number(input) * 100) / 100).toFixed(2));
  // }
}
