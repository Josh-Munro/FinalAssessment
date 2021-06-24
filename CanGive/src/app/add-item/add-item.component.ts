import { Component, OnInit } from '@angular/core';
import {AddItemService} from '../add-item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {


  //Item created message

  itemCreated = false;

  //Register user data
  itemData = {
    Name: {
      type: String
    },
    Description: {
      type: String
    }
  }

  constructor(private _item: AddItemService) { }

  ngOnInit(): void {
  }

  //Create Item Button Method

  createItem() {
    console.log('Button works');
    console.log(this.itemData);
    this._item.createItem(this.itemData)
    .subscribe(
      res => {
       console.log(res)
       //If successful item is created
       this.itemCreated = true;
       console.log('Success')
       window.location.reload();
      },
      err => console.log(err)
    )
  }

}
