import { Component, OnInit,Input} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-writepost',
  templateUrl: './writepost.component.html',
  styleUrls: ['./writepost.component.css']
})
export class WritepostComponent implements OnInit {
post:FormGroup;
 
 @Input() description:string ;

  constructor(public fb:FormBuilder, public postservice:PostService ) {
    // this.addpost();
   
   }

  ngOnInit() {
    this.post = this.fb.group(
      {
       post:['']
       
      });

  }

  // addpost(post?)
  // { 
  //   console.log(post);
  //   this.description = post;
    
    
  // }

  
  Create(post)
  {
    let result=post.value;
    console.log(result)
    this.postservice.Create(result);
  }


}

