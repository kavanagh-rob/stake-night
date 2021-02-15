import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { APIService, CreateBetInput } from 'src/app/API.service';
import { APICustomService } from 'src/app/API-Custom.service';
import { Bet, Horse, Race } from 'src/models';
import { HorseBetInfo } from '../interfaces/horse-bet-info-interface';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private api: APIService, private customApi: APICustomService) { }

  totalBetValue;
  betInfoSubscriber: Subscriber<HorseBetInfo[]>;
  betTotalSubscriber: Subscriber<number>;

  horseBetInfoArray: HorseBetInfo[] = [];

  getBetInfoForRace(currentRace: Race): Observable <HorseBetInfo[]>{
    return new Observable(subscriber => {
      this.betInfoSubscriber = subscriber;
      this.customApi.ListBetsWithHorseInfo({ raceId: { eq: currentRace.id } }).then(listBetsRes => { // Success
        this.calculateBetTotals(currentRace, listBetsRes.items);
      });
    });
  }

  getTotalPotForRace(currentRace: Race): Observable <number>{
    return new Observable(subscriber => {
      this.betTotalSubscriber = subscriber;
      this.api.ListBets({ raceId: { eq: currentRace.id } }).then(listBetsRes => { // Success
        let count = 0;
        listBetsRes.items.forEach(bet => {
          count = count + bet.stake;
        });
        this.betTotalSubscriber.next(count);
        this.betTotalSubscriber.complete();
      });
    });
  }

  private calculateBetTotals(currentRace: Race, raceBets: Bet[]) { 
    this.totalBetValue = 0;
    this.api.ListHorses({ raceID: { eq: currentRace.id } }).then(listHorseRes => {
      const horseList: Horse[] = listHorseRes.items;
      horseList.forEach(horse => {
        let betTotalForHorse = 0;
        const betsForHorse = raceBets.filter(
          bet => bet.Horse.id === horse.id);
        betsForHorse.forEach(betForHorse => {
            betTotalForHorse = Number(betTotalForHorse) + Number(betForHorse.stake);
          });
        this.horseBetInfoArray.push({horseId: horse.id, betTotal: betTotalForHorse});
        this.totalBetValue = Number(this.totalBetValue) + Number(betTotalForHorse);
      });
      this.getLiveToteOdds(horseList, currentRace.payoutFactor);

    }); 

    this.totalBetValue = this.setTwoDecimals(this.totalBetValue); 
  }

  private getLiveToteOdds(horseList: Horse[], payoutFactor) {
    horseList.forEach(
      horse => {
        const totalBetsForHorse =  this.getBetTotalForHorse(horse.id)
        let factoredHorseOdds = totalBetsForHorse === 0 ?
        this.setTwoDecimals(this.totalBetValue) : this.setTwoDecimals(Number(this.totalBetValue) / Number(totalBetsForHorse));
        if (payoutFactor && payoutFactor > 0 && payoutFactor < 1) {
          factoredHorseOdds =   this.setTwoDecimals(factoredHorseOdds * Number(payoutFactor));
        }
        this.getBetInfoForHorse(horse.id).liveOdds = factoredHorseOdds;
      });
      this.betInfoSubscriber.next(this.horseBetInfoArray);
      this.betInfoSubscriber.complete();
  }

  private getBetTotalForHorse(horseId){
    return this.getBetInfoForHorse(horseId) ? this.getBetInfoForHorse(horseId).betTotal : 0;
   }

  private getBetInfoForHorse(horseId){
   return this.horseBetInfoArray.filter(
    horseBetInfo => horseBetInfo.horseId === horseId)[0];
  }

   private setTwoDecimals(input){
    return Number((Math.round(Number(input) * 100) / 100).toFixed(2));
  }

 

  
}
