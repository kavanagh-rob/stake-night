import { Component, OnInit } from '@angular/core';
import { UserAccessService } from 'src/app/shared/services/user-access.service';

@Component({
  selector: 'app-player-home',
  templateUrl: './player-home.component.html',
  styleUrls: ['./player-home.component.css']
})
export class PlayerHomeComponent implements OnInit {

  constructor(private userAuthService: UserAccessService) { }

  navLinks: any[];

 
  ngOnInit(): void {
    this.navLinks = [
     {
          label: 'event-list',
          link: '../player',
          index: 0
      }

  ];
  
  this.checkAdmin();
  }

async checkAdmin() {
  const isAdmin = await this.userAuthService.isAdminUser();
  if(isAdmin){
    this.navLinks.push(
      {
        label: 'admin-home',
        link: '../admin-home',
        class: 'adminLink',
        index: 1})  
      }
}

}
