import { Post } from './../../classes/post';
import { PostService } from './../services/post.service';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {
  Likescount: number;
  IsLike: boolean;
  username:any={};
  // post:Post;
@Input('card') card;


  constructor(public authservice:AuthService) { 

    this.authservice.user$.subscribe(result=>
      {
       
        this.username=result
        console.log(this.username)
      })
      this. Likescount=10;
      this.IsLike=true; 

  }

  ngOnInit() {
  }

  OnClick()
  {
    
  this.IsLike = !this.IsLike;
  this.Likescount += (this.IsLike)? -1 : 1;
  }

}



 