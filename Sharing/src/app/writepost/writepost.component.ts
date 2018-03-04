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
post:FormGroup;

categories:any[];
msgs;
uploadedFiles: any[] = [];


@Input() description:string ;

  constructor(public fb:FormBuilder, public postservice:PostService,public categoryservice:CategoryService) {
    // this.addpost();
   
   }

  ngOnInit() 
  {
    this.post = this.fb.group({
       post:['']
       });
      this.Display();
  }

  animalControl = new FormControl('', [Validators.required]);

  onUpload(event)
   {
     for(let file of event.files) 
        {
         this.uploadedFiles.push(file);
        }
     this.msgs = [];
     this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
   }

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

 // animals = [
  //   {name: 'Dog', sound: 'Woof!'},
  //   {name: 'Cat', sound: 'Meow!'},
  //   {name: 'Cow', sound: 'Moo!'},
  //   {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  // ];
  // addpost(post?)
  // { 
  //   console.log(post);
  //   this.description = post;
    
    
  // }

   // foods = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];