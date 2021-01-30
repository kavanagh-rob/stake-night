import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { APIService } from 'src/app/API.service';


@Injectable()
export class PlayerResolver implements Resolve<any> {

  constructor(private api: APIService) {}

  resolve(route: ActivatedRouteSnapshot) {

    if (route.params['userId']) {
      return  this.api.GetUser(route.params['eventId'])
    }
  }
}
