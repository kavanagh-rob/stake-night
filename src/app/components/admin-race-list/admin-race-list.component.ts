import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { APIService } from 'src/app/API.service';
import { Race } from 'src/models';
import { RaceService } from 'src/app/shared/services/race.service';

@Component({
  selector: 'app-admin-race-list',
  templateUrl: './admin-race-list.component.html',
  styleUrls: ['./admin-race-list.component.css']
})
export class AdminRaceListComponent implements OnInit {

  
  constructor(private route: ActivatedRoute, private api: APIService, private raceService: RaceService) {
    this.event = this.route.parent.snapshot.data['resolvedEvent'];
  }

  event;
  races: any[];
  horses: any[];
  accordianOpened = -1 ;

  ngOnInit(): void {
    this.loadRaces();
  }

  isCurrentRace(race){
    return race.isCurrentRace;
  }

  deleteRace(race) {
    if (confirm('This will delete race and all associated horses')) {
      this.raceService.deleteHorsesForRace(race).then(() => {
        this.api.DeleteRace({id: race.id}).then(() => {
          location.reload();
        })
      })
    }
  }

  toggleAccordian(index) {
    this.accordianOpened = this.accordianOpened === index ? -1 : index;
    this.api.ListHorses({ raceID: { eq: this.races[index].id } }).then(res => { 
      this.horses = res.items;
    });
  }

  makeCurrentRace(race){
    if (confirm('Are you sure to make this current race ')) {
      this.raceService.clearCurrentRace(this.races).then(res => { 
        race.isCurrentRace = true;
        this.raceService.updateRace(race).then(() => {
          location.reload();
        })
      })
    }
  }

  clearCurrentRace(){
    this.raceService.clearCurrentRace(this.races).then(() => {
      location.reload();
    })
  }

  loadRaces() {
    this.api.ListRaces({ eventID: { eq: this.event.id } }).then(res => { 
        this.races = res.items;
    });
  }

  sortRaceList(prop: number) {
    return  this.races.sort((a, b) =>
    a['number'] > b['number'] ? 1 : a['number'] === b['number'] ? 0 : -1);
  }

  sortHorseList(prop: number) {
    if(! this.horses){
      return;
    }
    return  this.horses.sort((a, b) =>
    a['number'] > b['number'] ? 1 : a['number'] === b['number'] ? 0 : -1);
  }
}
