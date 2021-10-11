import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { CurtimeComponent } from './assignment1/curtime/curtime.component';
import { PipeAssignment1Component } from './pipes/pipe-assignment1/pipe-assignment1.component';
import { PipeAssignment2Component } from './pipes/pipe-assignment2/pipe-assignment2.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    CurtimeComponent,
    PipeAssignment1Component,
    PipeAssignment2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
