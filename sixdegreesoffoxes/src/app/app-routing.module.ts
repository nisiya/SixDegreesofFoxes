/**
 * This TypeScript file handles the routing between components within the web application.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccUserComponent } from './create-acc-user.component';
import { CreateAccNPComponent } from './create-acc-np.component';
import { CreateChallengeComponent } from './create-challenge.component';
import { InvitePeopleComponent } from './invite-people.component';
import { LoginComponent } from './login.component';
import { PaypalComponent } from './paypal.component';

//The different routes correspond to different components to load based on the route selected
const appRoutes: Routes = [
  { path: '', redirectTo: '/create-acc-user', pathMatch: 'full' },
  { path: 'create-acc-user', component: CreateAccUserComponent },
  { path: 'create-acc-np', component: CreateAccNPComponent },
  { path: 'create-challenge', component: CreateChallengeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'invite-people', component: InvitePeopleComponent }  
  { path: 'paypal', component: PaypalComponent}    
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { enableTracing: true }) ],
  exports: [ RouterModule ],
  providers: []
})

export class AppRoutingModule {}
