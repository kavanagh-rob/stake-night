import { Component, Input, OnInit, OnChanges, ViewEncapsulation, SimpleChange } from '@angular/core';
import { Horse, Race, User } from '../../../models';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { APIService, CreateBetInput, UpdateUserInput } from 'src/app/API.service';
import { FormControl, FormGroup } from '@angular/forms';
import * as uuid from 'uuid';
import { BetService } from 'src/app/shared/services/bet.service';
import { UserService } from 'src/app/shared/services/user.service';
import { RaceService } from 'src/app/shared/services/race.service';
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

  constructor(private modalService: NgbModal, private api: APIService, private betService: BetService, private userService: UserService, private raceService: RaceService) { }

  betForm: FormGroup;

  ngOnChanges(changes: SimpleChange) {
    
  }

  ngOnInit(): void {
    this.betForm = new FormGroup({
      stake: new FormControl(null),
    });

    if(this.currentRace){
      this.betService.getBetInfoForRace(this.currentRace).subscribe((data) => {
        this.horseBetInfoList = data;
     });
    }
  }

  getLiveOdds(horse){
    const selectHorseBetInfo = this.horseBetInfoList.filter(horseBetInfo => horseBetInfo.horseId === horse.id);
    return  selectHorseBetInfo[0] ? selectHorseBetInfo[0].liveOdds : '';
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
      this.raceService.getCurrentRace(this.event.id).then(res => {
        //add this logic to race service
        this.currentRace = res.items ? res.items[0]: null;
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
    
    const updatedUser = { ...this.user }
    updatedUser.balance = this.setTwoDecimals(Number(this.user.balance) - Number(stakeInput));

    this.userService.updateUser(updatedUser).then(userUpdateRes => {
      this.user = userUpdateRes;
      const createBetInput = this.createNewBetModel(stakeInput);
      // submit bet
      this.api.CreateBet(createBetInput).then(resp => {
        document.getElementById('closeBetFormButton').click();
        location.reload();
      });

    });
  }

  createNewBetModel(stakeInput): CreateBetInput{
    return {
      id: uuid.v4(),
      raceId: this.currentRace.id,
      status: 'PENDING',
      stake: stakeInput,
      betUserId: this.user.id,
      betHorseId: this.selectedHorse.id
    };
  }

  getCurrentRace(){
    this.raceService
    if(this.event.Races){
      const currentRaces: any[] = this.event.Races.items.filter(
            race => race.isCurrentRace);
      if (currentRaces.length === 1){
        	return currentRaces[0];
      }
    }
  }

  setTwoDecimals(input){
    return Number((Math.round(Number(input) * 100) / 100).toFixed(2));
  }

}
