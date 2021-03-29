import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatTabsModule}  from '@angular/material/tabs'; 
import { MatCardModule }  from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';


import { PlayerEventListComponent } from './components/player-event-list/player-event-list.component';
import { PlayerGameHomeComponent } from './components/player-game-home/player-game-home.component';
import { EventListComponent } from './components/event-list/event-list.component'
import { CreateEventComponent } from './components/create-event/create-event.component';
import { AdminPlayerListComponent } from './components/admin-player-list/admin-player-list.component';

import { EventsResolver } from './shared/resolvers/events-resolver';
import { PlayerResolver } from './shared/resolvers/player-resolver';
import { PlayerProfilesResolver } from './shared/resolvers/player-profiles-resolver';

import { SafePipe } from './shared/pipes/safe-url';

import { AppComponent } from './app.component';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { BetPageComponent } from './components/bet-page/bet-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminEventComponent } from './components/admin-event/admin-event.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminRaceListComponent } from './components/admin-race-list/admin-race-list.component';
import { RaceFormComponent } from './components/race-form/race-form.component';
import { AdminAuthGuardService } from './shared/guards/admin-auth-guard.service';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PublicHomeComponent } from './components/public-home/public-home.component';
import { PlayerAuthGuardService } from './shared/guards/player-auth-guard.service';
import { PublicAuthGuardService } from './shared/guards/public-auth-guard.service';
import { PublicInfoComponent } from './components/public-info/public-info.component';
import { PublicSignUpComponent } from './components/public-sign-up/public-sign-up.component';
import { PlayerEventRegisterComponent } from './components/player-event-register/player-event-register.component';
import { PlayerHomeComponent } from './components/player-home/player-home.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { RaceCardComponent } from './components/race-card/race-card.component';
import { RaceResultsComponent } from './components/race-results/race-results.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminGameControlBarComponent } from './components/admin-game-control-bar/admin-game-control-bar.component';
import { AdminLiveRaceComponent } from './components/admin-live-race/admin-live-race.component';
import { AdminRaceResultComponent } from './components/admin-race-result/admin-race-result.component';
import { AdminRacePayoutComponent } from './components/admin-race-payout/admin-race-payout.component';
import { SingleRacePayoutComponent } from './components/single-race-payout/single-race-payout.component';
import { PlayerImageUploadComponent } from './components/player-image-upload/player-image-upload.component';

const appRoutes: Routes = [

  { 
    path: '',
    redirectTo: '/player/event/list',
    pathMatch: 'full'
  },
  {
    path: 'admin-home',
    component: EventListComponent,
    canActivate: [ AdminAuthGuardService ],
    resolve: {
      resolvedEvents: EventsResolver
    },
  },
  {
    path: 'admin-home/:eventId',
    component: AdminHomeComponent, 
    canActivate: [ AdminAuthGuardService ],
    canActivateChild: [ AdminAuthGuardService ],
    resolve: {
      resolvedEvent: EventsResolver
    },
    children: [
      { path: '', redirectTo: 'players', pathMatch: 'full' },
      { path: 'players', component: AdminPlayerListComponent },
      { 
        path: 'players/:playerProfileId',
        component: PlayerGameHomeComponent, 
        resolve: {
          resolvedPlayer: PlayerResolver,
        }, 
      },
      { path: 'race-list',component: AdminEventComponent},
      { path: 'result', component: AdminRaceResultComponent },
      { path: 'payout', component: AdminRacePayoutComponent },
      // { 
      //   path: 'live-race', 
      //   component: AdminLiveRaceComponent,
      //   children: [
      //     { path: '', redirectTo: 'result', pathMatch: 'full' },
      //     { path: 'result', component: AdminRaceResultComponent },
      //     { path: 'payout', component: AdminRacePayoutComponent },
      //   ]
      // },
    ]
  },
  {
    path: 'player',
    canActivate: [ PlayerAuthGuardService ],
    canActivateChild: [ PlayerAuthGuardService ],
    component: PlayerHomeComponent,
    resolve: {
      // resolvedPlayer: PlayerResolver,
    },
    children: [
      { path: '', redirectTo: 'event/list', pathMatch: 'full' },
      { 
        path: 'event/list', 
        resolve: {
          resolvedEvent: EventsResolver
        },
        component: PlayerEventListComponent 
      },
      { 
        path: 'event/:eventId', 
        resolve: {
          resolvedEvent: EventsResolver,
          resolvedPlayerProfile: PlayerProfilesResolver
        },
        component: PlayerGameHomeComponent 
      },
    ]
  },
  { path: 'public',
    component: PublicHomeComponent,
    canActivate: [ PublicAuthGuardService ],
    canActivateChild: [ PublicAuthGuardService ],
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { 
        path: 'register', 
        component: PublicSignUpComponent 
      },
      { 
        path: 'info', 
        component: PublicInfoComponent 
      },
    ]
  },
  { path: 'access-denied',
    component: ErrorPageComponent,
  },

];

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    CreateEventComponent,
    AdminPlayerListComponent,
    CreatePlayerComponent,
    PlayerGameHomeComponent,
    PlayerEventListComponent,
    BetPageComponent,
    AdminEventComponent,
    AdminHomeComponent,
    AdminRaceListComponent,
    RaceFormComponent,
    ErrorPageComponent,
    PublicHomeComponent,
    PublicInfoComponent,
    PublicSignUpComponent,
    PlayerEventRegisterComponent,
    PlayerHomeComponent,
    TransactionsComponent,
    RaceCardComponent,
    RaceResultsComponent,
    PlayerProfileComponent,
    AdminGameControlBarComponent,
    AdminLiveRaceComponent,
    AdminRaceResultComponent,
    AdminRacePayoutComponent,
    SafePipe,
    SingleRacePayoutComponent,
    PlayerImageUploadComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
       // <-- debugging purposes only
    ),
    RouterModule.forChild( appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    AmplifyUIAngularModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [EventsResolver, PlayerResolver, PlayerProfilesResolver, AdminAuthGuardService, PlayerAuthGuardService, PublicAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
