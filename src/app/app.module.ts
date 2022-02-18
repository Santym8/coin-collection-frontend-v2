import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { Routes, RouterModule } from '@angular/router';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { DisplayComponent } from './components/display/display.component';
import { FoundPipe } from './pipes/found.pipe';

import { SearchPipe } from './pipes/search.pipe';

const routes : Routes = [
  {path: ''  , component: LoginComponent},
  {path: 'sing-up'  , component: NewUserComponent},
  {path: 'user-panel'  , component: UserPanelComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewUserComponent,
    UserPanelComponent, 
    DisplayComponent,
    FoundPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
