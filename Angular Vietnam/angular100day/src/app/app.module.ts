import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HelloComponent } from 'src/app/hello/hello.component';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { HiComponent } from './hi/hi.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, HiComponent, BindingComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// TypeScript Module
// TypeScrip Decorator

// Metadata: data about data
