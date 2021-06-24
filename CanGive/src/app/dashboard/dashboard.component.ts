import { Component, OnInit } from '@angular/core';
import { UserStorageService } from '../user-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showAdminBoard = false;

  userName = "";

  tokenAmount = null;

  constructor(private _userStorage: UserStorageService) { }

  ngOnInit(): void {
    const user = this._userStorage.getUser();

    this.showAdminBoard = user.IsAdmin;
    
    this.userName = user.Email;

    this.tokenAmount = user.Token;
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
