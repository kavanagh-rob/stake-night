import { Injectable } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { APICustomService } from 'src/app/API-Custom.service';
import { Event, Race } from 'src/models';


@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private api: APIService, private customApi: APICustomService)  { }

  
  getCurrentRace(eventId: string) {
    return this.customApi.ListRacesWithHorses({ eventID: { eq: eventId },  isCurrentRace: { eq: true } });
   }

  deleteHorsesForRace(race: Race) {
    return new Promise((resolve, reject) => {
      if(race){
        this.api.ListHorses({ raceID: { eq: race.id } }).then(listHorseRes => { 
          listHorseRes.items.forEach((horse, index, array) => {
            this.api.DeleteHorse({ id: horse.id}).then(deleteRes => { 
              if (index === array.length -1) 
                resolve(array.length +' Horses Deleted');
            });
          });
        });
      }else{
        resolve('No Races Found To Delete');
      }
    });
   }


  clearCurrentRace(races: Race[]) {
    return new Promise((resolve, reject) => {
      const currentRaces: any[] = races.filter(
        race => race.isCurrentRace);
      if(currentRaces.length === 0){
        resolve('No race to update');
      } 
      currentRaces.forEach((race, index, array) => {
        race.isCurrentRace = false;
        race.isActive = false;
        const updatedRace = this.copyRaceModel(race);

        this.api.UpdateRace(updatedRace)
        .then(res => {})
        .catch(error => {console.log('error updating Race')})
        .finally(() => {
          if (index === array.length -1) 
              resolve(array.length +' races updated');
        })
        ;
      });
    });
  }

  updateRace(race){
    const updatedRace = this.copyRaceModel(race);
    return this.api.UpdateRace(updatedRace);
  } 

  copyRaceModel(race: Race): Race {
    return {
      isCurrentRace: race.isCurrentRace,
      id: race.id,
      name: race.name,
      number: race.number,
      isActive: race.isActive, 
      payoutFactor: race.payoutFactor,
      showPayoutFactor: race.showPayoutFactor,
      raceCardImageUrl: race.raceCardImageUrl,
      time: race.time,    
      eventID: race.eventID,
    };

  }

}
