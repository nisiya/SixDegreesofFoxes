import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { DBService } from './services/db.service';
import { NPService } from './services/np.service';

@Component({
  selector: 'create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./app.component.css']
})
export class CreateChallengeComponent {
  private nonprofit: Object = {};
  private challenge_name: String;
  selected_actions: any;

  private nonprofits: Array<Object> = [{ "np_name":"hi" }];
  private actions: Array<Object> = [{"action_name":"Donate money"}, {"action_name":"Volunteer"}]; //array of form data
  constructor(private router: Router, private db: DBService) {
    // Get list of NP
    // Get list of actions
    this.db.getNonProfits().then(nps => {
      this.nonprofits = nps;
    });
    this.db.getActions().then(actions => {
      this.actions = actions;
    });
  }
  submit = function() {
    this.db.createChallenge(this.nonprofit.np_name, this.name, this.selected_actions).then(res => {
    });
  }
}
