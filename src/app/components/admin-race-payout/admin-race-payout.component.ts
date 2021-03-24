import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { APIService } from 'src/app/API.service';
import { BetService } from 'src/app/shared/services/bet.service';
import { RaceService } from 'src/app/shared/services/race.service';
import { Result } from 'src/models';

@Component({
  selector: 'app-admin-race-payout',
  templateUrl: './admin-race-payout.component.html',
  styleUrls: ['./admin-race-payout.component.css']
})
export class AdminRacePayoutComponent implements OnInit {

  event;
  raceList;
  resultsList : Result[];
  finishedRaceList;
  betsList;

  constructor(private route: ActivatedRoute, private api: APIService) { 
    this.event = this.route.parent.snapshot.data['resolvedEvent']
  }


  ngOnInit() {
    this.getRacesForEvent();
    // this.loadBetsForEvent();
  }

  async getRacesForEvent(){
    const listRaceResponse = await this.api.ListRaces({ eventID: { eq: this.event.id } });
    this.raceList = listRaceResponse.items;
    const listResultsResponse = await this.api.ListResults({ eventId: { eq: this.event.id } });
    this.resultsList = listResultsResponse.items;
    this.finishedRaceList =  this.findRacesFromResults();
  }

  findRacesFromResults(){
    const self = this;
    return  self.raceList.filter(function(o1){
      return self.resultsList.some(function(o2){        
          return o1.id === o2.raceId;   
      });
  })
  
  }

}
