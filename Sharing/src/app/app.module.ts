import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// router module
import {RouterModule} from '@angular/router';
// Firebase Module
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'
import{AngularFireAuthModule} from 'angularfire2/auth';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// for mat modules
import {MatButtonModule,MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';

import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component'
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CategoriesComponent,
    NavbarComponent,
    LoginComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // animation import because all browsers doesnt support material component
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
MatIconModule,
MatCardModule,
MatListModule,
        // Firebase Initialization
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    //Routing Config
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'categories',component:CategoriesComponent},
      {path:'login',component:LoginComponent},
      {path:'settings',component:SettingsComponent},
      

    ])
    
  
  ],
  providers: [
    CategoryService,
    AuthService,
    UsersService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
