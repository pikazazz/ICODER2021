import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { Ma4jay3Component } from './ma4jay3/ma4jay3.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {GMapModule} from 'primeng/gmap';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    Ma4jay3Component,
    StudentComponent,
    HomeComponent,
    AddStudentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    GMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
