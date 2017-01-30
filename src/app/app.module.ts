import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {Page1} from './app.page-1';
import {Page2} from './app.page-2';

const appRoutes: Routes = [
  {path: 'page-1', component: Page1},
  {path: 'page-2', component: Page2},
  {
    path: '',
    redirectTo: '/page-1',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Page1,
    Page2
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
