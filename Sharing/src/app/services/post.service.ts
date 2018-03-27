import { Post } from './../../classes/post';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database'
@Injectable()
export class PostService {

  uid: string;
  photoURL:string;
  constructor(public db:AngularFireDatabase) {
   this.uid= localStorage.getItem('userId');
   this.photoURL=localStorage.getItem('photoURL')
   }

  Create(post:Post)
  { 
    return this.db.list('/post').push(
      {uid:this.uid,
        photoURL:this.photoURL,
        post:post.post,
        imageUrl:post.imageUrl?post.imageUrl:"",
        category:post.category,
        postCreated:new Date().toString(),
        like:post.like?post.like:""
      });
  }

  getAll()
{
  
return this.db.list('/post').snapshotChanges()
}
getAllById(uid)
{
  return this.db.list('/post',
r=>r.orderByChild('uid').equalTo(uid)).valueChanges()
}
}
