import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  IsLoggedIn() {
    return localStorage.getItem('LoggedInUserData') ? true : false;
  }

  GetUserDisplayName() {
    var User = this.GetUserData();
    return User.Name.Last + ", " + User.Name.First;
  }

  GetAuthToken() : string {
    return localStorage.getItem('LoggedInUserData') ? 'bearer ' + this.GetUserData().Token : "";
  }

  private GetUserData() : any {
    var UserData = localStorage.getItem('LoggedInUserData');
    return JSON.parse(UserData);
 }
}
