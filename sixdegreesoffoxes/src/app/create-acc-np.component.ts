import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { DBService } from './services/db.service';
import { NPService } from './services/np.service';

@Component({
  selector: 'create-acc-np',
  templateUrl: './create-acc-np.component.html',
  styleUrls: ['./app.component.css']
})
export class CreateAccNPComponent {
  private np_name: String;
  private np_summary: String;
  private np_email: String;
  private np_pass: String;
  constructor(private router: Router, private db: DBService) {}
  login = function() {
    // Do database call to check if user exists in the database
    this.db.registerNP(this.np_name, this.np_email, this.np_summary, this.np_pass).then(np => {
    });
  }
}
