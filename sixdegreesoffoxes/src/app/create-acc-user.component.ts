import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { DBService } from './services/db.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'create-acc-user',
  templateUrl: './create-acc-user.component.html',
  styleUrls: ['./app.component.css']
})
export class CreateAccUserComponent {
  private first_name: String;
  private last_name: String;
  private email: String;
  private password: String;
  constructor(private router: Router, private db: DBService) {}
  register = function() {
    console.log(this.first_name);
    // Do database call to check if user exists in the database
    this.db.registerUser(this.first_name, this.last_name, this.email, this.password).then(userId => {
      this.router.navigate(['view-acc-user']);
    });
  }
}
