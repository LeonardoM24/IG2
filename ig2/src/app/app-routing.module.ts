import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Milogin } from '../app/components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {
    path: 'login', component: Milogin
  },{
    path: 'home', component: HomepageComponent
  },{
    path: '', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
