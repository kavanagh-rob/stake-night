import { Injectable } from '@angular/core';
import { PlayerProfile } from 'src/models';
import Amplify, { Storage } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  public uploadImage(image: File, playerProfile: PlayerProfile): Promise<Object> {
    return Storage.put('player-images/'+playerProfile.id, image,  { level: 'public',  acl: 'public-read',})
  } 

  public getProfileImage(playerProfile: PlayerProfile): Promise<Object> {
    return  Storage.get('player-images/'+playerProfile.id);
  };

}

