import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryform:FormGroup;
  
    constructor(public fb:FormBuilder,public categoryservice:CategoryService) { }

  ngOnInit() {
            this.categoryform = this.fb.group(
              {
                title:['']
               
              });
            }

  Create(categoryform)
  {
    let result=categoryform.value;
    console.log(result)
    this.categoryservice.Create(result);
  }


}
