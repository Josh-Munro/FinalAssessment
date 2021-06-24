import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  //Saving the user information
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    //Settign the details of the data from the log in
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    console.log('Saved user' + user);
  }

  //This mehtod gets the user details and cant return the users information
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
  }
}
