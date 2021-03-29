import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { APIService } from 'src/app/API.service';

import { PlayerProfileService } from 'src/app/shared/services/player-profile.service';

@Component({
  selector: 'app-player-event-register',
  templateUrl: './player-event-register.component.html',
  styleUrls: ['./player-event-register.component.css']
})
export class PlayerEventRegisterComponent implements OnInit {

  constructor(private modalService: NgbModal, private api: APIService, private playerProfileService: PlayerProfileService) { }

  eventRegisterForm: FormGroup;
  selectedEvent: any;

  eventNotFoundError = false;
  profileExistsError = false;

  ngOnInit(): void {
    this.eventRegisterForm = new FormGroup({
      eventId: new FormControl('racenight'),
      name: new FormControl(null),
      avatorUrl: new FormControl(null),
    });
  }

  openRegisterModal(content) {
    this.selectedEvent = null;
    this.eventNotFoundError = false;
    this.profileExistsError = false;
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
    this.setSelectedEvent();
  }

  async setSelectedEvent(){
    const eventId: string = this.eventRegisterForm.get('eventId').value.toLowerCase().trim();
    this.selectedEvent = await this.api.GetEvent(eventId);
  }

  async registerForEvent(){
    this.eventNotFoundError = false;
    this.profileExistsError = false;
    if (this.eventRegisterForm.valid) {
      const eventId = this.eventRegisterForm.get('eventId').value.toLowerCase().trim();
      this.selectedEvent = await this.api.GetEvent(eventId);
      if(this.selectedEvent === null){
        this.eventNotFoundError = true;
        return;
      }
      const userProfiles = await this.playerProfileService.listPlayerProfilesForCurrentUserByEventId(eventId);
      if(userProfiles.items.length > 0){
        this.profileExistsError = true;
        return;
      }
      this.createPlayer(eventId);

    }
  }



  createPlayer(eventId): void {
    const playerProfileInput = this.eventRegisterForm.value;
    playerProfileInput.eventId = eventId;

    this.playerProfileService.createPlayerProfile(playerProfileInput).then(() => {
      document.getElementById('closeRegisterFormButton').click();
      location.reload();
    })
  }



}
