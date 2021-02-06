import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateHorseInput } from 'src/app/API.service';
import { v1 as uuid } from 'uuid';

export class HorseFormInput {
  public id : string = uuid();
  public number = 0;
  public name = 'name';
  public liveOdds: number;
  public totalBetsForHorse: number;
  public raceID: string;
  constructor() {  }
  }


@Component({
  selector: 'app-create-race',
  templateUrl: './create-race.component.html',
  styleUrls: ['./create-race.component.css']
})
export class CreateRaceComponent implements OnInit {

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) { }

  raceForm: FormGroup;
  horses: FormArray;

  // horseItems: CreateHorseInput[];


  ngOnInit(): void {
    // this.horseItems = [];
    this.raceForm = this.formBuilder.group({
      name: this.formBuilder.control(null),
      number: this.formBuilder.control(null),
      raceCardImageUrl: this.formBuilder.control(null),
      payoutFactor: this.formBuilder.control(null, [Validators.max(1), Validators.min(0)]),
      time: this.formBuilder.control(null),
      horses: this.formBuilder.array([])
    });

    // this.raceForm = new FormGroup({
    //   name: new FormControl(null),
    //   number: new FormControl(null),
    //   raceCardImageUrl: new FormControl(null),
    //   payoutFactor: new FormControl(null),
    //   time: new FormControl(null),
    //   horses: this.formBuilder.array([])
    // });
  }

  addRace(){

  }

  createHorseFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: '',
      number: ''
    });
    
  }



  get horseFormArray() {
    return this.raceForm.get('horses') as FormArray;
 }

  addHorse() {
    this.horses = this.raceForm.get('horses') as FormArray;
    this.horses.push(this.createHorseFormGroup())
    // this.horseFormArray.push(this.createHorseFormGroup());
    // this.horseItems.push( this.createHorseFormGroup())
    
  }

  removeHorse(index) {
    // this.horseItems.splice(index, 1);
    this.horseFormArray.removeAt(index);
  }
  
  createRaceModal(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

}
