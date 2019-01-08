import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsciiHelperService } from './ascii-helper.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AsciiHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
