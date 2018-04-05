import { MatDialog } from '@angular/material';
import { Post } from './../../classes/post';
import { PostService } from './../services/post.service';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IndividualProfileComponent } from '../individual-profile/individual-profile.component';
import { WritepostComponent } from '../writepost/writepost.component';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {
  commentform: FormGroup;
  Likescount: any;
  IsLike: boolean;
  username:any={};
  // post:Post;
@Input('card') card;

@Input('cardId') cardId;
isHide:boolean=true;
  constructor(public authservice:AuthService,public dialog:MatDialog,public postservice:PostService, public fb:FormBuilder) { 

    this.authservice.user$.subscribe(result=>
      {
       
        this.username=result
        // console.log(this.username)
      })
      this. Likescount=0;
      this.IsLike=true; 

  }

  ngOnInit() {
    this.commentform = this.fb.group(
      {
        comment:['']
       
      });
  }

  Create(commentform,postid)
  {
    let result=commentform.value;
    console.log(result)
    this.postservice.updateComment(result,postid);
  }

  OnClick(post,postid)
  {
this.IsLike = !this.IsLike;
  this.Likescount += (this.IsLike)? -1 : 1;
  // let like = this.Likescount.value
this.postservice.updateLikes(this.Likescount,postid)
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
  OnHide()
  {
    this.isHide=false;
  }
  UnHide()
  {
    this.isHide=true;
  }

  ReportPopup()
  {
    this.dialog.open(WritepostComponent,{
   
      width: '500px',
      height:'460px',
      data: { username:this.username }
    
  })
  }


}



 