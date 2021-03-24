import { Component, Input, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { BetService } from 'src/app/shared/services/bet.service';
import { RaceService } from 'src/app/shared/services/race.service';
import { Bet, PlayerProfile, Race } from 'src/models';
import { Observable, forkJoin } from 'rxjs';
import { PlayerProfileService } from 'src/app/shared/services/player-profile.service';

@Component({
  selector: 'app-single-race-payout',
  templateUrl: './single-race-payout.component.html',
  styleUrls: ['./single-race-payout.component.css']
})
export class SingleRacePayoutComponent implements OnInit {

  
  @Input()
  race: Race;

  raceResult;
  betsForRace: Bet[];
  playerList: PlayerProfile[];
  clicked = false;

  resultsError = false;

  betsToPay: Bet[]= [];
  updateBetCalls = [];
  getPlayerCalls = [];
  updatePlayerCalls = [];
  completBetCalls = [];

  constructor(private betService: BetService, private playerProfileService: PlayerProfileService, private api: APIService) { }

  ngOnInit() {
    this.getBetsForRace();
    this.getRaceResult();
  }


  async getBetsForRace(){
    this.betsForRace = (await this.betService.listBetWithHorses(this.race.id)).items;
  }

  async getRaceResult(){
    const results = await this.api.ListResults({ raceId: { eq: this.race.id }}) ;
    if(results.items.length === 1){
      this.raceResult = results.items[0]; 
    }
    else{
      this.resultsError = true;
    }
  }


  processBetsForRace(){
    if (confirm('Process Bets for Race ' + this.race.number + ', Winner  (Name: ' +
    this.raceResult.winningHorseName + ', Number ' + this.raceResult.winningHorseNumber +
    ', Odds ' + this.raceResult.finalOdds + ')')) {
      if (!this.raceResult || !this.raceResult.winningHorseId){
        return;
      }
      else{
        const openBetsForRace = this.getOpenBetsForRace();
        this.setBetsToPay(openBetsForRace);
        this.upDateBetJoin();
      }
    }
  }

  getOpenBetsForRace(){
    return this.betsForRace.filter(
      bet => {
        let isBetOpen = true;
        if ( bet.raceId !== this.race.id || this.isCompletedBet(bet)) {
          isBetOpen = false;
        }
        return isBetOpen;
        });
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

  upDateBetJoin(){
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
      }, err => console.log('error ' + err),
      () => console.log('Completed Processing Bets')
    );
  }

  getDistinctPlayersForBetList(betList: Bet[]) {
    return betList.map(bet => bet.playerProfileId)
    .filter((value, index, self) => self.indexOf(value) === index);
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

  setTwoDecimals(input){
    return Number((Math.round(Number(input) * 100) / 100).toFixed(2));
  }


}
