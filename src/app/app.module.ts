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


import { PlayerHomeComponent } from './components/player-home/player-home.component';
import { PlayerEventComponent } from './components/player-event/player-event.component';
import { EventListComponent } from './components/event-list/event-list.component'
import { CreateEventComponent } from './components/create-event/create-event.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { EventsResolver } from './shared/resolvers/events-resolver';
import { PlayerResolver } from './shared/resolvers/player-resolver';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { BetPageComponent } from './components/bet-page/bet-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminEventComponent } from './components/admin-event/admin-event.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { RaceListComponent } from './components/race-list/race-list.component';
import { RaceFormComponent } from './components/race-form/race-form.component';

const appRoutes: Routes = [

  {
    path: 'admin-home',
    component: EventListComponent,
    resolve: {
      resolvedEvents: EventsResolver
    },
  },
  { path: '',
    redirectTo: '/admin-home',
    pathMatch: 'full'
  },
  {
    path: 'admin-home/:eventId',
    component: AdminHomeComponent, 
    resolve: {
      resolvedEvent: EventsResolver
    },
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UserListComponent },
      { 
        path: 'users/:userId',
        component: PlayerEventComponent, 
        resolve: {
          resolvedPlayer: PlayerResolver,
        }, 
      },
      { path: 'event', component: AdminEventComponent},
    ]
  },
  {
    path: 'player/:userId',
    component: PlayerHomeComponent,
    resolve: {
      resolvedPlayer: PlayerResolver,
    },
    children: [
      { 
        path: 'event/:eventId', 
        resolve: {
          resolvedEvent: EventsResolver
        },
        component: PlayerEventComponent 
      },
    ]
  },

];

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    CreateEventComponent,
    UserListComponent,
    CreateUserComponent,
    PlayerHomeComponent,
    PlayerEventComponent,
    BetPageComponent,
    AdminEventComponent,
    AdminHomeComponent,
    RaceListComponent,
    RaceFormComponent
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
    NgbModule
  ],
  providers: [EventsResolver, PlayerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
