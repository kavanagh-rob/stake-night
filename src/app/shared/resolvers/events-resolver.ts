import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { APIService } from 'src/app/API.service';

@Injectable()
export class EventsResolver implements Resolve<any> {

  constructor(private api: APIService) {}

  resolve(route: ActivatedRouteSnapshot) {

    if (route.params['eventId']) {
      return  this.api.GetEvent(route.params['eventId'])
    }

  return this.api.ListEvents();

  }
}
