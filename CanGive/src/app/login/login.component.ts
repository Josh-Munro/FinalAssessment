import { Component, OnInit } from '@angular/core';
import { AuthServiceService} from '../auth-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import { UserStorageService } from '../user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Login user data
  loginUserData = {
    Email: {
      type: String
    },
    Password: {
      type: String
    }
  }

  //variables

  failed = false;

  //Constructor passing in User storage service and auth service
  constructor(private _userStorage: UserStorageService, private _auth: AuthServiceService, private _router: Router) { }

  ngOnInit(): void {
  }

  // Login user method
  loginUser() {
    console.log(this.loginUserData)

    // Passing login information to auth
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          console.log('It works')
          this.failed = true;
          this._userStorage.saveUser(res);
          this.failed = false;
          this._router.navigate(['/dashboard']);

        },
        err => {
          console.log(err)
          
          
          //this.isSuccessful = false
        }
      )
  }

}
