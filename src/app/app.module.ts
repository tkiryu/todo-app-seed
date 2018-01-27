import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  IgxCheckboxModule,
  IgxButtonModule,
  IgxIconModule,
  IgxNavbarModule
} from 'igniteui-angular/main';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IgxCheckboxModule,
    IgxButtonModule,
    IgxIconModule,
    IgxNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
