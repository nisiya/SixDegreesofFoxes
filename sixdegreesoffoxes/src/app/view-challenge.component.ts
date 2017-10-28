import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { DBService } from './services/db.service';
import { NPService } from './services/np.service';

@Component({
  selector: 'view-challenge',
  templateUrl: './view-challenge.component.html',
  styleUrls: ['./app.component.css']
})
export class ViewChallengeComponent {
  private nonprofit="Dayna";
  private chal_name: String;
  private np_id: String;
  private np_name: String;
  private numUsers: Number;
  id: number; //challenge id number

  private actions: Array<Object> = [{"action_name":"Donate money"}, {"action_name":"Volunteer"}]; //array of form data
  //private actionTotals: Array<Object> = [{"action_name":"Donate money"}, {"action_name":"Volunteer"}]; //array of form data
  constructor(private router: Router, private db: DBService) {
    // Get list of NP
    // Get list of actions

    // this.db.getChallenge(this.id).then(results => {
    //   this.actions = results.actions;
    //   this.np_id = results.np_id;
    //   this.chal_name = results.chal_name;
    // });
    //
    // this.db.getNonProfit(this.np_id).then(name => {
    //   this.nonprofit = name.nonprofit;
    // });
    //
    // this.db.getTotalUsers().then(num => {
    //   this.numUsers = num.numUsers;
    // });

    /*this needs wor
    this.db.getActionTotals().then(totals => {
      this. = num.numUsers;
    });*/


  }
}

//need to populate table in html somehow
