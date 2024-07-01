import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from 'src/app/hello/hello.component';
import { HiComponent } from './hi/hi.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, HiComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// TypeScript Module
// TypeScrip Decorator

// Metadata: data about data
