import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRouting } from './auth.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRouting

  ]
})
export class AuthModule { }
