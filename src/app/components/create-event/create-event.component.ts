import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import * as uuid from 'uuid';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private router: Router, private api: APIService) { }

  stakeError = false;
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      date: new FormControl(null),
      eventImage: new FormControl(null),
      name: new FormControl(null),
      organiser: new FormControl(null),
    });

  }

  createEvent(): void {
    this.form.patchValue({
      id: uuid.v4(),
      date: new Date().toDateString()
    })

    this.api.CreateEvent(this.form.value).then(() => {
      document.getElementById('closeCreateEventFormButton').click();
      location.reload();
    })
  }

  submitEvent(){

  }



}
