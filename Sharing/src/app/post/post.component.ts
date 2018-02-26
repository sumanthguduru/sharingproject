import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
post:{
  photoUrl:string
  dateCreated:string,
  location:string,
  Category:string,
  description:string
};
photo="https://material.angular.io/assets/img/examples/shiba2.jpg";
category="Movies";
location="Conn"
description="Sanple Description";
dateCreated=Date.now().toString();
  constructor() { 
    this.photo="https://material.angular.io/assets/img/examples/shiba2.jpg"
    // this.post.photoUrl="https://material.angular.io/assets/img/examples/shiba2.jpg";
    // this.post.dateCreated=Date.now().toString();
    // this.post.Category="Movies";
    // this.post.description="Sanple Description";
    // this.post.location="Connecticut"
  }

  ngOnInit() {
  }

}
