import { DataService } from './utilities/dataService';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RosterListComponent } from './rosterlist/rosterlist.component';
import { HttpClientModule } from '@angular/common/http';
import { CacheService } from './utilities/cacheservices';

@NgModule({
  declarations: [
    AppComponent,
    RosterListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [
    DataService, CacheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
