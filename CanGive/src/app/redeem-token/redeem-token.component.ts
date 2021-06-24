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

  constructor(private _auth: AuthServiceService, private _router: Router) { }

  ngOnInit(): void {
  }

  redeemItem() {
    console.log(this.itemData)

    this._auth.redeemItem(this.itemData)
      .subscribe(
        res => {
          console.log(res)
          console.log('It works')
          this.failed = false;
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
