import { Component, OnInit,Input} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-writepost',
  templateUrl: './writepost.component.html',
  styleUrls: ['./writepost.component.css']
})
export class WritepostComponent implements OnInit {
  uid: any;
post:FormGroup;

categories:any[];
// likes:any; 


@Input() description:string ;

  constructor(public fb:FormBuilder, public postservice:PostService,public categoryservice:CategoryService) {
    // this.addpost();
   localStorage.getItem('uid');
   }

  ngOnInit() 
  {
    this.post = this.fb.group({
       post:[''],
       category:[''],
       image:[''],
       uid:[this.uid],
      //  likes:[this.likes]
       });
      this.Display();
  }

  animalControl = new FormControl('', [Validators.required]);

  

 Create(post)
  {
    let result=post.value;
    console.log(result)
    this.postservice.Create(result);
    
  }

  Display()
  {
    this.categoryservice.getAll()
    .subscribe(result=>this.categories=result);
  }

  
}

 