import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  score: number;
  message: string;

  constructor(private _userService: UserService) {
    this._userService.user.subscribe(
      (user: object) => {
        console.log('USER', user);

        this.score = Object.keys(user).length === 0 && user.constructor === Object ? 0 : user['followers'] + user['public_repos'];

        if (this.score < 20 ) {
          this.message = "Needs Work!";
        } else if (this.score < 50) {
          this.message = "A decent start";
        } else if (this.score < 100) {
          this.message = "Doing good!";
        } else if (this.score < 200) {
          this.message = "Great job!";
        } else if (this.score >= 200) {
          this.message = "GitHub Elite!";
        } else {
          this.message = '';
        }
      }
    );
   }

  ngOnInit() {
  }

}
