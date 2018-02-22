import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username:any={};
  constructor(public authservice:AuthService) {
    this.authservice.user$.subscribe(result=>
      {
       
        this.username=result
        console.log(this.username)
      })
   
   }

  ngOnInit() {
  }
  // logout()
  // {
  //   this.authservice.logout();
  // }
}
