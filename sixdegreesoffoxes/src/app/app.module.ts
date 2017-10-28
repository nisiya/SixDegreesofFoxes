//Imports for the modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // This module allows for the routing between pages
import { HttpModule } from '@angular/http'; // This module allows us to make HTTP calls
import { FormsModule } from '@angular/forms'; // This module allows us to have two-way data binding in forms

import { AppComponent } from './app.component';
import { CreateAccUserComponent } from './create-acc-user.component';
import { CreateAccNPComponent } from './create-acc-np.component';
import { CreateChallengeComponent } from './create-challenge.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccUserComponent,
    CreateAccNPComponent,
    CreateChallengeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
