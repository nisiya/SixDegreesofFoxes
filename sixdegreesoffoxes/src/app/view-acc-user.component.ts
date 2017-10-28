import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { DBService } from './services/db.service';
import { NPService } from './services/np.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'view-acc-user',
  templateUrl: './view-acc-user.component.html',
  styleUrls: ['./app.component.css']
})
export class ViewAccUserComponent {
  name: any;
  pending: any;
  completed: any;
  id: any;
  amount: any = "$100";
  constructor(private router: Router, private db: DBService, private user: UserService) {
    this.id = this.user.id; // set user id
    this.name = this.user.name;
    this.db.getPending(this.id).then(pending => {
      console.log(pending);
      this.pending = pending;
    });
    this.db.getCompletedChallenges(this.id).then(completed => {
      console.log(completed);
      this.completed = completed;
    });
    // this.pending = [{"challenge_id":"3"}];
    // this.completed = [{"challenge_id":"5"}];
  }
  goToPendingChallenge = function(index) {
    this.user.selectedPendingChallenge = this.pending[index];
    this.router.navigate(['view-challenge']);
  }
  goToCompletedChallenge = function(index) {
    this.user.selectedCompletedChallenge = this.completed[index];
    this.router.navigate(['view-challenge']);
  }
}
