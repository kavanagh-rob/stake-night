import { Component, Input, OnInit, ViewEncapsulation  } from '@angular/core';
import { Race, User } from '../../../models';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bet-page',
  templateUrl: './bet-page.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./bet-page.component.css']
})
export class BetPageComponent implements OnInit {
  faLock = faLock;
  closeResult: string;

  @Input()
  currentRace: Race;

  @Input()
  user: User;

  @Input()
  event: any;

  userBetsList;
  betslip: any = {};
  balanceError = false;
  stakeError = false;
  raceExpiredError = false;
  buttonClicked = false;
  placingbet = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  requestBet(){
    
  }

  openBetModal(horse, content) {
    this.setSelectedHorse(horse);
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  setSelectedHorse(horse){
      this.placingbet = false;
      this.buttonClicked = false;
      this.balanceError = false;
      this.raceExpiredError = false;
      this.stakeError = false;
      this.betslip.horseNumber = horse.number;
      this.betslip.horseName = horse.name;
    }

}
