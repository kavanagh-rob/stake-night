import { Injectable } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { User } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: APIService)  { }

  updateUser(user){
    const updatedUser = this.copyUserModel(user);
    return this.api.UpdateUser(updatedUser);
  } 

  copyUserModel(user: User): User {
    return {
      id: user.id,
      avatorUrl: user.avatorUrl,
      name: user.name,
      balance: user.balance,
      payments: user.payments,
      eventId: user.eventId,
    };

  }

}
