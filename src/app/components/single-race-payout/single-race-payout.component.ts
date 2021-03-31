import { Component, Input, OnInit } from '@angular/core';
import { APIService, UpdateBetInput } from 'src/app/API.service';
import { BetService } from 'src/app/shared/services/bet.service';
import { RaceService } from 'src/app/shared/services/race.service';
import { Bet, PlayerProfile, Race, Result } from 'src/models';
import { Observable, forkJoin } from 'rxjs';
import { PlayerProfileService } from 'src/app/shared/services/player-profile.service';
import { HorseBetInfo } from 'src/app/shared/interfaces/horse-bet-info-interface';


@Component({
  selector: 'app-single-race-payout',
  templateUrl: './single-race-payout.component.html',
  styleUrls: ['./single-race-payout.component.css']
})
export class SingleRacePayoutComponent implements OnInit {

  
  @Input()
  race: Race;

  raceResult: Result;
  betsForRace: any[];
  playerList: PlayerProfile[];
  clicked = false;

  resultsError = false;
  horseBetInfoList: HorseBetInfo[]; 
  openBetsForRace: Bet[];

  betsToPay: Bet[]= [];
  updateBetCalls = [];
  getPlayerCalls = [];
  updatePlayerCalls = [];
  completBetCalls = [];

  constructor(private betService: BetService, private playerProfileService: PlayerProfileService, private api: APIService) { }

  async ngOnInit() {
    this.betsForRace = await this.getBetsForRace();
    this.raceResult = await this.getRaceResult();
    this.horseBetInfoList = await this.getHorseBetInfoForRace();
    await this.setBetResultInfo();
    this.openBetsForRace = await this.getOpenBetsForRace();

  }



  
  async getBetsForRace(){
   return (await this.betService.listBetWithHorses(this.race.id)).items;
  }

  async getRaceResult(){
    let raceResult = null;;
    const results = await this.api.ListResults({ raceId: { eq: this.race.id }}) ;
   
    if(results.items.length === 1){
      raceResult = results.items[0]; 
    }
    else{
      this.resultsError = true;
    }
    return raceResult;
  }

  async getHorseBetInfoForRace(){
    return await this.betService.getBetInfoForRace(this.race).toPromise();
  }

  async setBetResultInfo() {
    this.betsForRace.forEach(bet => {
      // change this for no stats check
      if (bet.result === 'N/A' || bet.result === 'PENDING'){
        const startingPrice =  this.getHorseOdds(bet.Horse.id);
        if (!startingPrice) {
          return;
        }
        bet.finalOdds = bet.result === 'WIN' ? this.raceResult.finalOdds: startingPrice;
        bet.result = this.getBetResult(bet.Horse.id);
        bet.payout = bet.result === 'WIN' ? this.setTwoDecimals(Number(this.raceResult.finalOdds) * Number(bet.stake)) : 0;
      }
    });
  }

  getHorseOdds(horseId){
    return this.horseBetInfoList.filter(
      horseBetInfo => horseBetInfo.horseId === horseId)[0].liveOdds;
  }

  getBetResult(horseId) {
      return this.raceResult.winningHorseId === horseId ? 'WIN' : 'LOSE'  
  }



  processBetsForRace(){
    if (confirm('Process Bets for Race ' + this.race.number + ', Winner  (Name: ' +
    this.raceResult.winningHorseName + ', Number ' + this.raceResult.winningHorseNumber +
    ', Odds ' + this.raceResult.finalOdds + ')')) {
      if (!this.raceResult || !this.raceResult.winningHorseId){
        return;
      }
      else{
        this.setBetsToPay(this.openBetsForRace);
        this.updateBetJoin();
      }
    }
  }

  getOpenBetsForRace(){
    return this.betsForRace.filter(
      bet => {
        let isBetOpen = true;
        if (this.isCompletedBet(bet)) {
          isBetOpen = false;
        }
        return isBetOpen;
        });
  }

  isCompletedBet(bet: Bet){
    let isCompleted = false;
    if ((bet.result === 'PENDING')){
      isCompleted = false;
    }
    else if ((bet.isProcessed && bet.result !== 'WIN')){
      isCompleted = true;
    }
    else if (bet.result === 'WIN' && bet.paymentStatus === 'COMPLETE') {
      isCompleted = true;
    }
    return isCompleted;
  }

  setBetsToPay(openBetsForRace){
    openBetsForRace.forEach( openBet => {
        openBet.isProcessed = true;
        if ( !(openBet.paymentStatus === 'COMPLETE') && openBet.result === 'WIN') {
            openBet.paymentStatus = 'PROCESSING';
            this.betsToPay.push(openBet);
        }
        this.updateBetCalls.push(this.betService.updateBet(openBet));
    });
   }

  updateBetJoin(){
    forkJoin(this.updateBetCalls).subscribe(
      data => { // Note: data is an array now
        this.getDistinctPlayersToPay();
        this.getPlayerJoin();

      }, err => console.log('error ' + err),
      () => console.log('Get Update Bet Ok ')
    );
  }

  getDistinctPlayersToPay() {
    const profileIDsToPay = this.getDistinctPlayersForBetList(this.betsToPay);
    profileIDsToPay.forEach(distinctPlayerProfileId => {
        this.getPlayerCalls.push(
          this.api.GetPlayerProfile(distinctPlayerProfileId));
    });
  }

  getPlayerJoin() {
    forkJoin(this.getPlayerCalls).subscribe(
      data => { // Note: data is an array now
        data.forEach(res => {
          const player: any = res;
          const winningBetsForPlayer = this.betsToPay.filter(
            bet => bet.playerProfileId === player.id);
            winningBetsForPlayer.forEach(winBet => {
            player.balance = this.setTwoDecimals(Number(player.balance) + Number(winBet.payout));
          });
          this.payPlayer(player, winningBetsForPlayer);
        });

      }, err => console.log('error ' + err),
      () => console.log('Get Players Ok ')
    );
  }

  payPlayer(player: PlayerProfile, winningBetsForPlayer) {
    // update player balance
    this.playerProfileService.updatePlayerProfile(player).then(resp => {
      const completedBetPromises = [];
      winningBetsForPlayer.forEach(winBet => {
        winBet.paymentStatus = 'COMPLETE';
        completedBetPromises.push(this.betService.updateBet(winBet));
      });
      this.completeBetJoin(completedBetPromises);
    });
  }

  completeBetJoin(completedBetPromises){
    forkJoin(this.updatePlayerCalls).subscribe(
      data => { // Note: data is an array now
        location.reload();
      }, err => console.log('error ' + err),
      () => console.log('Completed Processing Bets')
    );
  }

  getDistinctPlayersForBetList(betList: Bet[]) {
    return betList.map(bet => bet.playerProfileId)
    .filter((value, index, self) => self.indexOf(value) === index);
  }


  getBetColor(bet) {
    let color = '';
    if (bet.isProcessed && bet.result === 'LOSE') {
      color = 'red';
    }
    if (!bet.isProcessed && bet.result === 'LOSE') {
      color = 'lightsalmon';
    }
    if (!bet.isProcessed && bet.result === 'WIN' ) {
      color = 'lightgreen';
    }
    if (bet.paymentStatus && bet.paymentStatus === 'PROCESSING' ) {
      color = 'orange';
    }
    if (bet.paymentStatus && bet.paymentStatus === 'COMPLETE') {
      color = 'green';
    }
    return { 'background-color': color };
  }

  getSubmitButtonText(){
    return this.openBetsForRace && this.openBetsForRace.length > 0 ? 'Process Bets for Race '+ this.race.number : 'All Bets Closed';
  }

  setTwoDecimals(input){
    return Number((Math.round(Number(input) * 100) / 100).toFixed(2));
  }


}
