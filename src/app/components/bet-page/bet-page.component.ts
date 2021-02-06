import { Component, Input, OnInit, OnChanges, ViewEncapsulation, SimpleChange } from '@angular/core';
import { Horse, Race, User } from '../../../models';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { APIService, CreateBetInput, UpdateUserInput } from 'src/app/API.service';
import { FormControl, FormGroup } from '@angular/forms';
import * as uuid from 'uuid';
import { BetService } from 'src/app/shared/services/bet.service';
import { HorseBetInfo } from 'src/app/shared/interfaces/horse-bet-info-interface';


@Component({
  selector: 'app-bet-page',
  templateUrl: './bet-page.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./bet-page.component.css']
})
export class BetPageComponent implements OnInit  {
  faLock = faLock;

  @Input()
  currentRace: Race;

  @Input()
  user: User;

  @Input()
  event: any;

  selectedHorse: Horse;
  horseBetInfoList: HorseBetInfo[]; 

  balanceError = false;
  stakeError = false;
  raceExpiredError = false;
  buttonClicked = false;
  placingbet = false;

  constructor(private modalService: NgbModal, private api: APIService, private betService: BetService) { }

  betForm: FormGroup;

  ngOnChanges(changes: SimpleChange) {
    if(this.currentRace){
      this.betService.getBetInfoForRace(this.currentRace).subscribe((data) => {
        this.horseBetInfoList = data;
        console.log(data);
     });
    }
  }

  ngOnInit(): void {
    this.betForm = new FormGroup({
      stake: new FormControl(null),
    });

   
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
      this.selectedHorse = horse;
  }

  requestBet() {
    this.balanceError = false;
    this.stakeError = false;
    this.raceExpiredError = false;

    const stake = Number(this.betForm.get('stake').value);

    if (!stake || isNaN(stake) || stake < 1) {
      this.stakeError = true;
      return;
    }

    this.api.GetUser(this.user.id).then(res => {
      if ( Number(this.user.balance) < Number(stake)) {
        this.balanceError = true;
        return;
      }
      this.api.GetEvent(this.event.id).then(res => {
        this.event = res;
        this.currentRace = this.getCurrentRace();
        if(this.currentRace){
          if (this.currentRace.isActive){
            this.placeBet(stake);
          }else{
            this.raceExpiredError = true;
          }
        }
      });
    });
  }

  placeBet(stakeInput) {
    if (this.placingbet){
      return;
    }
    this.placingbet = true;
    
    const updateUser: UpdateUserInput = {
      id : this.user.id,
      balance : this.setTwoDecimals(Number(this.user.balance) - Number(stakeInput)),
      name: this.user.name,
      payments:  this.user.payments,
      eventId: this.user.eventId,
      avatorUrl: 'https://www.disneyclips.com/images/images/donald-duck25.png',
      _version: this.user['_version']
    };

    this.api.UpdateUser(updateUser).then(userUpdateRes => {
      this.user = userUpdateRes
      const betData: CreateBetInput = {
        id: uuid.v4(),
        raceId: this.currentRace.id,
        status: 'PENDING',
        stake: stakeInput,
        betUserId: this.user.id,
        betHorseId: this.selectedHorse.id
      };
      console.log(betData);

      // submit bet
      this.api.CreateBet(betData).then(resp => {
        document.getElementById('closeBetFormButton').click();
        location.reload();
      });

    });
  }

  getCurrentRace(){
    this.setTestData();
    if(this.event.Races){
      const currentRaces: any[] = this.event.Races.filter(
            race => race.isCurrentRace);
      if (currentRaces.length === 1){
        	return currentRaces[0];
      }
    }
  }

  setTestData(){
    this.event.type = 'race';
    this.event.Races = [];
    this.event.Races.push({isCurrentRace: true, time: 'soon', number: '0', isActive: true, id:'001',
      Horses: [{name: 'horse1', number: 1, liveOdds: 5, raceId: '001', id: '1215'}, {name: 'horse2', number: 2, liveOdds: 0.0, raceId: '001', id: '1215'}]});    
  }
  setTwoDecimals(input){
    return Number((Math.round(Number(input) * 100) / 100).toFixed(2));
  }

}
