import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { NameDetailComponent } from './name-detail/name-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    NameDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
