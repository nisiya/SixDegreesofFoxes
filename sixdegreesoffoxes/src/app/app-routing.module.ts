/**
 * This TypeScript file handles the routing between components within the web application.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccUserComponent } from './create-acc-user.component';
import { CreateAccNPComponent } from './create-acc-np.component';
<<<<<<< HEAD
import { CreateChallengeComponent } from './create-challenge.component';
=======
>>>>>>> d26b7f9b1350f3d16eb5b69f750be6270836ac4a

//The different routes correspond to different components to load based on the route selected
const appRoutes: Routes = [
  { path: '', redirectTo: '/create-acc-user', pathMatch: 'full' },
  { path: 'create-acc-user', component: CreateAccUserComponent },
<<<<<<< HEAD
  { path: 'create-acc-np', component: CreateAccNPComponent },
  { path: 'create-challenge', component: CreateChallengeComponent }
=======
  { path: 'create-acc-np', component: CreateAccNPComponent }  
>>>>>>> d26b7f9b1350f3d16eb5b69f750be6270836ac4a
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { enableTracing: true }) ],
  exports: [ RouterModule ],
  providers: []
})

export class AppRoutingModule {}
