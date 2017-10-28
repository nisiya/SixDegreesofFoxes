/**
 * This TypeScript file handles the routing between components within the web application.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccUserComponent } from './create-acc-user.component';
<<<<<<< HEAD
import { CreateAccNPComponent } from './create-acc-np.component';
=======
// import { CreateAccNPComponent } from './create-acc-np.component';
>>>>>>> 9182c3771ee4647e27a97721d80b70a3cba580c1

//The different routes correspond to different components to load based on the route selected
const appRoutes: Routes = [
  { path: '', redirectTo: '/create-acc-user', pathMatch: 'full' },
  { path: 'create-acc-user', component: CreateAccUserComponent },
<<<<<<< HEAD
  { path: 'create-acc-np', component: CreateAccNPComponent }  
=======
  // { path: 'create-acc-np', component: CreateAccNPComponent }
>>>>>>> 9182c3771ee4647e27a97721d80b70a3cba580c1
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { enableTracing: true }) ],
  exports: [ RouterModule ],
  providers: []
})

export class AppRoutingModule {}
