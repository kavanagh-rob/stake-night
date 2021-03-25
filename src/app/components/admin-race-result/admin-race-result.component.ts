import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RaceService } from 'src/app/shared/services/race.service';
import { Race, Result } from 'src/models';
import { APIService, CreateResultInput } from 'src/app/API.service';
import * as uuid from 'uuid';
import { BetService } from 'src/app/shared/services/bet.service';

@Component({
  selector: 'app-admin-race-result',
  templateUrl: './admin-race-result.component.html',
  styleUrls: ['./admin-race-result.component.css']
})
export class AdminRaceResultComponent implements OnInit {

  event;
  currentRace: any;
  totalBetValue = 0;
  existingRaceResult: Result;
  horsesForCurrentRace;

  selectedHorse;
  betInfoForCurrentRace;

  raceActiveError = false;
  raceNotFoundError = false;
  existingResultError = false;

  raceResultForm: FormGroup;

  constructor(private modalService: NgbModal, private route: ActivatedRoute, private api: APIService, private raceService: RaceService,  private betService: BetService) { 
    this.event = this.route.parent.snapshot.data['resolvedEvent']
  }



  ngOnInit(): void {   
    this.raceResultForm = new FormGroup({
      videoUrlInput: new FormControl(null)
    });

    this.getLiveRace();
  }

 
  openSetResultModal(horse, content){
      this.selectedHorse = horse;
      this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  async submitRaceResults(){
    if(this.raceActiveError){
      alert('Woops!!! The race is still active suspend betting before setting a winner');
      return
    }
    this.betInfoForCurrentRace = await this.betService.getBetInfoForRace(this.currentRace).toPromise();
    const result = this.createResultInput();
    const resultsForCurrentRace = await this.api.ListResults({ raceId: { eq: this.currentRace.id } });
    if(resultsForCurrentRace.items.length > 0){
      await resultsForCurrentRace.items.forEach(async res => {
       await this.api.DeleteResult({ id: res.id });
       console.log('Deleted Result: '+ res.id);
      });
    }

    this.api.CreateResult(result).then(async res => {
      document.getElementById('closeSetResultFormButton').click();
      location.reload();
    })
  }

  createResultInput(): CreateResultInput{
    return {
      'id': uuid.v4(),
      'videoUrl': this.raceResultForm.get('videoUrlInput').value,
      'totalPot': this.betInfoForCurrentRace.totalPot,
      'eventId': this.event.id,
      'raceId': this.currentRace.id,
      'finalOdds': this.getOddsForHorse(this.selectedHorse),
      'raceNumber': this.currentRace.number,
      'winningHorseId': this.selectedHorse.id,
      'winningHorseName': this.selectedHorse.name,
      'winningHorseNumber': this.selectedHorse.number,
    }
  }

  getLiveRace(){
    this.raceService.getCurrentRace(this.event.id).then(async raceResponse => {
      if (raceResponse.items.length === 1){
        this.currentRace = raceResponse.items[0];  
        if(this.currentRace.isActive){
          this.raceActiveError = true;
        }     
        const resultsForCurrentRace = await this.api.ListResults({ raceId: { eq: this.currentRace.id } });
        if(resultsForCurrentRace.items && resultsForCurrentRace.items.length > 0){
          this.existingResultError = true;
          this.existingRaceResult = resultsForCurrentRace.items[0];
        }
        this.betInfoForCurrentRace = await this.betService.getBetInfoForRace(this.currentRace).toPromise();

      }else{
        this.raceNotFoundError = true;
      }
    })
  }

  getOddsForHorse(horse){
    if(!this.betInfoForCurrentRace){
      return;
    }
    const horseBetInfo = this.betInfoForCurrentRace.filter(
          horseBetInfo => horseBetInfo.horseId === horse.id);

    if(horseBetInfo && horseBetInfo[0]){
      return horseBetInfo[0].liveOdds;
    }
      

  }

  sortHorsesByNumber(prop: string) {
    return this.currentRace.Horses.items ? this.currentRace.Horses.items.sort((a, b) => a['number'] - b['number']) : null;
  }

  getBetTotal(){
    let count = 0;
    this.betInfoForCurrentRace.forEach(horse => {
          count = count + Number(horse.betTotal);
        });
    return count;
  }

  highlightRaceWinner(horseId){
    if (this.existingRaceResult && this.existingRaceResult.raceNumber === this.currentRace.number){
      return horseId === this.existingRaceResult.winningHorseId ? {'background-color': 'green'} : '';
    }
    return '';
  }


}
