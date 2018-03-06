import { MatDialog } from '@angular/material';
import { Post } from './../../classes/post';
import { PostService } from './../services/post.service';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IndividualProfileComponent } from '../individual-profile/individual-profile.component';


@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {
  Likescount: any;
  IsLike: boolean;
  username:any={};
  // post:Post;
@Input('card') card;



  constructor(public authservice:AuthService,public dialog:MatDialog,public postservice:PostService) { 

    this.authservice.user$.subscribe(result=>
      {
       
        this.username=result
        // console.log(this.username)
      })
      this. Likescount=0;
      this.IsLike=true; 

  }

  ngOnInit() {
  }

  OnClick(post)
  {
this.IsLike = !this.IsLike;
  this.Likescount += (this.IsLike)? -1 : 1;
  // let like = this.Likescount.value
this.postservice.Create(this.Likescount.value) 
}


  getIndividualProfile(uid)
  {
   this.dialog.open(IndividualProfileComponent,
  {
    width:"500px",
    height:"500px",
    data:{userid:uid}
  })
   
  }
}



 