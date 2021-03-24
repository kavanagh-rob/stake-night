import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { UserAccessService } from '../services/user-access.service';

@Injectable()
export class PlayerAuthGuardService implements CanActivate, CanActivateChild {

  constructor(private userAccessService: UserAccessService, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActiveLogic(route, state);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   return this.canActiveLogic(route, state);
  }

  async canActiveLogic(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const isLoggedIn = await this.userAccessService.isLoggedInUser();
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/public'], { });
      return false;
    }
  }

}