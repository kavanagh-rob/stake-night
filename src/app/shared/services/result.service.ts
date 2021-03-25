import { Injectable } from '@angular/core';
import { APIService } from 'src/app/API.service';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private api: APIService){}

  async getRaceResult(raceId){
    let raceResult = null;;
    const results = await this.api.ListResults({ raceId: { eq: raceId }}) ;
   
    if(results.items.length === 1){
      raceResult = results.items[0]; 
    }
    return raceResult;
  }
}
