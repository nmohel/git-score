import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  user: BehaviorSubject<object> = new BehaviorSubject({});
  userError: BehaviorSubject<any> = new BehaviorSubject('');

  constructor(private _http: HttpClient) {
  }

  requestUser(username) {
    let url = `https://api.github.com/users/${username}`;
    // this._http.get(url).subscribe(
    //   (response: object) => {
    //     this.user.next(response);
    //     console.log(response); // TODO: remove later
    //     console.log(this.user); // TODO: remove later
    //   }
    // );
    this._http.get(url).toPromise().then(
      (response) => {
        this.user.next(response);
        this.userError.next('');
      }
    ).catch(
      (reason) => {
        this.user.next({});
        this.userError.next(reason.error.message);
      }
    );
  }



}
