import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database'
@Injectable()
export class PostService {

  uid: string;
  constructor(public db:AngularFireDatabase) {
   this.uid= localStorage.getItem('userId');
   }

  Create(post)
  {
    
    
  return this.db.list('/post/'+this.uid).push(post);
  }


  getAll()
{
  let uid="uid1"
return this.db.list('/post/'+uid).valueChanges()
}
}
