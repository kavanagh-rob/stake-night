import { Component, Input, OnInit, OnChanges, ViewEncapsulation, SimpleChange } from '@angular/core';
import { Horse, Race, PlayerProfile } from '../../../models';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { APIService, CreateBetInput, UpdatePlayerProfileInput } from 'src/app/API.service';
import { FormControl, FormGroup } from '@angular/forms';
import * as uuid from 'uuid';
import { BetService } from 'src/app/shared/services/bet.service';
import { PlayerProfileService } from 'src/app/shared/services/player-profile.service';
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
  currentRace: any;

  @Input()
  playerProfile: PlayerProfile;

  @Input()
  event: any;

  selectedHorse: Horse;
  horseBetInfoList: HorseBetInfo[]; 

  balanceError = false;
  stakeError = false;
  raceExpiredError = false;
  buttonClicked = false;
  placingbet = false;

  constructor(private modalService: NgbModal, private api: APIService, private betService: BetService, private playerProfileService: PlayerProfileService, private raceService: RaceService) { }

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
    return  selectHorseBetInfo[0] ? selectHorseBetInfo[0].liveOdds : null;
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

    this.api.GetPlayerProfile(this.playerProfile.id).then(res => {
      if ( Number(this.playerProfile.balance) < Number(stake)) {
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
    
    const updatedPlayerProfile = { ...this.playerProfile }
    updatedPlayerProfile.balance = this.setTwoDecimals(Number(this.playerProfile.balance) - Number(stakeInput));

    this.playerProfileService.updatePlayerProfile(updatedPlayerProfile).then(userUpdateRes => {
      this.playerProfile = userUpdateRes;
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
      raceNumber: this.currentRace.number,
      result: 'PENDING',
      stake: stakeInput,
      playerProfileId: this.playerProfile.id,
      playerName: this.playerProfile.name,
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

  sortHorsesByNumber(prop: string) {
    return this.currentRace.Horses.items ? this.currentRace.Horses.items.sort((a, b) => a['number'] - b['number']) : null;
  }

  setTwoDecimals(input){
    return Number((Math.round(Number(input) * 100) / 100).toFixed(2));
  }

}
