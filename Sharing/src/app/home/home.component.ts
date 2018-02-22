import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
categories:any[];
  constructor(public categoryservice:CategoryService) { }

  ngOnInit() {
    this.Display();
  }
Display()
{
  this.categoryservice.getAll()
  .subscribe(result=>this.categories=result);
}
}
