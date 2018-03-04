import { Post } from './../../classes/post';
import { WritepostComponent } from './../writepost/writepost.component';
import { MatDialog } from '@angular/material';

import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];
  description: any;
  Likescount: number;
  IsLike:boolean;
  des:string;
  username:any={};
  
  
  constructor(public authservice:AuthService,public dialog:MatDialog,public postservice:PostService ) {
    this.authservice.user$.subscribe(result=>
      {
        this.username=result
        console.log(this.username)
      })
    
    }
  
  post:{
          photoUrl:string
          dateCreated:string,
          location:string,
          Category:string
    
}      
        photo="https://material.angular.io/assets/img/examples/shiba2.jpg";
        category="Movies";
        location="Conn"
        dateCreated=Date.now();


        
    

  ngOnInit() {
    this.getPosts();

  }

 

openPopup()
{
this.dialog.open(WritepostComponent,{
  
    width: '850px',
    height:'700px',
    data: { username:this.username }
  
})
}

getPosts()
{
  this.postservice.getAll().subscribe(p=>this.posts=p)
}
}
