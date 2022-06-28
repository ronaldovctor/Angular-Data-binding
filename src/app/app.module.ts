import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsComponent } from './components/components/components.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
