import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { DBService } from './services/db.service';
import { NPService } from './services/np.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./app.component.css']
})
export class LoginComponent {
  public email: String;
  public pass: String;
  constructor(private router: Router, private db: DBService) {}
  login = function() {
    // Do database call to check if user exists in the database
    this.db.login(this.email, this.pass).then(user => {
      // The user information matched a row in the DB so log the user in
      if(user != null){
        this.user.isLoggedIn = true;
        sessionStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['create-challenge']);
      }
    });
  }
}
