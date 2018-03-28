import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divcategory',
  templateUrl: './divcategory.component.html',
  styleUrls: ['./divcategory.component.css']
})
export class DivcategoryComponent implements OnInit {
categories:any[];
  constructor(public categoryservice:CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories()
  {
    this.categoryservice.getAll().subscribe(r=>this.categories=r)
    
    
  }


}
