import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    UserRegisterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
