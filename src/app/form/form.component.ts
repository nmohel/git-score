import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  username: string = '';
  error: string;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.userError.subscribe((value) => {
      this.error = value;
    });
  }

  sendUsername() {
    this._userService.requestUser(this.username);
  }

}
