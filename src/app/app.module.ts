// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule

import { AppComponent } from './app.component';
import { TimeScheduleComponent } from './time-schedule/time-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // <-- Add FormsModule to imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
