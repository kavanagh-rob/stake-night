import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { APIService } from 'src/app/API.service';
import { UserAccessService } from 'src/app/shared/services/user-access.service';
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
      eventId: new FormControl(null),
      name: new FormControl(null),
      avatorUrl: new FormControl(null),
    });
  }

  openRegisterModal(content) {
    this.selectedEvent = null;
    this.eventNotFoundError = false;
    this.profileExistsError = false;
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  async setSelectedEvent(){
    const eventId = this.eventRegisterForm.get('eventId').value;
    this.selectedEvent = await this.api.GetEvent(eventId);
  }

  async registerForEvent(){
    if (this.eventRegisterForm.valid) {
      const eventId = this.eventRegisterForm.get('eventId').value;
      this.selectedEvent = await this.api.GetEvent(eventId);
      if(this.selectedEvent === null){
        this.eventNotFoundError = true;
      }
      const userProfiles = await this.playerProfileService.listPlayerProfilesForCurrentUserByEventId(eventId);
      if(userProfiles.items.length > 0){
        this.profileExistsError = true;
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