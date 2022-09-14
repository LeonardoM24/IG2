import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';

import { Milogin } from './components/login/login.component';
import { FeedComponent } from './components/homepage/feed/feed.component';
import { DeleteAddComponent } from './components/homepage/delete-add/delete-add.component';
import { PostAddComponent } from './components/homepage/post-add/post-add.component';
import { TopNavComponent } from './components/homepage/top-nav/top-nav.component';
import { HomepageComponent } from './components/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    Milogin,
    FeedComponent,
    DeleteAddComponent,
    PostAddComponent,
    TopNavComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent],
  entryComponents: [PostAddComponent]
})
export class AppModule { }
