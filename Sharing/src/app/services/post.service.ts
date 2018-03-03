import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database'
@Injectable()
export class PostService {

  constructor(public db:AngularFireDatabase) { }

  Create(post)
  {
  return this.db.list('/post/uid1').push(post);
  }


  getAll()
{
  let uid="uid1"
return this.db.list('/post/'+uid).valueChanges()
}
}
