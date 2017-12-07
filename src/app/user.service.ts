import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  user: BehaviorSubject<object> = new BehaviorSubject({});

  constructor(private _http: HttpClient) {
    console.log(this.user);
  }

  requestUser(username) {
    let url = `https://api.github.com/users/${username}`;
    this._http.get(url).subscribe(
      (response: object) => {
        this.user.next(response);
        console.log(response); // TODO: remove later
        console.log(this.user); // TODO: remove later
      }
    );
  }



}
