import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { BeneListComponent } from './components/bene-list/bene-list.component';
import { ButtonComponent } from './components/button/button.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import { AddItemComponent } from './add-item/add-item.component';
import { DisplayItemsComponent } from './display-items/display-items.component';
import { RedeemTokenComponent } from './redeem-token/redeem-token.component';
import { DisplayBeneComponent } from './display-bene/display-bene.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    BeneListComponent,
    ButtonComponent,
    AddItemComponent,
    DisplayItemsComponent,
    RedeemTokenComponent,
    DisplayBeneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
