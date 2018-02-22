import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
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
  logout()
  {
    this.authservice.logout();
  }
}
