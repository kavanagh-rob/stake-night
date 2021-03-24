import { Injectable } from '@angular/core';
import { APIService } from 'src/app/API.service';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private api: APIService){}

  createResult(resultInput){
   return this.api.CreateResult(resultInput);
}
