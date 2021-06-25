import { Component, OnInit } from '@angular/core';
import { AddItemService } from '../add-item.service';

@Component({
  selector: 'app-display-bene',
  templateUrl: './display-bene.component.html',
  styleUrls: ['./display-bene.component.css']
})
export class DisplayBeneComponent implements OnInit {

  //Array of Beneficiaries
  ItemData = [{
    Email: {
      type: String
    },
    Password: {
      type: String
    }
  }]

  //Constrcutor with Additem Service
  constructor(private _itemService: AddItemService) { }

  //Getting the beneficiary information
  ngOnInit(): void {
    this._itemService.getBene()
      .subscribe(
        res => this.ItemData = res,
        err => console.log(err)
      )
  }

}
