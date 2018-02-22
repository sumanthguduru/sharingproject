import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database'
@Injectable()
export class CategoryService {

  constructor(public db:AngularFireDatabase) { }

  Create(category)
  {
  return this.db.list('/categories').push(category);
  }
getAll()
{
  return this.db.list('/categories').valueChanges();
}
}
