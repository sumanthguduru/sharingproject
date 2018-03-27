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
  uid: string;
  length: number;
  keys: any[]
  posts: any[];
  description: any;
  Likescount: number;
  IsLike:boolean;
  des:string;
  username:any={};
  posty:any;
  photoURL:string;
  
  constructor(public authservice:AuthService,public dialog:MatDialog,public postservice:PostService ) {
    this.uid= localStorage.getItem('userId');
    this.photoURL=localStorage.getItem('photoURL')
    this.authservice.user$.subscribe(result=>
      {
        this.username=result
        // console.log(this.username)
      })
    
    }
        
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
