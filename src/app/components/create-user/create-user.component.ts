import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/API.service';
import * as uuid from 'uuid';
import {  User } from '../../../models';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router, private api: APIService) {
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

  createUser(): void {
    const userInput = this.form.value;
    userInput.id = uuid.v4();
    userInput.eventId = this.event.id;

    this.api.CreateUser(userInput).then(() => {
      document.getElementById('closeCreateUserFormButton').click();
      location.reload();
    })
  }

  

}
