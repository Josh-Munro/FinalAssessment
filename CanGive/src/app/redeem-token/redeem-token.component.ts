import { Component, OnInit } from '@angular/core';
import { AuthServiceService} from '../auth-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import { UserStorageService } from '../user-storage.service';

@Component({
  selector: 'app-redeem-token',
  templateUrl: './redeem-token.component.html',
  styleUrls: ['./redeem-token.component.css']
})
export class RedeemTokenComponent implements OnInit {

  //User and item Data
  itemData = {
    Name: {
      type: String
    },
    PromoCode: {
      type: String
    },
    UserId : {
      type: String
    }
  }

  //variables

  failed = false;

  success = false;

  //Constructor passing AuthService, UserStorageServie and Router
  constructor(private _auth: AuthServiceService, private _userStorage: UserStorageService, private _router: Router) { }

  ngOnInit(): void {
    const user = this._userStorage.getUser();
    this.itemData.UserId = user._id;
    console.log(user);
  }

  // Redeeming item method
  redeemItem() {
    console.log(this.itemData)

    this._auth.redeemItem(this.itemData)
      .subscribe(
        res => {
          console.log(res)
          console.log('It works')
          console.log();
          this.failed = false;
          this.success = true;
          this._router.navigate(['/dashboard']);

        },
        err => {
          console.log(err)
          this.failed = true;
          console.log('Error');
        }
      )
  }

}
