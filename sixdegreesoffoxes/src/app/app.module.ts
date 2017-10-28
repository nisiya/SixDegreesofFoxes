//Imports for the modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // This module allows for the routing between pages
import { HttpModule } from '@angular/http'; // This module allows us to make HTTP calls
import { FormsModule } from '@angular/forms'; // This module allows us to have two-way data binding in forms

import { AppComponent } from './app.component';
import { CreateAccUserComponent } from './create-acc-user.component';
import { CreateAccNPComponent } from './create-acc-np.component';
<<<<<<< HEAD
import { CreateChallengeComponent } from './create-challenge.component';
=======

import { DBService } from './services/db.service';
import { UserService } from './services/user.service';
import { NPService } from './services/np.service';
>>>>>>> d26b7f9b1350f3d16eb5b69f750be6270836ac4a

@NgModule({
  declarations: [
    AppComponent,
    CreateAccUserComponent,
<<<<<<< HEAD
    CreateAccNPComponent,
    CreateChallengeComponent
=======
    CreateAccNPComponent
>>>>>>> d26b7f9b1350f3d16eb5b69f750be6270836ac4a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DBService,
    UserService,
    NPService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
