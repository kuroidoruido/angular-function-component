import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StdComponentsModule } from './std-components/components.module';
import { FcomponentsModule } from './fn-components/fcomponents.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StdComponentsModule,
    FcomponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
