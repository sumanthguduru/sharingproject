import { Injectable } from '@angular/core';
import{ AngularFireAuth} from 'angularfire2/auth'
import{AngularFireDatabase} from 'angularfire2/database' 
import * as firebase from 'firebase'
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  uid: any;
  user$: Observable<firebase.User>;
  constructor(public af:AngularFireAuth,public router:Router) { 
    this.user$=this.af.authState;
    this.user$.subscribe(res=>
      
      {
        this.uid=res.uid
        console.log("user id in service is "+this.uid);
        
      }
     )
  }
  login()
  {
    
    this.af.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider()).then(u=>this.router.navigate(['/']))
  }
logout()
{
  this.af.auth.signOut();
}
}
