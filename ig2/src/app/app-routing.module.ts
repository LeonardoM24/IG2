import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../app/components/homepage/homepage.component'
import { Milogin } from '../app/components/login/login.component'

const routes: Routes = [
  {
    path:'Homepage', component: HomepageComponent,

  },
  {
    path: '', component: Milogin
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
