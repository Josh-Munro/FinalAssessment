import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserStorageService } from './user-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  //Referening API URL
  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _redeemItemUrl = "http://localhost:3000/api/redeemItem";
  
  constructor(private http: HttpClient, private userStorage: UserStorageService) { }

  //registerUser service
  registerUser(user: { Email: { type: StringConstructor; }; Password: { type: StringConstructor; }; IsAdmin: { type: BooleanConstructor; }; }) {
    return this.http.post(this._registerUrl, user)
  }

  //Login user method retrieves information login component and passes it through and sends to API
  loginUser(user: {
      //registerUser service
      Email: { type: StringConstructor; }; Password: { type: StringConstructor; };
    }) {
    console.log(user)
    return this.http.post(this._loginUrl, user)
    
  }

  redeemItem(itemData: {
    //registerUser service
    Name: { type: StringConstructor; }; PromoCode: { type: StringConstructor;} ; UserId: {type: StringConstructor;}
  }) {
  console.log(itemData);
  itemData.UserId = (this.userStorage.getUser())._id;
  console.log('Redeeming item')
  console.log(itemData.UserId);
  return this.http.post(this._redeemItemUrl, itemData)
  
}
  
}
