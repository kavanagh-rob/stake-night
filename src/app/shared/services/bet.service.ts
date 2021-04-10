import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { APIService, CreateBetInput, ListBetsQuery, UpdateBetInput } from 'src/app/API.service';
import { APICustomService } from 'src/app/API-Custom.service';
import { Bet, Horse, Race } from 'src/models';
import { HorseBetInfo } from '../interfaces/horse-bet-info-interface';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private api: APIService, private customApi: APICustomService) { }

  totalBetValue;

  // horseBetInfoArray: HorseBetInfo[] = [];

  updateBet(bet) {
    const updatedRace = this.copyBetModel(bet);
    return this.api.UpdateBet(updatedRace);
  }

  copyBetModel(bet: Bet): UpdateBetInput {
    return {
      id: bet.id,
      isProcessed: bet.isProcessed,
      finalOdds: bet.finalOdds,
      payout: bet.payout,
      result: bet.result,
      stake: bet.stake,
      raceId: bet.raceId,
      eventId: bet.eventId,
      playerProfileId: bet.playerProfileId,
      playerName: bet.playerName,
      paymentStatus: bet.paymentStatus,
      raceNumber: bet.raceNumber,
      betHorseId: bet.Horse.id
    };

  }

  getBetsForEventByUser(eventId: string, playerProfileId: string): Promise<ListBetsQuery>{
      return this.customApi.ListBetsWithHorseInfo({ eventId: { eq: eventId },  playerProfileId: { eq: playerProfileId }  });
  }

  getBetInfoForRace(race: Race): Observable <HorseBetInfo[]>{
    return new Observable( betInfoSubscriber => {
      this.customApi.ListBetsWithHorseInfo({ raceId: { eq: race.id } }).then(listBetsRes => { // Success
        this.calculateBetTotals(race, listBetsRes.items, betInfoSubscriber);
      });
    });
  }


  listBetWithHorses(raceId: string){
    return this.customApi.ListBetsWithHorseInfo({ raceId: { eq: raceId } });
  }

  getTotalPotForRace(currentRace: Race): Observable <number>{
    return new Observable(betTotalSubscriber => {
      this.api.ListBets({ raceId: { eq: currentRace.id } }).then(listBetsRes => { // Success
        let count = 0;
        listBetsRes.items.forEach(bet => {
          count = count + bet.stake;
        });
        betTotalSubscriber.next(count);
        betTotalSubscriber.complete();
      });
    });
  }

  private calculateBetTotals(currentRace: Race, raceBets: Bet[], betInfoSubscriber) { 
    const horseBetInfoArray: HorseBetInfo[] = [];
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
        horseBetInfoArray.push({horseId: horse.id, betTotal: betTotalForHorse});
        this.totalBetValue = Number(this.totalBetValue) + Number(betTotalForHorse);
      });
      this.getLiveToteOdds(horseList, horseBetInfoArray, currentRace.payoutFactor, betInfoSubscriber);

    }); 

    this.totalBetValue = this.setFourDecimals(this.totalBetValue);
  }

  private getLiveToteOdds(horseList: Horse[], horseBetInfoArray: HorseBetInfo[], payoutFactor, betInfoSubscriber) {
    horseList.forEach(
      horse => {
        const totalBetsForHorse =  this.getBetTotalForHorse(horseBetInfoArray, horse.id)
        let factoredHorseOdds = totalBetsForHorse === 0 ?
        this.setFourDecimals(this.totalBetValue) : this.setFourDecimals(Number(this.totalBetValue) / Number(totalBetsForHorse));
        if (payoutFactor && payoutFactor > 0 && payoutFactor < 1) {
          factoredHorseOdds =   this.setFourDecimals(factoredHorseOdds * Number(payoutFactor));
        }
        this.getBetInfoForHorse(horseBetInfoArray,horse.id).liveOdds = factoredHorseOdds;
      });
      betInfoSubscriber.next(horseBetInfoArray);
      betInfoSubscriber.complete();
  }

  private getBetTotalForHorse(horseBetInfoArray, horseId){
    return this.getBetInfoForHorse(horseBetInfoArray, horseId) ? this.getBetInfoForHorse(horseBetInfoArray, horseId).betTotal : 0;
   }

  private getBetInfoForHorse(horseBetInfoArray, horseId){
   return horseBetInfoArray.filter(
    horseBetInfo => horseBetInfo.horseId === horseId)[0];
  }

   private setFourDecimals(input){
    return Number((Math.round(Number(input) * 100) / 100).toFixed(4));
  }

 

  
}
