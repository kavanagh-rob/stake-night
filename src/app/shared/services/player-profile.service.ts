import { Injectable } from '@angular/core';
import { APIService, UpdatePlayerProfileInput } from 'src/app/API.service';
import { PlayerProfile } from 'src/models';
import { UserAccessService } from './user-access.service';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PlayerProfileService {

  constructor(private api: APIService, private userAccessService: UserAccessService)  { }

  async listPlayerProfilesForCurrentUserByEventId( eventId ){
    const userId = await this.userAccessService.getUserSubId();
    return this.api.ListPlayerProfiles({ userId: { eq: userId },  eventId: { eq: eventId } });
  }

  async listPlayerProfilesForCurrentUser(){
    const userId = await this.userAccessService.getUserSubId();
    return this.api.ListPlayerProfiles({ userId: { eq: userId }});
  }

  async createPlayerProfile(playerProfileInput){
      const userId = await this.userAccessService.getUserSubId();
      playerProfileInput.userId = userId; 
      playerProfileInput.id = uuid.v4();
      return this.api.CreatePlayerProfile(playerProfileInput);
  }

  updatePlayerProfile(playerProfile){
    const updatedUser = this.copyPlayerModel(playerProfile);
    return this.api.UpdatePlayerProfile(updatedUser);
  } 

  copyPlayerModel(playerProfile: PlayerProfile): UpdatePlayerProfileInput {
    return {
      id: playerProfile.id,
      avatorUrl: playerProfile.avatorUrl,
      name: playerProfile.name,
      balance: playerProfile.balance,
      payments: playerProfile.payments,
      eventId: playerProfile.eventId,
      userId: playerProfile.userId
    };

  }

}
