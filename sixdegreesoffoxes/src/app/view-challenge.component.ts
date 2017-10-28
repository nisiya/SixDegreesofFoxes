import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { DBService } from './services/db.service';
import { NPService } from './services/np.service';
import { UserService } from './services/user.service';

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

  challenge: any;

  private actions: Array<Object> = [{"action_name":"Donate money"}, {"action_name":"Volunteer"}]; //array of form data
  //private actionTotals: Array<Object> = [{"action_name":"Donate money"}, {"action_name":"Volunteer"}]; //array of form data
  constructor(private router: Router, private db: DBService, private user: UserService) {
    // Take challenge id
    var challenge;
    if(this.user.selectedPendingChallenge == null) {
      challenge = this.user.selectedCompletedChallenge;
    }
    else {
      challenge = this.user.selectedPendingChallenge;
    }
    console.log(challenge);

    // Based on challenge id, get that challenge

    this.db.getChallenge(challenge.c_id).then(results => {
      console.log(results);
    })

    /*this needs wor
    this.db.getActionTotals().then(totals => {
      this. = num.numUsers;
    });*/


  }
}

//need to populate table in html somehow
