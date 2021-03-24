import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/API.service';
import { PlayerProfileService } from 'src/app/shared/services/player-profile.service';
import {  PlayerProfile } from '../../../models';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router, private playerProfileService: PlayerProfileService) {
    this.event = this.route.snapshot.data['resolvedEvent'];
  }

  event;  
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      avatorUrl: new FormControl(null),
      name: new FormControl(null),
      balance: new FormControl(null),
    });

  }

  createPlayer(): void {
    const playerProfileInput = this.form.value;
    playerProfileInput.eventId = this.event.id;

    this.playerProfileService.createPlayerProfile(playerProfileInput).then(() => {
      document.getElementById('closeCreateUserFormButton').click();
      location.reload();
    })
  }

  

}
