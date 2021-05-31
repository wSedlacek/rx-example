import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LetModule } from '@rx-angular/template';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, LetModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
