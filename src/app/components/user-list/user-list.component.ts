import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { v1 as uuid } from 'uuid';
import { APIService } from 'src/app/API.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router, private api: APIService) {
    this.eventInfo = this.route.snapshot.data['resolvedEvent'];
  }
  eventInfo;
  users : any[];
  userToTopUp: any = {};
  topUpAmount;


  ngOnInit() {
    this.loadUsers();
}

loadUsers() {
  this.api.ListUsers({ subscribedEvents: { contains: this.eventInfo.id } }).then(res => { // Success
      this.users = res.items;
  });
}


navigateToUser(userId) {
  // this.router.navigateByUrl('/player/' + userId);
  this.router.navigate([userId],  {relativeTo: this.route});
}

navigateToPage(route) {
  this.router.navigate(['../' + route],  {relativeTo: this.route});
}

submitUser() {
  // const data: any = {};
  // this.userModel.userId = uuid();
  // this.userModel.eventId = this.eventInfo.eventInfoId;
  // data.item = this.userModel;
  // data.table_name = 'RN_Users';
  // if (this.userModel.balance) {
  //   const payment = {date: new Date().toLocaleString(), amount: this.userModel.balance};
  //   this.userModel.payments.push(payment);
  // }
  // this.dataService.putTableInfo(data).then(res => { // Success
  //   document.getElementById('closeUserModelButton').click();
  //   this.loadUsers();
  // });
}

topUpUser(user){
  this.userToTopUp = user;
}

submitTopUpForUser() {
  // if (this.topUpAmount && Number(this.topUpAmount) > 0){
  //   this.dataService.getUserById(this.userToTopUp.userId).then(res => {
  //     const userWithTopUp = res.Item;
  //     userWithTopUp.balance = Number(userWithTopUp.balance) + Number(this.topUpAmount);
  //     const userData: any = {};
  //     const payment = {date: new Date().toLocaleString(), amount: Number(this.topUpAmount)};
  //     if (!userWithTopUp.payments){
  //       userWithTopUp.payments = [];
  //     }
  //     userWithTopUp.payments.push(payment);
  //     userData.item = userWithTopUp;
  //     userData.table_name = 'RN_Users';

  //     // update user balance
  //     this.dataService.putTableInfo(userData).then(resp => {
  //       document.getElementById('closeTopUpModelButton').click();
  //       location.reload();
  //     });
  //   });
  // }
}
}
