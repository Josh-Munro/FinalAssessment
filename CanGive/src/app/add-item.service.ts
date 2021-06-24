import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  //Referncing API call
  private _addItemUrl = "http://localhost:3000/api/addItem";
  private _getItemsUrl = "http://localhost:3000/api/getItems";

  constructor(private http: HttpClient) { }

  //Creating item service
  createItem(item: { Name: { type: StringConstructor; }; Description: { type: StringConstructor; }; }) {
    return this.http.post(this._addItemUrl, item)
  }

  //Display Items service
  getItems() {
    return this.http.get<any>(this._getItemsUrl)
  }
}
