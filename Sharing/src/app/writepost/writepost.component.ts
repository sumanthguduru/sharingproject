import { Component, OnInit,Input} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { CategoryService } from '../services/category.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-writepost',
  templateUrl: './writepost.component.html',
  styleUrls: ['./writepost.component.css']
})
export class WritepostComponent implements OnInit {
  username:any;
  uid: any;
post:FormGroup;
photoURL:any;
categories:any[];



@Input() description:string ;

  constructor(public fb:FormBuilder, public postservice:PostService,public categoryservice:CategoryService,public authservice:AuthService) {
    
   localStorage.getItem('uid');
   localStorage.getItem('photoURL');
   this.authservice.user$.subscribe(result=>
    {
      this.username=result
      // console.log(this.username)
    })
   }

  ngOnInit() 
  {
    this.post = this.fb.group({
       post:[''],
       category:[''],
       imageUrl:[''],
       uid:[this.uid],
       photoURL:[this.photoURL]
      
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

 