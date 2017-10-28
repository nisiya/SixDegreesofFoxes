//Imports for the modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // This module allows for the routing between pages
import { HttpModule } from '@angular/http'; // This module allows us to make HTTP calls
import { FormsModule } from '@angular/forms'; // This module allows us to have two-way data binding in forms

import { AppComponent } from './app.component';
import { CreateAccUserComponent } from './create-acc-user.component';
import { ViewAccUserComponent } from './view-acc-user.component';
import { ViewChallengeComponent } from './view-challenge.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccUserComponent,
    ViewAccUserComponent,
    ViewChallengeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
