import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private logservice:LoginService,
    private router: Router) { }
loginArray: any[];

loginForm: FormGroup;
  ngOnInit() {
   
  }
  onSubmit(userName,password){
    this.loginArray=this.logservice.login();
    if(this.loginArray.map(us=>us.username)==userName&&
    this.loginArray.map(us=>us.password)==password){
this.router.navigate(['/home']);
   
    }
  } 
}