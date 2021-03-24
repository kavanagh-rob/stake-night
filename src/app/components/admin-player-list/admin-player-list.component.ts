import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { APIService } from 'src/app/API.service';
import { PlayerProfileService } from 'src/app/shared/services/player-profile.service';


@Component({
  selector: 'app-admin-player-list',
  templateUrl: './admin-player-list.component.html',
  styleUrls: ['./admin-player-list.component.css']
})
export class AdminPlayerListComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router, private modalService: NgbModal, private api: APIService, private playerProfileService: PlayerProfileService ) {
    this.event = this.route.parent.snapshot.data['resolvedEvent'];
  }
  event;
  playerProfiles : any[];
  selectedPlayer: any = {};
  topUpUserForm: FormGroup;

ngOnInit() {
  this.topUpUserForm = new FormGroup({
    topUpInput: new FormControl(null),
  });
  this.loadUsers();
}

loadUsers() {
  this.api.ListPlayerProfiles({ eventId: { eq: this.event.id } }).then(res => { // Success
      this.playerProfiles = res.items;
  });
}

openTopUpPlayerModal(player, content) {
  this.selectedPlayer = player;
  this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
}


navigateToUser(userId) {
  this.router.navigate([userId],  {relativeTo: this.route});
}

navigateToPage(route) {
  this.router.navigate(['../' + route],  {relativeTo: this.route});
}

submitUser() {
  // const data: any = {};
  // this.userModel.userId = uuid();
  // this.userModel.eventId = this.event.eventId;
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

  submitTopUpForPlayer() {
    const topUpAmount = this.topUpUserForm.get('topUpInput').value;

    if (topUpAmount && Number(topUpAmount) > 0){
      this.api.GetPlayerProfile(this.selectedPlayer.id).then(res => {
        const userWithTopUp = res;
        userWithTopUp.balance = Number(userWithTopUp.balance) + Number(topUpAmount);
        this.addPayments(userWithTopUp, topUpAmount);
       
        this.playerProfileService.updatePlayerProfile(userWithTopUp).then(resp => {
          document.getElementById('closeTopUpPlayerFormButton').click();
          location.reload();
        });
      });
    }
  }
 
  addPayments(userWithTopUp, topUpAmount){
    const payment = {date: new Date().toLocaleString(), amount: Number(topUpAmount)};
    let userPayments = [];
    if (userWithTopUp.payments){
      userPayments = JSON.parse(userWithTopUp.payments);
    }
    userPayments.push(payment);
    userWithTopUp.payments = JSON.stringify(userPayments);
  }

}
