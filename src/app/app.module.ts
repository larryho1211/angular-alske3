import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SurgeonsComponent } from './surgeons/surgeons.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SurgeonsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
