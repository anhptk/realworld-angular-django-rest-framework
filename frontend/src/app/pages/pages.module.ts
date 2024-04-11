import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ]
})
export class PagesModule { }
