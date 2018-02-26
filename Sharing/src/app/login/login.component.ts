import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any={};
  constructor(public authservice:AuthService,public router:Router) { 
  this.authservice.user$.subscribe(result=>
    {
     
      this.username=result
      console.log(this.username)
    })
  }
  ngOnInit() {
  }
  Login()
  {
  this.authservice.login();
  // this.router.navigate(["/"]);
  }
 

}
