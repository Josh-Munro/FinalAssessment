import { Component, OnInit } from '@angular/core';
import { UserStorageService } from '../user-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //Variables 
  showAdminBoard = false;

  userName = "";

  tokenAmount = null;

  userRole = null;

  //Constructor
  constructor(private _userStorage: UserStorageService) { }

  ngOnInit(): void {
    //Getting local user storage
    const user = this._userStorage.getUser();

    //Display informaiotn base on user role
    this.showAdminBoard = user.IsAdmin;
    
    this.userName = user.Email;

    this.tokenAmount = user.Token;

    this.userRole = user._id;

  }

  //Signout
  signOut() {
    localStorage.clear();
    console.log('SignOut');
    window.location.reload();
  }

  //If User us Admin Type
  isAdmin = true;


  //Item data

  ItemData = {
    Name: {
      type: String
    },
    Description: {
      type: String
    }
  }
}
