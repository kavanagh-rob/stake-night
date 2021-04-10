import { Component, Input, OnInit } from '@angular/core';
import { BetService } from 'src/app/shared/services/bet.service';
import { PlayerProfile, Race, Event } from 'src/models';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor( private betService: BetService) { }

  @Input()
  currentRace: Race;

  @Input()
  playerProfile: PlayerProfile;

  @Input()
  event: Event

  payments;

  accordianOpened = -1 ;

  userBetsList;


  ngOnInit(): void {
    this.parsePayments();
    this.getCurrentBetsForRace();
  }


  
  getCurrentBetsForRace() {
    this.betService.getBetsForEventByUser(this.event.id, this.playerProfile.id).then(res => { 
     this.userBetsList = res.items;
    })
  }

  sortBetByRace(prop: string) {
    if (! this.userBetsList){
      return;
    }
    const sortByHorse = this.userBetsList.sort((a, b) =>
      a.Horse['number'] > b.Horse['number'] ? 1 : a.Horse['number'] === b.Horse['number'] ? 0 : -1);

    return  sortByHorse.sort((a, b) =>
      b['raceNumber'] - a['raceNumber']);
  }
    

  sortBets(prop: string) {
    if (!this.userBetsList){
      return;
    }
    return  this.userBetsList.sort((a, b) =>
      new Date(b['date']).valueOf() - new Date(a['date']).valueOf()
      );
  }


  parsePayments(){
    this.payments = JSON.parse(this.playerProfile.payments);
  }

  sortPayments(prop: string) {
    return this.payments ? this.payments.sort((a, b) => new Date(b['date']).valueOf() - new Date(a['date']).valueOf()) : null;
  }
  
  getBetColor(bet){
    let color = '';
    if (bet.paymentStatus === 'COMPLETE'){
      color = 'green';
    }
    else if (bet.paymentStatus === 'PROCESSING'){
      color = 'grey';
    }
    else if (bet.result === 'WIN'){
      color = 'lightgreen';
    }
    else if (bet.result === 'LOSE'){
      color = 'lightcoral';
    }
    else {
      color = 'orange';
    }
    return { 'background-color': color };
  }

  toggleAccordian(index) {
    this.accordianOpened = this.accordianOpened === index ? -1 : index;
  }

}
