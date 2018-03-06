import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username:any={};
  uid:string;
  constructor(public authservice:AuthService) {
    this.authservice.user$.subscribe(result=>
      {
       
        this.username=result,
        localStorage.setItem('userId',result.uid)
        // console.log("Navbar uid is "+this.uid+ this.username)
      })
   
   }

  ngOnInit() {
  }
  // logout()
  // {
  //   this.authservice.logout();
  // }
}
