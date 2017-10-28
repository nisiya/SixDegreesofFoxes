/**
 * This TypeScript file handles the routing between components within the web application.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccUserComponent } from './create-acc-user.component';
import { ViewAccUserComponent } from './view-acc-user.component';
import { ViewChallengeComponent } from './view-challenge.component';

//The different routes correspond to different components to load based on the route selected
const appRoutes: Routes = [
  { path: '', redirectTo: '/create-acc-user', pathMatch: 'full' },
  { path: 'create-acc-user', component: CreateAccUserComponent },
  { path: 'view-acc-user', component: ViewAccUserComponent },
  { path: 'view-challenge', component: ViewChallengeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { enableTracing: true }) ],
  exports: [ RouterModule ],
  providers: []
})

export class AppRoutingModule {}
