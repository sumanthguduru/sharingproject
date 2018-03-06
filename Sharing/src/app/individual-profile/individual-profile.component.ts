import { PostService } from './../services/post.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-individual-profile',
  templateUrl: './individual-profile.component.html',
  styleUrls: ['./individual-profile.component.css']
})
export class IndividualProfileComponent implements OnInit {

  posts: {}[];
  userId: any;
  constructor(public dialog:MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
public postService:PostService) { 
    this.userId=this.data.userid
  }

  ngOnInit() {
    this.postService.getAllById(this.userId).subscribe(p=>this.posts=p)
  }

}
