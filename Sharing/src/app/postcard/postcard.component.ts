import { Post } from './../../classes/post';
import { PostService } from './../services/post.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {

  // post:Post;
@Input('card') card:Post;


  constructor() { }

  ngOnInit() {
  }

}
