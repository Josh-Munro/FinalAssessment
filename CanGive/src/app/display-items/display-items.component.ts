import { Component, OnInit } from '@angular/core';
import {AddItemService} from '../add-item.service';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.css']
})
export class DisplayItemsComponent implements OnInit {

  //Item data array
  ItemData = [{
    Name: {
      type: String
    },
    Description: {
     type: String
    },
    PromoCode: {
      type: String
    }
  }]

  //Add Item Service
  constructor(private _itemService: AddItemService) { }

  //Getting items
  ngOnInit(): void {
    this._itemService.getItems()
      .subscribe(
        res => this.ItemData = res,
        err => console.log(err)
      )
  }

}
