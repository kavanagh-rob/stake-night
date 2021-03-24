import { Component, Input, OnInit } from '@angular/core';
import { Race } from 'src/models';

@Component({
  selector: 'app-race-card',
  templateUrl: './race-card.component.html',
  styleUrls: ['./race-card.component.css']
})
export class RaceCardComponent {

  @Input()
  currentRace: Race;

  constructor() { }

  getRaceCardTitle(){
    return this.currentRace && this.currentRace.raceCardImageUrl ? 'Race Card' :
      'Wating On Next Race';
  }

  getRaceCardImage(){
    return this.currentRace && this.currentRace.raceCardImageUrl && this.currentRace.raceCardImageUrl !== 'N/A' ?
    this.currentRace.raceCardImageUrl : 'https://i.pinimg.com/originals/42/3c/37/423c375c2e12c1a708ecc1694e472ff1.gif';
  }

}
