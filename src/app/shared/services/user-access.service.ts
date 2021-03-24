import { Injectable, OnInit } from '@angular/core';
import Amplify, { Auth,  } from 'aws-amplify';



@Injectable({
  providedIn: 'root'
})
export class UserAccessService {

  constructor() { }


  async isAdminUser(){
    const currentUser =  await Auth.currentAuthenticatedUser();
    const userGroups =  currentUser.signInUserSession.accessToken.payload["cognito:groups"];
    return userGroups && userGroups.includes('admin');
  }

  async isLoggedInUser(){
    return  await Auth.currentAuthenticatedUser()
      .then(() => { return true; })
      .catch(() => { return false; });
  }

  async getUserSubId(){
    const currentUser =  await Auth.currentAuthenticatedUser()
    return currentUser.attributes['sub'];
  }

  
}
