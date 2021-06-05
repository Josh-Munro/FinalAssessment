import { Component, OnInit } from '@angular/core';
import {BeneListComponent} from '../components/bene-list/bene-list.component';
import {ButtonComponent} from '../components/button/button.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //If User us Admin Type
  isAdmin = true;

}
