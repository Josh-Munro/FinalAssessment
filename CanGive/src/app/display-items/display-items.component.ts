import { Component, OnInit } from '@angular/core';
import {AddItemService} from '../add-item.service';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.css']
})
export class DisplayItemsComponent implements OnInit {

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

  constructor(private _itemService: AddItemService) { }

  ngOnInit(): void {
    this._itemService.getItems()
      .subscribe(
        res => this.ItemData = res,
        err => console.log(err)
      )
  }

}
