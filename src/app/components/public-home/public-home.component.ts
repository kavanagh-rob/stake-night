import { Component, OnInit } from '@angular/core';
import { Amplify, Hub } from '@aws-amplify/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.css']
})
export class PublicHomeComponent implements OnInit {

  navLinks: any[];

  constructor(private router: Router, public zone: NgZone) {
      Hub.listen('auth', (data) => {
          switch (data.payload.event) {
              case 'signIn':
                  this.zone.run(() => { this.router.navigate(['/player']); });
                  break;
              case 'signOut':
                  break;
          }
      })
  }

  ngOnInit(): void {
      this.navLinks = [
       {
            label: 'register',
            link: './register',
            index: 0
        },
        {
          label: 'info',
          link: './info',
          index: 1
        }
    ];
  }

}
