import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TwButtonDirective } from './tw-button.directive';
import {TwRaisedButtonDirective} from "./tw-raised-button.directive";
import {TwRoundButtonDirective} from "./tw-round-button.directive";

@NgModule({
    declarations: [
        AppComponent,

    ],
  imports: [
    BrowserModule,
    TwButtonDirective,
    TwRoundButtonDirective,
    TwRaisedButtonDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
