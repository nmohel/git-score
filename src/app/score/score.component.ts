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
   }

  ngOnInit() {
    this._userService.user.subscribe(
      (user: object) => {
        console.log(user);

        if (Object.keys(user).length === 0 && user.constructor === Object) {
          this.score = null;
          this.message = null;
        } else {
          this.score = user['followers'] + user['public_repos'];

          if (this.score < 20 ) {
            this.message = "Needs Work!";
          } else if (this.score < 50) {
            this.message = "A decent start";
          } else if (this.score < 100) {
            this.message = "Doing good!";
          } else if (this.score < 200) {
            this.message = "Great job!";
          } else {
            this.message = "GitHub Elite!";
          }
        }
      }
    );
  }

}
