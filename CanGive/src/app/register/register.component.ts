import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../auth-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //Register user data
  registerUserData = {
    Email: {
      type: String
    },
    Password: {
      type: String
    },
    IsAdmin: {
      type: Boolean
    }
  }
  //Constructor has dependency injection
  constructor(private _auth: AuthServiceService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
   .subscribe(
     res => {
      console.log(res)
      //If successful takes user to dashboard
      console.log('Success')
      this._router.navigate(['/dashboard']);
     },
     err => console.log(err)
   )
  }

}
