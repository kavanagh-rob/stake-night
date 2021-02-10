import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { APIService } from 'src/app/API.service';
import { CreateRaceInput, CreateHorseInput} from 'src/app/API.service';
import { Event, Race, Horse } from 'src/models';
import { RaceService } from 'src/app/shared/services/race.service';
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
  selector: 'app-race-form',
  templateUrl: './race-form.component.html',
  styleUrls: ['./race-form.component.css']
})
export class RaceFormComponent implements OnInit {

  constructor(private api: APIService, private modalService: NgbModal, private formBuilder: FormBuilder, private route: ActivatedRoute, private raceService: RaceService ) {
    this.event = this.route.parent.snapshot.data['resolvedEvent'];
   }

  raceForm: FormGroup;
  event: Event;
  buttonText: string = 'Create Race';
  horses: Horse[];
  
  @Input()
  race: Race;

  ngOnInit(): void {
    if(this.race) {
      this.buttonText = 'Update Race'
      this.api.ListHorses({ raceID: { eq: this.race.id } }).then(res => { 
        this.horses = res.items;
      });
    }


  }

  initializeRaceForm(){
    this.raceForm = this.formBuilder.group({
      name: this.formBuilder.control(null),
      number: this.formBuilder.control(null),
      raceCardImageUrl: this.formBuilder.control(null),
      payoutFactor: this.formBuilder.control(null, [Validators.max(1), Validators.min(0)]),
      time: this.formBuilder.control(null),
      horses: this.formBuilder.array([])
    });

    if(this.race){
      this.raceForm.get('name').setValue(this.race.name);
      this.raceForm.get('number').setValue(this.race.number);
      this.raceForm.get('raceCardImageUrl').setValue(this.race.raceCardImageUrl);
      this.raceForm.get('payoutFactor').setValue(this.race.payoutFactor);
      this.raceForm.get('time').setValue(this.race.time);
      this.raceForm.get('name').setValue(this.race.name);  
      
      this.horses.forEach(horse => {
        this.horseFormArray.push(this.createHorseFormGroup(horse))
      })

    }
  }

  get horseFormArray(): FormArray {
    return this.raceForm.get('horses') as FormArray;
  }

  submitRace(){ 
    if (this.raceForm.valid) {
      const raceId = this.race ? this.race.id: uuid();
      const raceInput: CreateRaceInput = this.createRaceInputRequest(raceId);
      if (!this.race || confirm('Updating a race will overwrite any existing race or horse data')) {
        this.updateRace(raceId, raceInput).then(() => {
          document.getElementById('closeUpdateRaceFormButton').click();
          location.reload();
        });     
      }
    }
  }

  createRaceInputRequest(raceId){
    const raceInput: CreateRaceInput = {
      id: raceId,
      name: this.raceForm.get('name').value,
      number: this.raceForm.get('number').value,
      payoutFactor: this.raceForm.get('payoutFactor').value || 1,
      raceCardImageUrl: this.raceForm.get('raceCardImageUrl').value || '',
      time: this.raceForm.get('time').value || '..soon',
      eventID : this.event.id
    };
    if(this.race) {
      raceInput.isActive = this.race.isActive;
      raceInput.showPayoutFactor = this.race.showPayoutFactor;
      raceInput.isCurrentRace = this.race.isCurrentRace;
      raceInput['raceResultId'] = this.race['raceResultId'];
      raceInput['_version'] =  this.race['_version'];
    }
    return raceInput;
  }

 updateRace(raceId, raceInput){
    return new Promise((resolve, reject) => {
      if(this.race){
        console.log(raceInput);
        this.api.UpdateRace(raceInput).then(() => {
          this.updateHorses(raceId, resolve);
        });  

      }else{
        this.api.CreateRace(raceInput).then(() => {
          this.updateHorses(raceId, resolve);
        });  
      }
 
    })
  }

  async updateHorses(raceId, resolve){
    this.raceService.deleteHorsesForRace(this.race).then(() => {
      this.horseFormArray.controls.forEach((horseInput, index, array) => {
        const horse: CreateHorseInput = {
          id: uuid(),
          name: horseInput.get('name').value,
          number: horseInput.get('number').value,
          raceID: raceId
        }
        this.api.CreateHorse(horse).then(res => {
          if (index === array.length -1) resolve('success');
        });
      });
    });
  }

  addNewHorse() {
    this.horseFormArray.push(this.createHorseFormGroup(null));
  }



  
  createHorseFormGroup(horse): FormGroup {
    const nameValue = horse ? horse.name : '';
    const numberValue = horse ? horse.number : 0;
    return this.formBuilder.group({
      name:nameValue,
      number: numberValue
    });
    
  }

  removeHorse(index) {
    this.horseFormArray.removeAt(index);
  }
  
  createRaceModal(content) {
    this.initializeRaceForm();
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

}
