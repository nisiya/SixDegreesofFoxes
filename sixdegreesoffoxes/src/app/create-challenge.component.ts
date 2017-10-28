import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./app.component.css']
})
export class CreateChallengeComponent {
  private first_name: String;
  private last_name: String;
  private user_email: String;
  private user_pass: String;
  private user_pass_conf: String;
  constructor(private router: Router) {
    
  }
  login = function() {
    
  }
}
