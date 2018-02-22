import { Injectable } from '@angular/core';
import{ AngularFireAuth} from 'angularfire2/auth'
import{AngularFireDatabase} from 'angularfire2/database' 
import * as firebase from 'firebase'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;
  constructor(public af:AngularFireAuth) { 
    this.user$=this.af.authState;
  }
  login()
  {
    this.af.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider())
  }
logout()
{
  this.af.auth.signOut();
}
}
