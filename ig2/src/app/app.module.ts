import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { RouterModule, Routes } from '@angular/router';


import { Milogin } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: Milogin },
  // { path: 'home', component: HomeComponent },
  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    Milogin,
    HomepageComponent
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    ReactiveFormsModule,
    HttpClientModule

    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
