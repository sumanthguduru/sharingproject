import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  username:any={};
  constructor(public authservice:AuthService) 
  {
    this.authservice.user$.subscribe(result=>
      {
       
        this.username=result
        // console.log(this.username)
      })
   }

  ngOnInit() {
  }

}
