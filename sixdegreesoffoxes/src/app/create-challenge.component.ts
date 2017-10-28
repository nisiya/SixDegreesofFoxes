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
  private nonprofit: String;
  private name: String;
  private selected_actions: Array<Object>; //idk if this is an array

  private nonprofits: Array<Object>;
  private actions: Array<Object>; //array of form data
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
    this.db.createChallenge(this.nonprofit, this.name, this.selected_actions).then(res => {
    });
  }
}
