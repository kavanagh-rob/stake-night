import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { UserAccessService } from '../services/user-access.service';

@Injectable()
export class AdminAuthGuardService implements CanActivate, CanActivateChild {

  constructor(private userAccessService: UserAccessService, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActiveLogic(route, state);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   return this.canActiveLogic(route, state);
  }

  async canActiveLogic(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const isAdmin = await this.userAccessService.isAdminUser();
    if (isAdmin) {
      return true;
    } else {
      this.router.navigate(['/access-denied'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }

}