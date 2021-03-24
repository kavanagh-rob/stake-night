import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { APIService } from 'src/app/API.service';
import { PlayerProfileService } from '../services/player-profile.service';


@Injectable()
export class PlayerProfilesResolver implements Resolve<any> {

  constructor(private playerProfileService: PlayerProfileService) {}

  resolve(route: ActivatedRouteSnapshot) {
    if (route.params['eventId']) {
      return  this.playerProfileService.listPlayerProfilesForCurrentUserByEventId(route.params['eventId'])
    }

  }
}


 
