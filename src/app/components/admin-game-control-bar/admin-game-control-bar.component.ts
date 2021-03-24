import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RaceService } from 'src/app/shared/services/race.service';
import { Event } from 'src/models';

@Component({
  selector: 'app-admin-game-control-bar',
  templateUrl: './admin-game-control-bar.component.html',
  styleUrls: ['./admin-game-control-bar.component.css']
})
export class AdminGameControlBarComponent implements OnInit {

  @Input()
  event: Event;

  currentRace;

  interval;

  updateRaceCardForm: FormGroup;

  constructor(private modalService: NgbModal, private raceService: RaceService) { }

  ngOnInit(): void {   
    this.updateRaceCardForm = new FormGroup({
      currentRacecardUrlInput: new FormControl(null)
    });

    this.refreshData();
    this.interval = setInterval(() => {
        this.refreshData();
    }, 5000);
  }

  refreshData(){
      this.raceService.getCurrentRace(this.event.id).then(raceResponse => {
        if (raceResponse.items.length === 1){
          this.currentRace = raceResponse.items[0];
          this.updateRaceCardForm.get('currentRacecardUrlInput').setValue(this.currentRace.raceCardImageUrl);         
        }else{
          this.currentRace = null;
        }
      })
  }


  setCurrentRaceActiveStatus(isActive){
    this.raceService.getCurrentRace(this.event.id).then(raceResponse => {
      if (raceResponse.items.length === 1){
          const currentRace = raceResponse.items[0];
          currentRace.isActive = isActive;
          this.raceService.updateRace(currentRace).then(res => {
          location.reload();
          });
      }     
    });
   } 
 
   openRacecardModal(formContent) {
     this.modalService.open(formContent, {backdropClass: 'light-blue-backdrop'});
   }

   submitRaceCard(): void {
    const raceCardImageUrlInput =  this.updateRaceCardForm.get('currentRacecardUrlInput').value.trim();
    this.currentRace.raceCardImageUrl = raceCardImageUrlInput;
    this.raceService.updateRace(this.currentRace).then(res => {
      document.getElementById('closeSetCurrentRaceCardFormButton').click();
      location.reload();
      });

  }
  

}
